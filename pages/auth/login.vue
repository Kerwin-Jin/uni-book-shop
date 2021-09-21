<template>
	<view class="login_wrap">
		<view class="title">欢迎登录图书商城</view>
		<view>
			<input type="text" v-model="email" placeholder="test@a.com" class="u-border-bottom"/>
			<input type="password" v-model="password" placeholder="123456" class="u-border-bottom"/>
			<button :style="[inputStyle]" @click="submit">登录</button>
		</view>
		<view class="u-flex u-row-between question">
			<view>密码登录</view>
			<view>遇到问题</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				email:'',
				password:''
			}
		},
		methods: {
			async submit(){
				if(!this.email || !this.password) return;
				let params = {
					email:this.email,
					password:this.password
				}
				try{
					// 请求API进行登录
					let resLogin = await this.$u.api.authLogin(params);
					// 缓存token，将token缓存进vuex中
					// this.$u.vuex('vuex_token', resLogin.access_token);
					this.$store.state.token = resLogin.access_token;
					
					// 当有了token之后，请求用户信息
					let userInfo = await this.$u.api.getUserInfo();
					
					// 缓存用户信息
					this.$store.state.userInfo = userInfo;
					
					this.$u.route('/pages/center/index');
				}catch(e){
					this.$u.toast("用户名或密码错误");
				}
			}
		},
		computed:{
			inputStyle(){
				let style = {};
				if(this.email && this.password){
					style.color = '#fff';
					style.backgroundColor = "#f40";
				}else{
					style.backgroundColor = "#efa988";
					style.color="#fff";
				}
				return style;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login_wrap{
		padding: 20px;
		.title{
			text-align: center;
			font-size: 20px;
			margin: 40px 0;
		}
		input{
			margin: 20px 0;
			padding-bottom: 4px;
		}
		.question{
			margin-top: 10px;
			font-size: 12px;
			color: #82848A;
		}
	}
	
</style>
