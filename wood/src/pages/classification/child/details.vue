<template>
	<div class="class-details">
		<header class="class-details-header">
			<van-icon name="arrow-left" class='icon'/>
			<van-icon name="share" class='icon' @click='btn' />
		</header>
		<section class="class-details-main">
			<div class="img">
				<img src="" />
			</div>
			<div class="box">
				<h2 class="h">被盗沙发升级版</h2>
				<span class="span">爱上空间看得开就看，开心你考驾照呢昆虫记离开</span>
				<strong class="strong">$4600</strong>
				<nav class="box-nav">
					<li v-for='item in 4' class="li">
						<van-icon name="certificate" class='icon'/>
						<span>世界设计</span>
					</li>
				</nav>
			</div>
		</section>
		<footer class="class-details-footer">
			<nav class="footer-nav">
				<li class="li">
					<span class="span">购物清单</span>
				</li>
				<li class="li">
					<span class="span">立即购买</span>
				</li>
				<li class="li">
					<span class="span">加入购物车</span>
				</li>
			</nav>
		</footer>
		<van-popup v-model="bool" class='share'>
			<p>分享到</p>
			<nav class="share-nav">
				<li>
					<van-icon name="chat-o" class='icon'/>
					<span>朋友圈</span>
				</li>
				<li>
					<van-icon name="chat-o" class='icon'/>
					<span>微博</span>
				</li>
				<li>
					<van-icon name="chat-o" class='icon'/>
					<span>微信</span>
				</li>
			</nav>
		</van-popup>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				bool:false	
			}
		},
		mounted(){
			console.log(this.$route.params.id)
		},
		methods:{
			btn:function(){
				this.bool = !this.bool
				console.log('sss',this.bool)
			}
		}
	}
</script>

<style lang="scss">
	.class-details{
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		overflow: auto;
		background: #fff;
		z-index: 10;
		.class-details-header{
			height: .47rem;
			display: flex;
			align-items: center;
			padding: 0 .15rem;
			font-size: .2rem;
			justify-content: space-between;
		}
		.class-details-main{
			.img{
				width: 100%;
				background: #EEE8AA;
				min-height: 1rem;
				margin-bottom: .1rem;
				overflow: hidden;
				img{
					width: 100%;
				}
			}
			.box{
				overflow: hidden;
				display: flex;
				padding: 0 .1rem ;
				flex-direction: column;
				.h{
					line-height: .4rem;
					font-size: .2rem;
				}
				.span{
					line-height: .2rem;
				}
				.box-nav{
					display: flex;
					line-height: .3rem;
					justify-content: space-between;
				}
			}
		}
		.class-details-footer{
			position: absolute;
			bottom: 0;
			height: .5rem;
			width: 100%;
			background: #E0E0E0;
			.footer-nav{
				height: 100%;
				display: flex;
				justify-content: space-around;
				align-items: center;
			}
		}
		.share{
			width: 2rem;
			height: 1rem;
			p{
				text-align: center;
				line-height: .4rem;
			}
			.share-nav{
				justify-content: space-around;
				align-items: center;
				display: flex;
				li{
					display: flex;
					flex-direction: column;
					align-items: center;
					.icon{
						font-size: .25rem;
					}
				}
			}
		}
	}
</style>