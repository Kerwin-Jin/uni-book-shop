<template>
	<view class="content">
		<u-button type="primary" @click="getData">获取数据</u-button>
		<view>{{vuex_username}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			
		},
		methods: {
			async getData(){
				let res = await this.$u.api.getIndexData();
				console.log(res);
				this.$u.vuex('vuex_username','kersin');
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
