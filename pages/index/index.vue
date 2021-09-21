<template>
	<view class="content">
		<u-swiper :list="slides" height="320"></u-swiper>
		
		<u-tabs :list="sortList" :is-scroll="false" :current="currentIndex" @change="changeSort"></u-tabs>
		
		<u-row gutter="16" justify="left">
			<u-col span="6" v-for="good in goods" :key="good.id">
				<good-card :good="good"></good-card>
			</u-col>
		</u-row>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				slides:[],
				sortList:[
					{name:'默认'},
					{name:'销量'},
					{name:'推荐'},
					{name:'最新'},
				],
				currentIndex:0,
				goods:[],
				currentPage:1
			}
		},
		onLoad() {
			this.getData();
		},
		
		// 触底加载新的一页
		onReachBottom(){
			this.currentPage += 1;
			this.getData();
		},
		methods: {
			async getData(){
				let params = {
					page:this.currentPage,
				}
				
				if(this.currentIndex==1) params.sales=1;
				if(this.currentIndex==2) params.recommend=1;
				if(this.currentIndex==3) params.new=1;
				
				let res = await this.$u.api.getIndexData(params);
				this.slides = res.slides.map(item=>item.img_url);
				
				// 对新请求回来的数据和原数据进行合并
				this.goods = [...this.goods, ...res.goods.data];
				
			},
			// tabbar切换
			changeSort(index){
				this.currentIndex = index;
				this.goods = [];
				this.currentPage = 1;
				this.getData();
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
