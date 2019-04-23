<template>
    <div class="Analysis">
        <div class="inner24 line-bottom dashed pos_r b_lightorange">
            <a href="" class="icon-alram icon-round btn-alram"><span class="skip">알람</span></a>
            <h2 class="Analysis__name">
                <span class="fs22 c_skyblue">최건강님,</span>
            </h2>
            <div class="Analysis__noti pt14">
                <p class="c_black lh15">고혈압과 당뇨 질환의 발병률이 여전히 위험 수준입니다. 지금처럼 저염식을 꾸준히 섭취하시면 정상 수준으로 낮아질 수 있습니다.</p>
            </div>
        </div>
        <div class="inner24 pos_r b_lightorange">
            <a href="" class="icon-alram icon-line icon-round btn-alram"><span class="skip">알람</span></a>
            <h3><strong class="fs14">최건강님의 질환 발병 위험률</strong></h3>
        </div>
        <div class="line-bottom b_lightorange">
            <canvas class="pt24" id="graphCanvas" style="width:100%;"></canvas>
        </div>
        <div class="inner24 pos_r">
            <a href="" class="icon-square"><span class="skip">알람</span></a>
            <h3><strong class="fs14">최건강님의 측정보고서</strong></h3>
        </div>       
    </div>
</template>
<script>
import {pygraph} from '../assets/pygraph.js'

export default {
    data(){
        return {
            diseaseList : [
                {title:"고혈압", percent:"90"},
                {title:"위암", percent:"80"},
                {title:"당뇨", percent:"70"},
                {title:"비만", percent:"60"},
                {title:"고지혈증", percent:"20"},
                {title:"대장암", percent:"10"},
            ]
        }
    },
    methods : {
        load(){
            const canvas = document.getElementById("graphCanvas");
            //pygraph.setData(this.diseaseList);
            //pygraph.setCanvas(canvas);
            //pygraph.draw();            
        }
    },
    created(){
        
    },
    mounted(){
        this.load();
    }
}
</script>
<style lang="scss">
    .Analysis{
        position: relative;
        .btn-alram{
            position:absolute;
            top:15px;
            right:15px;
        }
    }
</style>

