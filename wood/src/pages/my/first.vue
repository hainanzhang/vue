<template>
	<div class="first">
		
		<section class="firstTop">
			<section class="img">
				
			</section>
			<strong>
				会飞的鱼
			</strong>
		</section>
		<nav class="firstNav">
			<router-link v-for='item in firstNavList' :to='item.link' class='li'>
				<van-icon :name="item.text"  class='icon'/>
				<span>{{item.text}}</span>
			</router-link>
		</nav>
		<nav class="firstNavTow">
			<router-link v-for='item in firstNavTow' :to="item.link" class='li'>
				<van-icon :name="item.icon"  class='icon'/>
				<span>{{item.text}}</span>
				<van-icon name="arrow" class='iconRight'/>
			</router-link>
		</nav>
		<router-view class='ss'></router-view>
	</div>
</template>

<script>
	
	export default {
		data(){
			return{
				firstNavList:[
					{
						icon:'records',
						text:'未付款',
						link:'/my/unpaid'
					},{
						icon:'todo-list-o',
						text:'已付款',
						link:'/my/paid'
					},{
						icon:'send-gift-o',
						text:'已完成',
						link:'/my/completed'
					},{
						icon:'logistics',
						text:'其他渠道',
						link:'/my/other'
					}
				],
				firstNavTow:[
					{
						icon:'star',
						text:'我的收藏',
						link:'/my/collection'
					},{
						icon:'location',
						text:'收货地址',
						link:'/my/address'
					},{
						icon:'label',
						text:'我的资料',
						link:'/my/data'
					},{
						icon:'fire-o',
						text:'账号安全',
						link:'/my/security'
					},{
						icon:'hot',
						text:'通用设置',
						link:'/my/setup'
					},{
						icon:'bag-o',
						text:'关于WOOD',
						link:'/my/about'
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	.first{
		box-sizing: border-box;
		padding: .1rem;
		.firstTop{
			align-items: center;
			display: flex;
			.img{
				height: .5rem;
				width: .5rem;
				background: yellow;
				border-radius: 50%;
			}
			strong{
				font-weight: 900;
				margin-left: .2rem;
			}
		}
		.firstNav{
			height: 1rem;
			display: flex;
			align-items: center;
			justify-content: space-around;
			.li{
				display: flex;
				align-items: center;
				height: 60%;
				justify-content: space-around;
				flex-direction: column;
				.icon{
					font-size: .3rem;
				}
			}
		}
		.firstNavTow{
			overflow: hidden;
			display: flex;
			flex-direction: column;
			.li{
				width: 100%;
				font-size: .2rem;
				line-height: .4rem;
				.icon{
					width: .3rem;
				}
				.iconRight{
					float: right;
				}
			}
		}
		.ss{
			width: 100vw;
			height: 100vh;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 11;
			background: #fff;
		}
	}
</style>