<template>
	<div class="home">
		<header class="header">
			<div>
				<h1>
					<span>WOOD</span>
				</h1>
				<i><van-icon name="search"/></i>
			</div>
		</header>
		<scroller :top=".45" :bottom=".49">
			<van-swipe class="banner" :autoplay="3000" indicator-color="white" width="320" height="200">
				<van-swipe-item v-for="item in swipeList">
					<img :src="item.img">
				</van-swipe-item>
			</van-swipe>
			<div class="popular">
				<h2>当下流行</h2>
				<div class="popularList">
					<div class="popularItem"></div>
					<div class="popularItem"></div>
					<div class="popularItem"></div>
				</div>
				
			</div>
		</scroller>
		<!-- <router-link to='/home/home01'>跳转到home01</router-link>
		<router-view></router-view> -->
	</div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
export default {
	data() {
		return {
			swipeList: [
				{img:"https://img02.zaozuo.com/18163a9e5f5c3f05afbc697582edb323?x-oss-process=image/format,jpg/interlace,1,image/resize,w_1080,limit_0"},
				{img:"https://img02.zaozuo.com/2daa0ff3aaecda28ddd2b9972602899f?x-oss-process=image/format,jpg/interlace,1,image/resize,w_1080,limit_0"},
				{img:"https://img02.zaozuo.com/9e376017a73181a89a7a8bc781be0e8f?x-oss-process=image/format,jpg/interlace,1,image/resize,w_1080,limit_0"},
				{img:"https://img02.zaozuo.com/a88bccdcbc47d6835bd8805dfbdd09ca?x-oss-process=image/format,jpg/interlace,1,image/resize,w_1080,limit_0"},
				{img:"https://img02.zaozuo.com/d8ca6e96a8b99a80ef9dc239db32d66c?x-oss-process=image/format,jpg/interlace,1,image/resize,w_1080,limit_0"}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.home{
	.header{
		height: .45rem;
			div{
				h1{
					text-align: center;
					line-height: .45rem;
					font-size: .2rem;
					font-weight: bold;
				}
				i{
					position: absolute;
					right: .1rem;
					top: .05rem;
					font-size: .24rem;
					color: #000;
				}
		    }
	}
	.banner{
		img{
			width: 100%;
		}
	}
	.popular{
		h2{
			font-size: .16rem;
			font-weight: bold;
		}
		.popularList{
			width: 800%;
			height: 1rem;
			background: lawngreen;
		}
	}
}
</style>


