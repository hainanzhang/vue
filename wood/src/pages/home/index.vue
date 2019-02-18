<template>
	<div class="home">
		<header class="home-header">
			<h1>WOOD</h1>
			<van-icon name="search" class='icon' />
		</header>
		<section class="home-banner">
			<van-swipe :autoplay="3000" indicator-color="white" class='mmm'>
				<van-swipe-item class='sss' v-for='item in bannerList'>
					<img :src="item.imgUrl" class="image" />
				</van-swipe-item>

			</van-swipe>
		</section>
		<section class="home-main">
			<com :msg-father="Popular" text='当下流行' className='wrapperOne' />

			<com :msg-father="Popular" text='新品发布'  className='wrapperTow'/>
			
			<publictwo :listOne='list' text='全品目錄' imgUrl='https://img02.zaozuo.com/18163a9e5f5c3f05afbc697582edb323?x-oss-process=image/format,jpg/interlace,1,image/resize,w_1080,limit_0' link='/home/details/10'/>
		</section>
		<publictwo :listOne='list'  imgUrl='https://img02.zaozuo.com/9e376017a73181a89a7a8bc781be0e8f?x-oss-process=image/format,jpg/interlace,1,image/resize,w_1080,limit_0' link='/home/details/12' />
		</section>
		<publictwo :listOne='list' imgUrl='https://img02.zaozuo.com/2daa0ff3aaecda28ddd2b9972602899f?x-oss-process=image/format,jpg/interlace,1,image/resize,w_1080,limit_0' link='/home/details/13' />
		</section>
		<router-view class='ss'></router-view>
	</div>
</template>

<script>
	import com from './component.vue'
	import publictwo from '../components/publicTwo.vue'
	export default {
		components: {
			com,
			publictwo
		},
		data() {
			return {
				bannerList: [{
					imgUrl: 'https://img02.zaozuo.com/18163a9e5f5c3f05afbc697582edb323?x-oss-process=image/format,jpg/interlace,1,image/resize,w_1080,limit_0'
				}, {
					imgUrl: 'https://img02.zaozuo.com/2daa0ff3aaecda28ddd2b9972602899f?x-oss-process=image/format,jpg/interlace,1,image/resize,w_1080,limit_0'
				}, {
					imgUrl: 'https://img02.zaozuo.com/9e376017a73181a89a7a8bc781be0e8f?x-oss-process=image/format,jpg/interlace,1,image/resize,w_1080,limit_0 '
				}, {
					imgUrl: 'https://img02.zaozuo.com/a88bccdcbc47d6835bd8805dfbdd09ca?x-oss-process=image/format,jpg/interlace,1,image/resize,w_1080,limit_0'
				}, {
					imgUrl: 'https://img02.zaozuo.com/d8ca6e96a8b99a80ef9dc239db32d66c?x-oss-process=image/format,jpg/interlace,1,image/resize,w_1080,limit_0'
				}],
				Popular: [{
					sNo: 'No0001',
					imgUrl: "https://img02.zaozuo.com/2daa0ff3aaecda28ddd2b9972602899f?x-oss-process=image/format,jpg/interlace,1,image/resize,w_1080,limit_0",
					sname: "光笼",
					Price: 669,
					Choice: "三色选择"
				}, {
					sNo: 'No0002',
					imgUrl: "https://img02.zaozuo.com/9e376017a73181a89a7a8bc781be0e8f?x-oss-process=image/format,jpg/interlace,1,image/resize,w_1080,limit_0 ",
					sname: "造作豌豆实木椅",
					Price: 699,
					Choice: "两色选择"
				}, {
					sNo: 'No0003',
					imgUrl: "https://img02.zaozuo.com/a88bccdcbc47d6835bd8805dfbdd09ca?x-oss-process=image/format,jpg/interlace,1,image/resize,w_1080,limit_0",
					sname: "青山鞋柜",
					Price: 2299,
				}, {
					sNo: 'No0004',
					imgUrl: "https://img02.zaozuo.com/d8ca6e96a8b99a80ef9dc239db32d66c?x-oss-process=image/format,jpg/interlace,1,image/resize,w_1080,limit_0",
					sname: "云团床",
					Price: 3999,
					Choice: "2色选择"
				}],
				
				
				list:[{
					sNo: 'No0001',
					imgUrl: "https://img.zaozuo.com/017485c52079b829df6d24e1e6677639@!small?x-oss-process=image/format,jpg/interlace,1",
					sname: "光笼",
					Price: 669,
					Choice: "三色选择"
				}, {
					sNo: 'No0002',
					imgUrl: "https://img.zaozuo.com/11524a9612ecea78a14c6c1d6a677661@!small?x-oss-process=image/format,jpg/interlace,1",
					sname: "造作豌豆实木椅",
					Price: 699,
					Choice: "两色选择"
				}, {
					sNo: 'No0003',
					imgUrl: "https://img.zaozuo.com/156dcd81d234ca8db93ce14c61dc14f9@!small?x-oss-process=image/format,jpg/interlace,1",
					sname: "青山鞋柜",
					Price: 2299,
				}, {
					sNo: 'No0004',
					imgUrl: "https://img.zaozuo.com/dbbb12343920657a374b128414ea7816@!small?x-oss-process=image/format,jpg/interlace,1",
					sname: "云团床",
					Price: 3999,
					Choice: "2色选择"
				}, {
					sNo: 'No0005',
					imgUrl: "https://img.zaozuo.com/0bea06252b039306181d2f7cb724e239@!small?x-oss-process=image/format,jpg/interlace,1",
					sname: "光笼",
					Price: 669,
					Choice: "三色选择"
				}, {
					sNo: 'No0006',
					imgUrl: "https://img.zaozuo.com/11902f79f762246d607f5679722716ab@!small?x-oss-process=image/format,jpg/interlace,1",
					sname: "光笼",
					Price: 669,
					Choice: "三色选择"
				}, {
					sNo: 'No0007',
					imgUrl: "https://img.zaozuo.com/1306c655b817fad70b1bc436254973bd@!small?x-oss-process=image/format,jpg/interlace,1",
					sname: "光笼",
					Price: 669,
					Choice: "三色选择"
				}, {
					sNo: 'No0008',
					imgUrl: "https://img.zaozuo.com/156dcd81d234ca8db93ce14c61dc14f9@!small?x-oss-process=image/format,jpg/interlace,1",
					sname: "光笼",
					Price: 669,
					Choice: "三色选择"
				}]

			}
		}
	}
</script>

<style lang="scss">
	.home {
		position: relative;
		height: 100%;
		overflow: auto;
		.home-header {
			display: flex;
			width: 100%;
			height: .47rem;
			top: -0rem;
			position: fixed;
			left: 0;
			font-size: .26rem;
			justify-content: center;
			align-items: center;
			.icon {
				position: absolute;
				right: .2rem;
			}
		}
		.home-banner {
			width: 100%;
			.mmm {
				overflow: hidden;
				.sss {
					.image {
						width: 100%;
					}
				}
			}
		}
		.home-main {
			width: 100%;
		}
		.ss{
			width: 100vw;
			height: 100vh;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 10;
		}
	}
</style>