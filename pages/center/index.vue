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
			if(!this.$u.utils.isLogin()) return;
			console.log(111);
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	
</style>
