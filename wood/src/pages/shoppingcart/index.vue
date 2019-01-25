<template>
	<div class="ShoppingCart">
		<!--这是有商品展示的-->
		<cart v-if='bool'/> 
		<!--这是没有商品展示的-->
		<nogoods v-else />
	</div>
</template>

<script>
	import nogoods from './nogoods'
	import cart from './cart'
	export default{
		components:{
			nogoods,
			cart,
		},
		data(){
			return{
				bool:true
			}
		}
	}
	
</script>

<style lang="scss">
.ShoppingCart{
	overflow: hidden;
	height: 100%;
}
.header{
	height: .47rem;
	position: fixed;
	top: 0;
	width: 100%;
	
	
}
</style>