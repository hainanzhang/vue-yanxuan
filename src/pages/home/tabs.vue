<template>
	<div class="homeTabs">
		<img :src="data.bannerUrl" />
		
		<section class="tabsMain">
			<span>{{data.name}}</span>	
			<nav class="tabsNav">
				<li v-for='item in data.subCateList'>
					<img :src="item.wapBannerUrl" />
					<p>{{item.name}}</p>
					<span>{{item.frontName}}</span>
				</li>
			</nav>
		</section>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				data:{}
			}
		},
		created(){
			this.$center.$on('add',(data)=>{
				this.data=data;
			})
		}
		
	}
</script>

<style lang="scss">
	.homeTabs{
		width: 100%;
		overflow: hidden;
		img{
			width: 100%;
		}
		.tabsMain{
			width: 100%;
			overflow: hidden;
			text-align: center;
			.tabsNav{
				width: 100%;
				overflow: hidden;
				display: flex;
				justify-content: space-around;
				flex-wrap: wrap;
				li{
					width: 40%;
				}
			}
		}
	}
</style>