<template>
	<div class="collectionaa">
		<header class="header">
			<van-icon name="arrow-left" class='icon' @click='Back'/>
			<span class="HTitle">我的收藏</span>
		</header>
		<section class="main">
			<nav class="mainNav">
				<li class="li">
					<input type="radio" />
					<section class="img">
						<img src="" />
					</section>
					<section class="left">
						<strong>
							鹅软石沙发
						</strong>
						<span>
							从斯德哥尔摩到北京的温暖大拥抱
						</span>
					</section>
				</li>
				<li class="li">
					<input type="radio" />
					<section class="img">
						<img src="" />
					</section>
					<section class="left">
						<strong>
							鹅软石沙发
						</strong>
						<span>
							从斯德哥尔摩到北京的温暖大拥抱
						</span>
					</section>
				</li>
				<li class="li">
					<input type="radio" />
					<section class="img">
						<img src="" />
					</section>
					<section class="left">
						<strong>
							鹅软石沙发
						</strong>
						<span>
							从斯德哥尔摩到北京的温暖大拥抱
						</span>
					</section>
				</li>
				<li class="li">
					<input type="radio" />
					<section class="img">
						<img src="" />
					</section>
					<section class="left">
						<strong>
							鹅软石沙发
						</strong>
						<span>
							从斯德哥尔摩到北京的温暖大拥抱
						</span>
					</section>
				</li>
				<li class="li">
					<input type="radio" />
					<section class="img">
						<img src="" />
					</section>
					<section class="left">
						<strong>
							鹅软石沙发
						</strong>
						<span>
							从斯德哥尔摩到北京的温暖大拥抱
						</span>
					</section>
				</li>
				<li class="li">
					<input type="radio" />
					<section class="img">
						<img src="" />
					</section>
					<section class="left">
						<strong>
							鹅软石沙发
						</strong>
						<span>
							从斯德哥尔摩到北京的温暖大拥抱
						</span>
					</section>
				</li>
			</nav>
		</section>
		<footer class="footer">
			<div class="left">
				<input type="radio" />
				<span>全选</span>
			</div>
			<div class="right">
				<strong>删除</strong>
				<strong>加入购物车</strong>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
		methods:{
			Back:function(){
	  			console.log('后退')
	  			this.$router.back();

	  		}
		}
	}
</script>

<style lang="scss">
	.collectionaa{
		background: #fff;
		.header{
			width: 100%;
			height: .4rem;
			padding: .05rem;
			display: flex;
			justify-content: center;
			align-items: center;
			box-sizing: border-box;
			.icon{
				position: absolute;
				left: 0;
				top: .1rem;
				font-size: .2rem;
			}
			.HTitle{
				font-size: .2rem;				
			}
		}
		.main{
			width: 100%;
			padding: 0;
			overflow: hidden;
			.mainNav{
				height: 100%;
				box-sizing: border-box;
				padding-bottom: .5rem;
				overflow: auto;
				.li{
					display: flex;
					height: 1.5rem;
					margin-bottom: .2rem;
					justify-content: space-around;
					align-items: center;
					.img{
						width: 1.5rem;
						height: 1.5rem;
						background: #000000;
					}
					.left{
						display: flex;
						flex-direction: column;
						width: 1.3rem;
					}
				}
			}
		}
		.footer{
			display: flex;
			justify-content: space-between;
			padding: 0 0.1rem;
			box-sizing: border-box;
			align-items: center;
			.left{
				
			}
			.right{
				display: flex;
				height: 100%;
				strong{
					background: #000000;
					color: #fff;
					display: block;
					line-height: .5rem;
					padding: 0 .1rem;
				}
			}
		}
	}
</style>