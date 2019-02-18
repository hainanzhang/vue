<template>
	<div class="publicOne">
		<h1 class="h1" v-if="list.name">{{text}}</h1>
			<div class="publicOne-img">
				<img v-if='imgUrl' :src="imgUrl"  />
			</div>
			<nav class="publicOneNav">
				<li v-if='listOne' v-for='item in listOne' class="li">
					<router-link :to='item.sNo'>
						<div class="img" v-if='item'>
							<img :src="item.imgUrl" />
						</div>
						<div class="navBottom" v-if='item'>
							<p>{{item.sname}}</p>
						</div>
					</router-link>
				</li>
			</nav>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:{  ///这是渲染的数据
					name:'猜你喜欢的'
				}
			}
		},
		props:['listOne','text','imgUrl']
	}
</script>

<style lang="scss">
	.publicOne{
		width: 100%;
		overflow: hidden;
		.h1{
			line-height: 1rem;
			text-align: center;
			font-size: .2rem;
		}
		.publicOne-img{
			width: 100vw;
			margin: .1rem auto;
			img{
				width: 100%;
			}
		}
		.publicOneNav{
			width: 100%;
			overflow: hidden;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			align-items: center;
			.li{
				width: 50%;
				height: 2.4rem;
				box-sizing: border-box;
				.img{
					overflow: hidden;
					img{
						width: 100%;
					}
				}
				.navBottom{
					padding: 0 .1rem;
					p{
						font-size: .15rem;
						font-weight: 700;
						line-height: .22rem;
						text-align: center;
					}
					
				}
					
			}
		}
	}
</style>