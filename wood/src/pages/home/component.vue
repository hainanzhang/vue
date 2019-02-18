<template>
	<div class="home-com">
		<h1 class="h1">{{text}}</h1>
		<div :class="className">
		  	<ul class="content home-com-Nav">
			    <li v-for='item in msgFather'  class="li">
			    	<img :src="item.imgUrl"  class="img"/>
					<p>
						<span>{{item.sname}}</span>
						<strong>{{item.Price}}$</strong>
					</p>	
			    </li>
		  	</ul>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
	  data () {
	    return {
	    	list:[1,2],
	    	styleCss:{
	    		
	    	}
	    }
	  },
	  computed:{
	  	len:function(){
	  		return this.msgFather.length*100
	  	}
	  },
	  mounted(){
			let wrapper = document.querySelector('.'+this.className)
			let scroll = new BScroll(wrapper,{
				scrollX:'true',
				click:'true'
			})
			console.log(this.className)
		},
	  props:['msgFather','text','className']
	}
</script>

<style lang="scss">
	.home-com{
		width: 100%;
		overflow: hidden;
		.h1{
			line-height: .6rem;
			font-size: .2rem;
		}
		.home-com-Nav{
			overflow: auto;
			width: 400%;
			.li{
				width: 90vw;
				margin-left: 5vw;
				float: left;
				.img{
					width: 100%;
				}
				p{
					display: flex;
					width: 80%;
					margin: .1rem auto;
					justify-content: space-between;
					font-size: .16rem;
					strong{
						color: red;
					}
				}
			}
		}
	}
</style>