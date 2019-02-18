<template>
	<div class="address">
		<header class="header">
			<van-icon name="arrow-left" class='icon' @click='Back'/>
			<span class="HTitle">选择收货地址</span>
		</header>
		<section class="main">
			<span class="span">
				默认收货地址
			</span>
			<nav class="ReceivingAddress">
				<li class="li">
					<strong>姓名  电话号码</strong>
					<p class="p"> 
						<span>市</span>	
						<span>区</span>
						<span>号</span>
					</p>
				</li>
			</nav>
		</section>
		<footer class="footer">
			<span>添加新收货地址</span>
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
	.address{
		.header{
			width: 100%;
			height: .4rem;
			padding: .05rem;
			display: flex;
			border-bottom: 1px solid #E0E0E0;
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
			height: 100%;
			padding: .5rem 0;
			box-sizing: border-box;
			padding: 0 .1rem;
			overflow: hidden;
			.span{
				line-height: .4rem;
			}
			.ReceivingAddress{
				overflow: auto;
				height: 80%;
				.li{
					border: 1px solid #E1E1E1;
					height: .6rem;
					display: flex;
					padding: .1rem;
					justify-content: space-around;
					flex-direction:   column;
					font-size: .16rem;
					.p{
						span{
							margin-right: .1rem;
						}
					}
				}
			}
		}
		.footer{
			background: #000000;
			text-align: center;
			line-height: .5rem;
			color: #fff;
		}
	}
</style>