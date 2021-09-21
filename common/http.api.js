const install = (Vue,vm)=>{
	
	// 首页
	const getIndexData = ()=>{
		return vm.$u.get('/api/index');
	}
	
	// 认证相关
	const authLogin = params => vm.$u.post('/api/authh/login',params);
	
	// 订单相关
	
	
	// 将定义的所有接口统一放到vm.$u.api中
	vm.$u.api = {
		getIndexData,
		authLogin
	}
}

	
export default{
	install
}