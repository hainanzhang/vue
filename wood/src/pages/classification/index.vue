<template>
	<div class="classification">
		<nav class=" classification-headerNav">
				<li class="li">
					沙发
				</li>
				<li class="li">
					椅凳
				</li>
				<li class="li">
					桌几
				</li>
		</nav>
		<section class="classification-main">
			<publictherr :listOne='list' imgUrl='https://img02.zaozuo.com/2daa0ff3aaecda28ddd2b9972602899f?x-oss-process=image/format,jpg/interlace,1,image/resize,w_1080,limit_0'/>
			
		</section>
		<router-view class='ss'></router-view>
	</div>
</template>

<script>
	import publictherr from '../components/publicTherr.vue'
	export default{
		components: {
			publictherr
		},
		data(){
			return{
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
	.classification{
		height: 100%;
		overflow: auto;
		.classification-headerNav{
			position: fixed;
			top: 0;
			left: 0;
			height: .47rem;
			width: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;
		}
	}
</style>