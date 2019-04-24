<template>
	<div class="Report">
		<div class="Report__item">
			<div class="info"></div>
			<div class="text">
				<div class="unit">78 kg / 20 <span class="small">(20-25)</span></div>
				<div class="detail">몸무게 / BMI _ 2018.00.00</div>
			</div>
		</div>
		<div class="Report__item">
			<div class="info"></div>
			<div class="text">
				<div class="unit">78 kg / 20 <span class="small">(20-25)</span></div>
				<div class="detail">몸무게 / BMI _ 2018.00.00</div>
			</div>
		</div>
		<div class="Report__item">
			<div class="info"></div>
			<div class="text">
				<div class="unit">78 kg / 20 <span class="small">(20-25)</span></div>
				<div class="detail">몸무게 / BMI _ 2018.00.00</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	
}
</script>
<style lang="scss">
	.Report{
		padding-top:20px;
		&__item{
			position: relative;
			padding:8px 0 8px 60px;
			.info{
				width:40px;
				height:40px;
				position: absolute;
				left:0px;
				top:50%;
				margin-top:-20px;
				border-radius: 40px;
				overflow:hidden;
				background:#707070
			}
			.text{
				line-height:1.4em;
				font-size:16px;
				display: flex;
				flex-direction: column;
				align-items: left; 
				.unit{
					font-size:16px;
					color:#000;
					.small{
						font-size:13px;
					}
				}
				.detail{
					font-size:13px;
					color:#999999;
				}
			}
		}
	}
</style>
