<template>
	<div class="home">

		<header class="header">
			<a href="#">网易严选</a>
			<div class="form">
				<van-icon name="search" />
				<input type="text" placeholder="搜索商品，共21342款好货" />
			</div>
			<span>登录</span>
		</header>
		<Navigation class='Navigation'/>
		<section class="main">
			<Recommend v-if='index ==1'/>
			<tabs v-else/>
		</section>	
	</div>
</template>

<script>
	import Vue from 'vue'
	import { Icon, SwipeItem, Swipe } from 'vant';
	import BScroll from 'better-scroll';
	import ajax from '../../data/getDataurl/home.js';
	import Navigation from './Navigation';
	import tabs from './tabs';
	import Recommend from './Recommend';
	Vue.use(Swipe).use(SwipeItem).use(Icon);
	export default {
		components:{
			Navigation,
			tabs,
			Recommend
		},
		data(){
			return{
				index:1
			}
		},
		created(){
			this.$center.$on('index',(index)=>{
				//console.log(index)
				this.index=index
				console.log(this.index)
			})
		}
	}
</script>

<style lang="scss">
	.home {
		height: 100%;
		overflow: hidden;
		.header{
			position:fixed;
			display: flex;
			justify-content: space-around;
			align-items: center;
			top: 0;
			height: 50px;
			background: #fff;
			width: 100%;
			box-sizing: border-box;
			border-bottom: 1px solid #EEE8AA;
			a{
				color: #000100;
				font-weight: 700;
			}
			.form{
				overflow: hidden;
				width: 190px;
				height: 30px;
				position: relative;
				input{
					line-height: 26px;
					width: 160px;
					font-size: 12px;
					padding-left: 20px;
					background: rgb(237, 237, 237);
					border: none;
				}
				i{
					position: absolute;
					top: 5px;
					left: 3px;
					font-size: 16px;
				}
			}
			span {
				border: 1px solid red;
				border-radius: 5px;
				display: inline-block;
				width: 40px;
				text-align: center;
				color: red;
			}
		}
		.Navigation{
			position: fixed;
		}
		.main{
			width: 100%;
			height: 100%;
			margin-top: 90px;
			overflow: auto;
		}
	}
</style>

<style>
	.clearfix:after{
	content:' ';
	display:block;
	clear:both;
	height:0;
	overflow:hidden;
	visibility:hidden;	
}
</style>