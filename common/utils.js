
const install = (Vue,vm)=>{
	
	// 验证是否登录
	const isLogin = ()=>{
		const token = vm.$store.state.token;
		if(!token){
			
			// 将来源URL进行缓存，用于登录之后跳转
			let fromPath = getCurrentPages().pop().route;
			uni.setStorageSync('back_url',fromPath);
			
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