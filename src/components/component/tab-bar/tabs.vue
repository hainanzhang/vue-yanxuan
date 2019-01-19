<template>
	<div class="tabs">
		
		<slot/>
	</div>
</template>

<script>
	export default {
		name:'tabs-item'
	}
</script>

<style>
.tabs{
	display: flex;
	justify-content: space-around;
	height: 100%;
	width: 100%;
	align-items: center;
}
</style>