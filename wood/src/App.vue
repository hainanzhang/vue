<template>
<div id="app">
	
	<section class="main">
		<Router-view></Router-view>
	</section>
	
	
	
	<footer class="footer">
		<tabs>
			<tab v-for='item in footerlist' :info='item'></tab>
		</tabs>
	</footer>
</div>
</template>

<script>


import Tab from './tabs/tab'
import Tabs from './tabs/tabs'
	
export default {
	components:{
		Tab,
		Tabs
	},
	data(){
		return{
			footerlist:[
				{
					name:'首页',
					like:'/home',
					tabIcon:'wap-home'
				},
				{
					name:'分类',
					like:'/classification',
					tabIcon:'apps-o'
				},
				{
					name:'购物车',
					like:'/shopping-cart',
					tabIcon:'shopping-cart'
				},
				{
					name:'个人',
					like:'/my',
					tabIcon:'manager'
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
	height: 100vh;
	font-size:.12rem ;
	width: 100vw;
	overflow: hidden;
	box-sizing: border-box;
}
.main{
	/* padding: .47rem 0 .5rem; */
	height: 100%;
	box-sizing: border-box;
	overflow: auto;
}
.footer{
	position: absolute;
	bottom: 0;
	height: 0.5rem;
	width: 100%;
	background: #E0E0E0;
	font-size: .12rem;
}

</style>
