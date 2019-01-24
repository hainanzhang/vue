<template>
<div id="app">
	<tabs>
		<tab v-for='item in footerlist' :info='item'>></tab>
	</tabs>
	<Router-view></Router-view>
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
					like:'/home'
				},
				{
					name:'分类',
					like:'/classification'
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
	font-size:.12rem ;
}

.footer{
	position: absolute;
	bottom: 0;
	height: 50px;
	width: 100%;
	background: #E0E0E0;
}

</style>
