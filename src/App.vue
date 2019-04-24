<template>
  <div id="app" class="App">
    <div id="nav" class="Navigaion">
      <ul class="Navigaion__list">
      <router-link to="/analysis" tag="li"><a class="icon-analysis"><span>분석</span></a></router-link>
      <router-link to="/role" tag="li"><a class="icon-role"><span>롤모델</span></a></router-link>
      <router-link to="/map" tag="li"><a class="icon-map"><span>안심지도</span></a></router-link>
      <router-link to="/setting" tag="li"><a class="icon-setting"><span>설정</span></a></router-link>
      </ul>
    </div>
    <div class="content" id="content">
      <router-view />
    </div>
    <Alert :is_show=is_alert_show  @close="close();"></Alert>
    
  </div>
</template>
<script>
import Alert from '@/components/common/Alert'
export default {
  data(){
    return{
      is_alert_show : true
    }
  },
  components: {
    Alert
  },
  methods : {
    close(){
      this.is_alert_show = false;
    }
  }
}
</script>

<style lang="scss">

  .content{
    padding-top:56px;
  }
  .App{
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:1;
    overflow-x:hidden;
    overflow-y:auto;
    &--active{
      overflow:hidden;
    }
  }
  .Navigaion{
    position: fixed;
    left:0;
    right:0;
    top:0;
    z-index: 100;
    background: #3e5a7f;
    &__list{
      li{
        display: block;
        float:left;
        width:25%;
        text-align: center;
      }
      .router-link-active{
        background:#74a8cf
      }
    }
    a{
      display: block;
      color:#fff;
      padding-top:4px;
      padding-bottom:8px;
      span{
        display: block;
        text-align: center;
        font-size:12px;
      }
    }
    &:after{
      content:'';
      display:block;
      clear: both;
    }
  }
</style>
