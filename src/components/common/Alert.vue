<template>
	<div class="Alert" v-if="is_show != false" v-bind:class="{'Alert--active' : is_show}">
		<div class="Alert__inner">
			<div class="Alert__img"><img src="/images/icon-feel-bad.png" alt=""></div>
			<div class="Alert__text"><p v-html="text"></p></div>
			<div class="Alert__button">
				<a href="javascript:;"  @click="close()" class="c_skyblue"><span>확인</span></a>
			</div>
		</div>
		<div class="Alert__blind blind" @click="close()"></div>
	</div>
</template>
<script>
export default {
	props : ["is_show"],
	data(){
		return {
			alertInner : null,
			text : "최건강님은 최근 나트륨 섭취가 많아지면서 고혈압 위험률이 점점 증가하고 있습니다.<br>저염식 섭취를 권장드립니다."
		}
	},
	methods : {
		init(){
			this.alertInner = document.querySelector(".Alert__inner");
			if( this.alertInner != null ){
				this.alertInner.style.marginTop = -this.alertInner.offsetHeight/2+"px";
			}
		},
		close(){
			this.$emit("close", false);
		}
	},
	mounted(){
		console.log(this.is_show);
		this.init();
	}
}
</script>
<style lang="scss">
	.Alert{
		&--active{
			display:block;
		}
		display:none;
		position:fixed;
		top:0;
		bottom:0;
		right:0;
		left:0;
		z-index:100;

		&__inner{
			width:280px;
			background:#fff;
			margin:0 auto;
			position: absolute;
			top:50%;
			left:0;
			right:0;
			z-index: 100;
		}
		&__blind{
			opacity: 1;
			z-index: 10;
		}
		&__img{
			text-align: center;
			padding-top:24px;
		}
		&__text{
			padding:22px 30px;
			p{
				font-size:16px;
				line-height: 1.6em;
				color:#000;
				text-align: center;
			}
		}
		&__button{
			border-top:1px solid #74a8cf;
			a{
				display:block;
				line-height:55px;
				text-align: center;
			}
		}
	}
</style>

