<template>
<div id="app">
	
	<router-view/>
	<footer class="footer">
		<tabs-item>
			<tab-item v-for='item in footerlist' :info='item'></tab-item>
		</tabs-item>
	</footer>
</div>
</template>

<script>
export default {
	data(){
		return{
			footerlist:[
				{
					name:'首页',
					like:'/home'
				},
				{
					name:'分类',
					like:'/classification'
				},
				{
					name:'识物',
					like:'/identifying-objects'
				},
				{
					name:'购物车',
					like:'/shopping-cart'
				},
				{
					name:'个人',
					like:'/my'
				}
			]
		}
	},
    methods: {
	


    }
}
</script>

<style >
html,body,#app{
	height: 100%;
}	
.footer{
	position: absolute;
	bottom: 0;
	height: 50px;
	width: 100%;
	background: #E0E0E0;
}

</style>
