<template>
	<div class="ViewTitle">
		<div class="ViewTitle__left">
			<a href="/analysis" class="btn-text c_grayblue"><span>편집</span></a>
		</div>
		<h1 class="ViewTitle__center c_grayblue">{{title}}</h1>
		<div class="ViewTitle__right">
			<a @click="close()" class="btn-close"><span class="skip">닫기</span></a>
		</div>			
	</div>	
</template>
<script>
export default {
	props : ["title"],
	methods : {
		close(){
			this.$emit("close");
		}
	}
}
</script>
<style lang="scss">
  .ViewTitle{
	  display:flex;
	  flex-direction: row;
	  height:55px;
	  border-bottom:1px solid #d7d7d7;
	  &__center{
		  flex : 1;
		  display: flex;
		  align-items:center;
		  text-align: center;
		  justify-content: center;
		  font-size:18px;
	  }
	  &__left{
		  flex: 0
	  }
	  &__right{
		  flex : 0
	  }

	  .btn-text{
		  width:60px;
		  height:100%;
		  display: flex;
		  align-items:center;
		  justify-content: center;
	  }

	  .btn-close{
		  display: block;
		  width: 55px;
		  height:100%;
		  overflow:hidden;
		  text-indent:-999px;
		  background-image:url(/images/icon-close.png);
		  background-size:32px auto;
		  background-position: center;
		  background-repeat: no-repeat;
	  }
  }
</style>
