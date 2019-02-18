<template>
	<div class="details">
		<header class="details-header">
			<van-icon name="arrow-left" class='icon'/>
			<h1>{{head}}</h1>
		</header>
		<section class="details-main">
			<div class="wrapper ">
			  	<ul class="content details-main-nav">
				    <li class="li" v-for='item in listName'>
				    	{{item}}
				    </li>
			  	</ul>
			</div>
			<nav class="details-main-list">
				<li class="list-li">
					<div class="img">
						<img src="" />
					</div>
					<div class="li-bottom">
						<p class="p-one">
							<span>产品名称</span>
							<strong>价格</strong>
						</p>
						<span class="span">说明</span>
						<p class="p-tow">
							<span>新品特惠</span>
							<span>3色可选</span>
						</p>
					</div>
				</li>
				<li class="list-li">
					<div class="img">
						<img src="" />
					</div>
					<div class="li-bottom">
						<p class="p-one">
							<span>产品名称</span>
							<strong>价格</strong>
						</p>
						<span class="span">说明</span>
						<p class="p-tow">
							<span>新品特惠</span>
							<span>3色可选</span>
						</p>
					</div>
				</li>
				<li class="list-li">
					<div class="img">
						<img src="" />
					</div>
					<div class="li-bottom">
						<p class="p-one">
							<span>产品名称</span>
							<strong>价格</strong>
						</p>
						<span class="span">说明</span>
						<p class="p-tow">
							<span>新品特惠</span>
							<span>3色可选</span>
						</p>
					</div>
				</li>
			</nav>
			
			
		</section>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		data(){
			return{
				head:'沙发',
				listName:['睡觉睡觉','速度','萨达','发放','发','放大的','公司的','所发生的','刮大风']
			}
		},
		 mounted(){
		 	let wrapper = document.querySelector('.wrapper')
			let scroll = new BScroll(wrapper,{
				scrollX:'true',
				click:'true'
			})
		 	console.log(this.$route.params.id)
		 	this.head=this.$route.params.id
		 }
		
	}
</script>

<style lang="scss">
	.details{
		background: #fff;
		box-sizing: border-box;
		padding: 0 .15rem .8rem;
		.details-header{
			display: flex;
			width: 100%;
			height: .47rem;
			font-size: .26rem;
			position: relative;
			justify-content: center;
			align-items: center;
			.icon {
				position: absolute;
				left: 0rem;
			}
		}
		.details-main{
			height: 100%;
			width: 100%;
			overflow: auto;
			padding-top: 0rem;
			box-sizing: border-box;
			.details-main-nav{
				width: 7.2rem;
				display: flex;
				.li{
					width: .8rem;
					line-height: .3rem;
				}
			}
			.details-main-list{
				margin-top: .5rem;
				overflow: hidden;
				.list-li{
					margin-bottom: .3rem;
					overflow: hidden;
					.img{
						height: 1rem;
						width: 90vw;
						background: yellow;
						margin:  0 auto;
					}
					.p-one{
						line-height: .3rem;
						font-size: .18rem;
						width: 2rem;
						display: flex;
						justify-content: space-between;
						strong{
							color: red;
						}
					}
					.span{
						color: #9E9E9E;
						line-height: .25rem;
					}
					.p-tow{
						span{
							display: inline-block;
							background: lightcoral;
							width: .8rem;
							font-size: .16rem;
							text-align: center;
							line-height: .3rem;
							margin-right: .1rem;
						}
					}
				}
			}
		}
	}
</style>