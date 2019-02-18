<template>
	<div class="setup">
		<header class="header">
			<van-icon name="arrow-left" class='icon' @click='Back' />
			<span class="HTitle">通用设置</span>
		</header>
		<section class="upMain">
			<p class="Presentation p">
				<span>打小报告</span>
				<van-icon name="arrow" />
			</p>
			<p class="remind">
				<van-switch-cell v-model="checked" title="标题" />
			</p>	
			<p class="ClearCache p">
				<span>清除图片缓存</span>
				<van-icon name="arrow" />
			</p>	
			<p class="ClearCache p">
				<span>用户协议</span>
				<van-icon name="arrow" />
			</p>	

		</section>
		<span class="Logout">登出</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				checked: true
			}
		},
		methods:{
			Back:function(){
	  			console.log('后退')
	  			this.$router.back();

	  		}
		}
	}
</script>

<style lang="scss">
	.setup {
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
		.upMain{
			overflow: hidden;
			margin-top: .4rem;
			.p{
				line-height: .3rem;
				display: flex;
				justify-content: space-between;
				padding: 0 .2rem;
				font-size: .16rem;
			}
		}
		.Logout{
			display: block;
			width: 90%;
			height: .5rem;
			background: red;
			color: #fff;
			line-height: .5rem;
			text-align: center;
			position: absolute;
			bottom: .3rem;
			left: 5%;
		}
	}
</style>