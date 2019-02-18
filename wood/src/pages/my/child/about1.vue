<template>
	<div class="about">
		<header class="header">
			<van-icon name="arrow-left" class='icon' @click='Back'/>
			<span class="HTitle">关于WOOk</span>
		</header>
		<section class="aboutMain">
			<section class="aboutImg">
				<img />
			</section>
			<nav class="aboutNav">
				<li class="li">
					<p><span>了解造作：</span><strong>About Us</strong></p>
					<van-icon name="arrow" />
				</li>
				<li class="li">
					<p><span>客服电话：</span><strong>400-6636-926</strong></p>
					<van-icon name="arrow" />
				</li>
				<li class="li">
					<p><span>官方微博：</span><strong>WOOD官网</strong></p>
					<van-icon name="arrow" />
				</li>
				<li class="li">
					<p><span>分享造作：</span><strong>给身边的好朋友</strong></p>
					<van-icon name="arrow" />
				</li>
			</nav>
		</section>
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
	.about{
		.header {
			width: 100%;
			height: .4rem;
			padding: .05rem;
			display: flex;
			justify-content: center;
			align-items: center;
			box-sizing: border-box;
			.icon {
				position: absolute;
				left: 0;
				top: .1rem;
				font-size: .2rem;
			}
			.HTitle {
				font-size: .2rem;
			}
		}
		.aboutMain{
			overflow: hidden;
			padding: .1rem;
			.aboutImg{
				height: 3rem;
				box-sizing: border-box;
				width: 100%;
				background: yellow;
			}
			.aboutNav{
				font-size: .14rem;
				.li{
					display: flex;
					justify-content: space-between;
					line-height: .4rem;
					align-items: center;
				}
			}
		}
	}
</style>