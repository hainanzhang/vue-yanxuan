<template>
	<section class="tabLeft">
		<div class="bottom">
			<section class="sss">
				<section class="left">
					<nav class="lfetList">
						<li v-for='(item,index) in leftList' @click='btn(item.id,item.showIndex,index)' class="li">
							{{item.name}}
						</li>
					</nav>
				</section>
			</section>
			
			
		</div>
	</section>
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
				leftList:[]
			}
		},
		created(){
			ajax.listmap().then(data => {
				data=data.data.data;
				console.log(data)
				this.leftList=data.map( (item) =>{
					return item
				})
			})
		},
		methods:{
			btn:function(id,no,index){
				console.log(id,no,index)
				this.$center.$emit('add',index)
			}
		}
	}
</script>

<style lang="scss" >
	.tabLeft{
		width: 25%;
		height: 100%;
		overflow: auto;
		.bottom{
			height: 478px;
			background: rgb(237,237,237);
			overflow: auto;
			.sss{
				overflow: hidden;	
				width: 100%;
				.left{
					overflow: hidden;
					width: 100%;
					.lfetList{
						overflow: hidden;
						width: 100%;
						.li{
							line-height: 50px;
							width: 100%;
							text-align: center;
						}
					}
				}		
			}
		}
	}
</style>