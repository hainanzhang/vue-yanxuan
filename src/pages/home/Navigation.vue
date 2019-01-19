<template>
	<div class="Navigation">
		<section class="wrapper">
			<nav class="nav content">
				<li v-for='item in data' @click='liClick(item.id)'>
					{{item.txt}}
				</li>
			</nav>
		</section>
		<van-icon name="arrow-down" class='ico' @click='iconClick'/>
	</div>
</template>

<script>
	import { Icon } from 'vant';
	import Vue from 'vue'
	import ajax from '../../data/getDataurl/home.js'
	import BScroll from 'better-scroll'
	Vue.use(Icon);
	export default{
		data(){
			return{
				index:0,
				data:[
					{
						txt:'推荐',
						id:1
					},{
						txt:'居家',
						id:2
					},{
						txt:'皮包配饰',
						id:3
					},{
						txt:'服装',
						id:4
					},{
						txt:'电器',
						id:5
					},{
						txt:'洗护',
						id:6
					},{
						txt:'饮食',
						id:7
					},{
						txt:'餐厨',
						id:8
					},{
						txt:'婴童',
						id:9
					},{
						txt:'文体',
						id:10
					},{
						txt:'特色区',
						id:11
					}
				]
			}
		},
		created(){
		},
		mounted(){
			let wrapper = document.querySelector('.wrapper')
			let scroll = new BScroll(wrapper,{
				scrollX:'true',
				click:'true'
			})
		},
		methods:{
			liClick:function(index){
				if(index != 1){
					this.index=index-2;
					ajax.catelist().then((data)=>{
						console.log(data[this.index])
						var data=data[this.index]
						this.$center.$emit('add',data)
					})
				this.$center.$emit('index',index)
				}else{
					this.$center.$emit('index',index)
				}
				
			},
			iconClick:function(){
				console.log('点击了icon')
			}
		}
	}
</script>

<style lang="scss">
	.Navigation{
		margin-top: 50px;
		position: relative;
		width: 100%;
		display: flex;
		background: wheat;
		line-height: 40px;
		.wrapper{
			overflow: auto;
			width: 80%;
			.nav{
				display: flex;
				width: 250%;
				justify-content: space-around;
			}
		}
		.ico{
			position: absolute;
			right: 0px;
			top: 0px;
			display: block;
			text-align: center;
			line-height: 40px;
			width: 20%;
			height: 100%;
			background: saddlebrown;
		}
	}
</style>