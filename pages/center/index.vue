<template>
	<view>
		个人中心
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			const token = this.$store.state.token;
			if(!token){
				this.$u.toast("请先登录");
				setTimeout(()=>{
					this.$u.route({
						type:'redirect',
						url: 'pages/auth/login'
					})
				},1500);
				
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	
</style>
