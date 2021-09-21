// 这里的vm，就是我们在vue文件里面的this，所以我们能在这里获取vuex的变量，比如存放在里面的token变量
const install = (Vue, vm) => {
	// 此为自定义配置参数，具体参数见上方说明
	Vue.prototype.$u.http.setConfig({
		baseUrl: 'https://api.shop.eduwork.cn',
		loadingText: '努力加载中~',
		loadingTime: 500,
		originalData: true
	});
	
	Vue.prototype.$u.http.interceptor.request = (config) => {
		
		// config.header.Token = 'xxxxxx';
		config.header.Authorization = 'Bearer ' + vm.access_token;
		
		// 可以对某个url进行特别处理，此url参数为this.$u.get(url)中的url值
		if(config.url == '/user/login') config.header.noToken = true;
		// 最后需要将config进行return
		return config;
		// 如果return一个false值，则会取消本次请求
		// if(config.url == '/user/rest') return false; // 取消某次请求
	}
	
	// 响应拦截，判断状态码是否通过
	Vue.prototype.$u.http.interceptor.response = (res) => {
		
		if(res.statusCode == 200){
			return res.data;
		}else{
			return Promise.reject("请求发生未知错误~");
		}
	}
	
	
	// 增加patch请求，通过post模拟patch方法，原理是在请求参数中添加_method="PATCH"
	vm.$u.patch = (url, params={},header={})=>{
		
		const _params = {
			...params,
			_method:'PATCH'
		}
		return vm.$u.post(url, _params, header);
	}
}

export default {
	install
}