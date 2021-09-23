
const install = (Vue,vm)=>{
	
	// 验证是否登录
	const isLogin = ()=>{
		const token = vm.$store.state.token;
		if(!token){
			
			//将当前页面进行保存
			let currentPage = getCurrentPages().pop();
			
			// 获取页面路径，和请求参数
			let {route,options} = currentPage;
			// 将来源URL进行缓存，用于登录之后跳转
			
			let query = ''
			if(Object.keys(options).length){
				query = Object.keys(options).reduce((pre,curr)=>{
					return pre += curr + "="+ options[curr] + "&";
				},'?').slice(0,-1);
			}
			
			uni.setStorageSync('back_url',route + query);
			console.log(uni.getStorageSync('back_url'));
			
			vm.$u.toast("请先登录");
			setTimeout(()=>{
				vm.$u.route({
					type:'redirect',
					url: 'pages/auth/login'
				})
			},1500);
			return false;
		}
		
		return true;
	}
	
	vm.$u.utils = {
		isLogin
	}
}


export default {
	install
}