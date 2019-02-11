<template>
	<div class="headerTow">
		<van-icon name="arrow-left" class='headerTowIcon'/>
		<h1>购物车</h1>
		<span class='headerTowApplication' @click="btn" :bool='bool'>{{text}}</span>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				bool:true,
				text:'编辑'
			}
		},
		methods:{
			btn:function(){
				this.bool = !this.bool,
				this.text= this.text =='编辑'? '完成':'编辑';
				console.log(this.bool)
				 this.$emit('childByValue', this.bool)
			}
		}
	}
</script>

<style lang="scss">
	.headerTow{
		width: 100%;
		display: flex;
		position: fixed;
		top: 0;
		justify-content: space-around;
		align-items: center;
		font-size: .3rem;
		.headerTowIcon{
			position: absolute;
			top: .1rem;
			left: .1rem;
		}
		.headerTowApplication{
			font-size: .15rem;
			position: absolute;
			right: .2rem;
			top:.1rem
		}
	}
</style>