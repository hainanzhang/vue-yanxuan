<template>
	<div class="Recommend">
		<section class="banner">
			<van-swipe :autoplay="3000" :width="320" indicator-color="white" class="bannerNav">
				<van-swipe-item v-for='key in listImg' class="li" ><img :src="key.picUrl" :title="key.name" /> </van-swipe-item>
			</van-swipe>
		</section>
		<section class="shopList" :style="{background:'url('+backgroundImg+')'}">
			<section class="Agreement">
				<nav class="ANav">
					<li class="li" v-for='key in ANavList' >
						<img :src="key.picUrl" />
						<span>{{key.name}}</span>
					</li>
				</nav>
			</section>
			
			<nav class="shopNav" >
				<li class="li" v-for='key in shopList'>
					<img :src="key.picUrl" />
					<span>{{key.text}}</span>
				</li>
			</nav>
		</section>
		<section v-if='activityBackgroundImg' class="activity" :style="{background: 'url('+activityBackgroundImg+')'}">
			<img :src="activityArr[0].data.contents[0].picUrl" />
			<div class="sss">
				<div class="left">
					<img :src="this.activityArr[1].data.contents[0].picUrl"/>
				</div>
				<div class="right">
					<img :src="this.activityArr[1].data.contents[1].picUrl"/>
					<img :src="this.activityArr[1].data.contents[2].picUrl"/>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'vant';
	import Vue from'vue'
	import ajax from '../../data/getDataurl/home.js'
	Vue.use(Swipe).use(SwipeItem);
	export default{
        data(){
        	return{
        		listImg:[],
        		ANavList:[],
        		backgroundImg: '',
        		shopList:[],
        		activityBackgroundImg:'',
        		activityArr:[]
        	}
        },
        created(){
        	ajax.focuslist().then( (data) =>{
        		//console.log(data)
        		this.listImg =data.map(item =>{
        			return {
        				picUrl:item.picUrl,
        				name:item.name,
        				id:item.id
        			}
        		})
        		//console.log(this.listImg)
        	})
        	ajax.topdata().then( (data) =>{
        		this.ANavList =data.map(item =>{
        			return {
        				picUrl:item.icon,
        				name:item.desc,
        			}
        		})
        	})
        	ajax.categorylist().then( (data) =>{
        		this.backgroundImg =data.background;
        		this.shopList=data.kingKongList.map((item)=>{
        			return {
        				picUrl:item.picUrl,
        				text:item.text
        			}
        		})
        	})
        	ajax.categoryList().then((data) =>{
        		this.activityBackgroundImg=data.backgroundUrl;
        		this.activityArr=data.bigPromotionList;
        		console.log(this.activityArr[1].data.contents[0].picUrl)
        	})
        }
        
    }

</script>

<style lang="scss">
	.Recommend{
		width: 100%;
		height: 100%;
		padding-bottom: 150px;
		box-sizing: content-box;
		overflow: auto;
		.banner{
			width: 100%;
			overflow: hidden;
			.bannerNav{
				display: flex;
				width: 800%;
				.li{
					width: 320px;
					img{
						width: 100%;
					}
				}
			}
		}
		.shopList{
			width: 100%;
			margin: 0;
			overflow: hidden;
			.Agreement{
				width: 100%;
				height: 40px;
				.ANav{
					display: flex;
					.li{
						font-size: 12px;
						display: flex;
						justify-content: space-between;
						align-items: center;
						img{
							height: 25px;
						}
					}
				}
			}
			.shopNav{
				overflow: hidden;
				display: flex;
				justify-content: space-around;
				flex-wrap: wrap;
				.li{
					width: 20%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					img{
						height: 45px;
						width: 45px;
					}
					span{
						height: 40px;
						width: 40px;
						font-size: 12px;
						text-align: center;
					}
				}
			}
		}
		.activity{
			overflow: hidden;
			img{
				width: 100%;
			}
			.sss{
				display: flex;
				overflow: hidden;
				.left{
					width: 50%;
					img{
						width: 100%;
					}
				}
				.right{
					width: 50%;
					display: flex;
					flex-direction: column;
				}
			}
		}
	}
</style>

<style>
	
</style>