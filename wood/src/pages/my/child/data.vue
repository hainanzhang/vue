<template>
	<div class="data">
		<header class="header">
			<van-icon name="arrow-left" class='icon' @click='Back'/>
			<span class="HTitle">个人资料</span>
		</header>
		<section class="main">
			<div class="headPortrait">
				<div class="img">
					<img src="" />
				</div>
				<p>
					<span>点击更换头像</span>
					<van-icon name="arrow" class='icon'/>
				</p>
			</div>
			<div class="Nickname">
				<span>昵称</span>
				<input type="text"  class="nName"/>
			</div>
			<div class="birthday">
				<div class="left">
					<span>生日</span>
					<span @click='birthday'>{{text}}</span>
				</div>
				<van-icon name="arrow" class='icon'/>
			</div>
			<section class="sex birthday">
				<div class="left">
					<span>性别</span>
					<span @click='sex'>{{sexText}}</span>
				</div>
				<van-icon name="arrow" class='icon'/>
			</section>
			
			
			
			<van-datetime-picker
			  	v-model="currentDate"
			  	type="date"
			  	v-if='bool'
			  	@confirm='getColumnValue'
			  	@cancel='getColumn'
			/>
			<nav class="sexNav" v-if='sexbool'>
				<li v-for='item in sexList' @click='sexChoice(item)'>{{item}}</li>
			</nav>
			<span class="btnModify">确认修改</span>
		</section>
	</div>
</template>

<script>
	export default {
	  	data() {
		    return {
		      currentDate: new Date(),
		      bool:false,
		      text:'点击设置',
		      sexbool:false,
		      sexText:'点击设置',
		      sexList:['男','女','其他']
		    };
	  	},
	  	methods:{
	  		birthday:function(){
	  			this.bool= !this.bool;
	  		},
	  		getColumnValue:function(index){
	  			this.bool= !this.bool;
	  			var date = new Date(index);
	  			var dateTypeDate = date.getFullYear(); //年  
 				dateTypeDate += "-" + date.getMonth(); //月  
				dateTypeDate += "-" + date.getDay(); //日  
	  			this.text=dateTypeDate
	  		},
	  		getColumn:function(){
	  			this.bool= !this.bool;
	  		},
	  		sex:function(){
	  			this.sexbool= !this.sexbool
	  		},
	  		sexChoice:function(text){
	  			this.sexText=text
	  			this.sexbool= !this.sexbool
	  		},
	  		Back:function(){
	  			console.log('后退')
	  			this.$router.back();

	  		}
	  	}
	  	
	};
</script>

<style lang="scss">
	.data{
		.header{
			width: 100%;
			height: .4rem;
			padding: .05rem;
			display: flex;
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
			padding:.5rem .1rem ;
			overflow: hidden;
			.headPortrait{
				display: flex;
				font-size: .2rem;
				align-items: center;
				border-bottom: 1px solid #E2E2E2;
				justify-content: space-between;
				height: .8rem;
				.img{
					width: .7rem;
					height: .7rem;
					background: #E0E0E0;
					border-radius: 50%;
				}
				p{
					display: flex;
					align-items: center;
				}
			}
			.Nickname{
				height: .8rem;
				border-bottom: 1px solid #E2E2E2;
				display: flex;
				font-size: .2rem;
				justify-content: space-around;
				flex-direction:  column;
				.nName{
					border: none;
					background: #EEEEEE;
					line-height: .3rem;
				}
			}
			.birthday{
				height: .8rem;
				border-bottom: 1px solid #E2E2E2;
				display: flex;
				font-size: .2rem;
				color: #E4E4E4;
				justify-content: space-between;
				align-items: center;
				.left{
					display: flex;
					flex-direction:  column;
					
				}
			}
			.sexNav{
				width: 100%;
				background: #9E9E9E;
				overflow: hidden;
				li{
					line-height: .3rem;
					font-size: .2rem;
					border: 1px solid #E1E1E1;
				}
			}
			.btnModify{
				display: block;
				height: .5rem ;
				width: 80%;
				background: #000000;
				color: #fff;
				text-align: center;
				line-height: .5rem;
				font-size: .2rem;
				margin: .3rem auto;
			}
		}
	}
</style>