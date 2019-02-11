<template>
	<div class="tab">
		<section @click='btn' class="tab">
			<router-link :to='info.like' class='tabLink'>
				<van-icon :name="info.tabIcon" class='tabIcon' :style="style"/>
				{{info.name}}
			</router-link>
		</section>
			
	</div>
</template>

<script>
	
	export default {
		name:'tab-item',
		props:['info'],
		computed:{
			style(){
				if(this.$route.path==this.info.like){
					return {
						color:'#000'
					}
				}
			}
		},
		
		methods:{
			btn:function(){
				console.log('点击了')
				
			}
		}
	}
</script>

<style lang="scss">
	.tab{
		font-size: .12rem;
		height: 100%;
		.tabLink{
			display: flex;
			height: 100%;
			flex-direction:  column;
			align-items: center;
			color: #9E9E9E;
			justify-content: space-around;
			.tabIcon{
				font-size: .2rem;
			}
		}
	}
</style>