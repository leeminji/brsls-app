<template>
	<div class="AsideView">
		<ViewTitle @close="close()" title="알람"></ViewTitle>
		<AlramItem val="no_line" />
	</div>
</template>

<script>
import ViewTitle from '@/components/common/ViewTitle'
import AlramItem from '@/components/common/AlramItem'
export default {
	components : {
		ViewTitle,
		AlramItem
	},
	data(){
		return {
			app : null
		}
	},
	mounted(){
		this.app = document.getElementById("app");
		if( this.app != null ){
			this.app.classList.add("App--active");
		}
	},
	methods : {
		close(){
			this.app.classList.remove("App--active");
			this.$router.push({path:"/analysis"});
		}
	}
}
</script>
<style lang="scss">
  .AsideView{
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    background:#fff;
	z-index: 200;
	overflow-y:auto;
  }

</style>
