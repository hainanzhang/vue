<template>
	<div class="noGoods">
		<header class="header">
			<headerOne/>
		</header>
		<section class="noGoodsBanner">
			
		</section>
		<publicOne/>
	</div>
</template>

<script>
	import headerOne from './header/header'
	import publicOne from '../components/publicOne.vue'
	export default{
		components:{
			headerOne,
			publicOne
		},
	}
	
</script>

<style lang="scss">
	.noGoods{
		height: 100%;
		overflow: auto;
		.noGoodsBanner{
			width: 100%;
			height: 1.6rem;
			background: yellow;
		}
	}
</style>