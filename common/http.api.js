const install = (Vue,vm)=>{
	
	// 首页
	const getIndexData = (params={})=>vm.$u.get('/api/index', params);
	
	// 认证相关
	const authLogin = params => vm.$u.post('/api/auth/login', params);
	
	// 订单相关
	
	// 用户信息相关
	const getUserInfo = () => vm.$u.get('/api/user');
	
	// 将定义的所有接口统一放到vm.$u.api中
	vm.$u.api = {
		getIndexData,
		authLogin,
		getUserInfo
	}
}

	
export default{
	install
}