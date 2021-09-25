<template>
	<view class="register_wrap">
		<view class="title">注册账号</view>
		<view>
			<input type="text" v-model="nickName" placeholder="请输入昵称(必需)" class="u-border-bottom"/>
			<input type="text" v-model="email" placeholder="请输入邮箱(必需)" class="u-border-bottom"/>
			<input type="password" v-model="password" placeholder="请输入密码" class="u-border-bottom"/>
			<input type="password" v-model="confirmPass" placeholder="再次输入密码" class="u-border-bottom"/>
			<button :style="[inputStyle]" @click="submit">提交</button>
		</view>
		<view class="u-flex u-row-between question">
			<view>手机注册</view>
			<view>遇到问题</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nickName:'',
				email:'',
				password:'',
				confirmPass:''
			}
		},
		methods: {
			async submit(){
				if(!this.nickName || !this.email || !this.password || !this.confirmPass) return;
				if(this.password!=this.confirmPass){
					this.$u.toast("请确认两次密码是否相同");
					return;
				}
				let params = {
					name:this.nickName,
					email:this.email,
					password:this.password,
					password_confirmation:this.confirmPass
				}
				try{
					let registerResult = await this.$u.api.authRegister(params);
					
					// 登录成功之后重定向到登录
					this.$u.route({
						type:'redirect',
						url:'pages/auth/login'
					})
				}catch{
					return;
				}
			}
		},
		computed:{
			inputStyle(){
				let style = {};
				if(this.nickName && this.email && this.password && this.confirmPass){
					style.color = '#fff';
					style.backgroundColor = '#f40';
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
.register_wrap{
		padding: 20px;
		.title{
			text-align: center;
			font-size: 25px;
			margin: 40px 0;
			letter-spacing: 3px;
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
