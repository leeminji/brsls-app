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
    <router-view/>
  </div>
</template>
<script>
export default {
  data(){
    return{
    }
  }
}
</script>

<style lang="scss">

  .App{
    position: absolute;
    top:56px;
    bottom:0;
    left:0;
    right:0;
    z-index:1;
    overflow-y:auto;
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
      padding-top:2px;
      padding-bottom:10px;
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
