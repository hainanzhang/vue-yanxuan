<template>
	<div class="tabright">
		<section>
			<img :src=bannerImg class="Img" />
			<nav class="rMain">
				<li v-for="data in rightList" class="li">
					<img :src="data.bannerUrl" />
					<span>{{data.name}}</span>
				</li>
			</nav>
		</section>
		
		
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Icon } from 'vant';
	import BScroll from 'better-scroll';
	import ajax from '../../data/getDataurl/classData.js';
	Vue.use(Icon)
	export default{
		data(){
			return{
				rightList:[],
				bannerImg:'',
				index:0
			}
		},
		created(){
			this.$center.$on('add',(index=0)=>{
				this.index=index;
				ajax.listmap().then(data => {
					data=data.data.data[index]
					this.bannerImg=data.bannerUrl;
					this.rightList=data.subCateList
				})
			})
		},
		mounted(){
			this.$center.$emit('add',0);
		},
		methods:{
			
		},
		watch:{
			
		}
	}
</script>

<style lang="scss">
	.tabright{
		width: 75%;
		overflow: hidden;
		height: 480px;
		padding: 10px;
		box-sizing: border-box;
		section{
			height:100%;
			overflow: auto;
			.Img{
				width: 100%;
			}
			.rMain{
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				align-items: center;
				overflow: hidden;
				width: 100%;
				.li{
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					img{
						height: 60px;
					}
					span{
						width: 60px;
						display: block;
						height: 40px;
						font-size: 12px;
					}
				}
			}
		}
	}
</style>