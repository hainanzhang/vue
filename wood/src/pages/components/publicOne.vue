<template>
	<div class="publicOne">
		<h1 class="h1" v-if="list.name">{{list.name}}</h1>
		<nav class="publicOneNav">
			<li v-for='item in list.list' class="li">
				<div class="img">
					
				</div>
				<div class="navBottom">
					<p>{{item.txtP}}</p>
					<span>{{item.txtSpan}}</span>
					<strong>{{item.Price}}</strong>
					<span v-if='item.Optional'>
						{{item.Optional}}
					</span>
				</div>
			</li>
		</nav>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:{  ///这是渲染的数据
					name:'猜你喜欢的',
					list:[
						{
							imgSrc:'1111',
							txtP:'sssda',
							txtSpan:'这是span',
							Price:'￥222'
						},{
							imgSrc:'1111',
							txtP:'sssda',
							txtSpan:'这是span',
							Price:'￥222',
							Optional:'五色可选'
						},{
							imgSrc:'1111',
							txtP:'sssda',
							txtSpan:'这是span',
							Price:'￥222',
							Optional:'五色可选'
						},{
							imgSrc:'1111',
							txtP:'sssda',
							txtSpan:'这是span',
							Price:'￥222',
							Optional:'五色可选'
						},{
							imgSrc:'1111',
							txtP:'sssda',
							txtSpan:'这是span',
							Price:'￥222',
							Optional:'五色可选'
						},{
							imgSrc:'1111',
							txtP:'sssda',
							txtSpan:'这是span',
							Price:'￥222',
							Optional:'五色可选'
						}
					]
				}
			}
		}
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
				border-top: 1px solid #E0E0E0;
				box-sizing: border-box;
				.img{
					height: 1.3rem;
					background: burlywood;
				}
				.navBottom{
					padding: 0 .1rem;
					p{
						font-size: .15rem;
						font-weight: 700;
						line-height: .22rem;
					}
					span{
						line-height: .3rem;
						display: block;
					}
					strong{
						font-size: .15rem;
						font-weight: 100;
					}
				}
					
			}
			.li:nth-child(2n+1){
				border-right: 1px solid #E0E0E0;
			}
		}
	}
</style>