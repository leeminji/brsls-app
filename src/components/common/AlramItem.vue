<template>
	<div class="Alram__item" v-bind:class="val">
		<div class="info"></div>
		<div class="text"><span>최건강님을 위한 건강한 저염식 도시락이 준비되어 있습니다.</span></div>
	</div>
</template>
<script>
export default {
	props : ["val"]
}
</script>
<style lang="scss">
	.Alram{
		&__item{
			position: relative;
			padding:8px 90px;
			border:1px solid #d7d7d7;
			background:#fff;
			margin-top:8px;
			&.no_line{
				border:0;
				border-bottom:1px dashed #d7d7d7;
				padding:14px 90px;
				margin-top:0;
			}
			&:first-child{
				margin-top:0;
			}
			&:before{
				display:block;
				position:absolute;
				right:8px;
				width:32px;
				line-height:32px;
				content:'다음';
				margin-top:-16px;
				top:50%;
				background-repeat: no-repeat;
				background-position: center;
				background-size:32px auto;
				background-image:url("/images/icon-next.png");
				text-indent: -999px;
				overflow:hidden;
			}
			.info{
				width:64px;
				height:44px;
				position: absolute;
				left:8px;
				top:50%;
				margin-top:-22px;
				background:#d7d7d7
			}
			.text{
				line-height:1.5em;
				font-size:14px;
				display: flex;
				align-items: center; 
				min-height: 44px;
			}
		}
	}
</style>
