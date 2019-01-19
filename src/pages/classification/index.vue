<template>
	<section class="classification">
		<div class="top">
			<div class="box">
				<van-icon name="search"  class='searchico'/>
				<input type="text" placeholder="搜索商品, 共21156款好物" />
			</div>
		</div>
		<div class="main">
			<tabLeft/>
			<tabRight></tabRight>
		</div>
		
	</section>
</template>

<script>
	import Vue from 'vue';
	import { Icon } from 'vant';
	import tabLeft from './left.vue'
	import tabRight from './right.vue'
	Vue.use(Icon)
	export default{
		components:{
				tabLeft,
				tabRight
		},
		data(){
			return{
				leftList:[],
				rightList:[]
			}
		}
		
	}
</script>

<style lang="scss" >
	.classification{
		width: 100%;
		height: 100%;
		overflow: auto;
		.top{
			height: 40px;
			border-bottom: 1px solid #0000CC;
			position: fixed;
			width: 100%;
			top: 0;
			left: 0;
			padding: 5px;
			box-sizing: border-box;
			background: #fff;
			.box{
				background: rgb(237,237,237);
				height: 30px;
				border-radius: 10px;
				position: relative;
				text-align: center;
				.searchico{
					position: absolute;
					top: 8px;
				}
				input{
					width: 60%;
					height: 100%;
					border: none;
					background: rgb(237,237,237);
					font-size: 12px;
					padding-left: 20px;
				}
			}
		}
		.main{
			width: 100%;
			overflow: hidden;
			display: flex;
			margin-top: 40px;
			margin-bottom: 50px;
		}
		
	}
</style>