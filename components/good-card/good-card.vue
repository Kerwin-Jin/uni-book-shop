<template>
	<navigator class="goods-item">
		<u-image width="100%" height="300rpx" :src="good.cover_url"></u-image>
		<view class="title u-line-1">{{good.title}}</view>
		<view class="u-flex u-row-between">
			<view class="price">￥{{good.price}}</view>
			<view class="sale">销量：{{good.sales}}</view>
		</view>
	</navigator>
</template>

<script>
	export default {
		name:"good-card",
		props:['good'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.goods-item{
		padding: 40rpx;
		box-shadow: 0 0 7px rgba(0,0,0,.1);
		margin-top: 5px;
		.title{
			margin: 8px 0;
			font-weight: bold;
			font-size: 14px;
		}
		.price{
			color: #f40;
		}
	}
</style>
