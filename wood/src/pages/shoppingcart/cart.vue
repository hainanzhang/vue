<template>
	<div class="cart">
		<headerTow v-on:childByValue="childByValue"/>
		<section class="main" >
			<ul class="ulOne" v-if='bool'>
				<li>
					<div class="left">
						<input type="radio" class="radio"/>
					</div>
					<div class="center">
						<img src="" />
					</div>
					<div class="right">
						<strong>飞鸟沙发</strong>
						<span>梅红/三人座</span>
						<span>预计2018-11-03前发货</span>
						<p>￥6666<span>X1</span></p>
					</div>
				</li>
				<li>
					<div class="left">
						<input type="radio" class="radio"/>
					</div>
					<div class="center">
						<img src="" />
					</div>
					<div class="right">
						<strong>飞鸟沙发</strong>
						<span>梅红/三人座</span>
						<span>预计2018-11-03前发货</span>
						<p>￥6666<span>X1</span></p>
					</div>
				</li>
				<li>
					<div class="left">
						<input type="radio" class="radio"/>
					</div>
					<div class="center">
						<img src="" />
					</div>
					<div class="right">
						<strong>飞鸟沙发</strong>
						<span>梅红/三人座</span>
						<span>预计2018-11-03前发货</span>
						<p>￥6666<span>X1</span></p>
					</div>
				</li>
			</ul>
			<ul class="ulTow" v-else>
				<li>
					<section class="left">
						<input type="radio" />
						<div class="img">
							<img src="" />
						</div>
					</section>
					<section class="right">
						<p>已选择：<span>梅红/三人座</span></p>
						<div class="bottm"> 
							<span>-</span>
							<span>1</span>
							<span>+</span>
						</div>
					</section>
				</li>
				<li>
					<section class="left">
						<input type="radio" />
						<div class="img">
							<img src="" />
						</div>
					</section>
					<section class="right">
						<p>已选择：<span>梅红/三人座</span></p>
						<div class="bottm"> 
							<span>-</span>
							<span>1</span>
							<span>+</span>
						</div>
					</section>
				</li>
				<li>
					<section class="left">
						<input type="radio" />
						<div class="img">
							<img src="" />
						</div>
					</section>
					<section class="right">
						<p>已选择：<span>梅红/三人座</span></p>
						<div class="bottm"> 
							<span>-</span>
							<span>1</span>
							<span>+</span>
						</div>
					</section>
				</li>
			</ul>
		</section>
		
		<section class="shopFooter" v-if='bool'>
			<section class="left">
				<input type="radio" class="allRadio" />
				<span>全选</span>
			</section>
			<section class="right">
				<span>￥0</span>
				<strong>下单</strong>
			</section>
		</section>
		<section class="shopFooterTow"  v-else>
			<section class="left">
				<input type="radio" class="allRadio" />
				<span>全选</span>
			</section>
			<section class="right">
				<strong>删除所选</strong>
			</section>
			
			
		</section>
	</div>
</template>

<script>
	import headerTow from './header/headerTow.vue'
	export default{
		components:{
			headerTow
		},
		data(){
			return{
				bool:true
			}
		},
		methods:{
			childByValue:function(aa){
				this.bool=aa;
			}
		}
	}
</script>

<style lang="scss">
	.main{
		overflow: hidden;
		margin-bottom: .6rem;
		height: 100%;
		width: 100%;
		.ulOne{
			overflow: auto;
			height: 100%;
			li{
				display: flex;
				align-items: center;
				padding: .12rem;
				.center{
					width: .89rem;
					background:#eee;
					height: .95rem;
					margin: 0 .1rem;
				}
				.right{
					display: flex;
					flex-direction: column;
					span{
						line-height: .25rem;
						display: inline-block;
						
					}
					p{
						line-height: .3rem;
						font-size: .16rem;
						font-weight: 700;
						display: flex;
						justify-content: space-between;
					}
				}
			}
		}
		.ulTow{
			li{
				display: flex;
				margin-bottom: .2rem;
				justify-content: space-around;
				.left{
					display: flex;
					align-items: center;
					.img{
						width: .89rem;
						background:#eee;
						height: .95rem;
						margin: 0 .1rem;
					}
				}
				.right{
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					
					.bottm{
						display: flex;
						font-size: .16rem;
						font-weight: 700;
						justify-content: flex-end;
						span{
							display: inline-block;
							width: .3rem;
							text-align: center;
						}
					}
				}			
			}
		}
	}
	.cart{
		position: relative;
		height: 100%;
	}
	.shopFooter{
		height: .6rem;
		width: 100%;
		background: #E2E2E2;
		position: absolute;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: .1rem;
		box-sizing: border-box;
		.left{
			span{
				margin-left: .05rem;
			}
		}
		.right{
			strong{
				line-height: .6rem;
				text-align: center;
				width: .5rem ;
				background: #000000;
				color: #fff;
				display: inline-block;
				margin-left: .05rem;
			}
		}
	}
	.shopFooterTow{
		height: .6rem;
		width: 100%;
		background: #E2E2E2;
		position: absolute;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: .1rem;
		box-sizing: border-box;
		.left{
			span{
				margin-left: .05rem;
			}
		}
		.right{
			strong{
				line-height: .6rem;
				text-align: center;
				width: 1.5rem ;
				background: #E3F1FF;
				color: #006600;
				display: inline-block;
				margin-left: .05rem;
			}
		}
	}
</style>