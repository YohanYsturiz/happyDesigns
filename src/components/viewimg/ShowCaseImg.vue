<template>
    <el-container>
        <el-row :gutter="5">
            <btn-back-top/>
            <el-row :gutter="10" type="flex" justify="center">
                <el-col :span="24" :xs="12">
                    <span class="title-two">Imagenes por la palabra ...</span>
                </el-col>
            </el-row>
            <el-row :gutter="10" type="flex" justify="center">
                <el-col :span="6" :xs="12">
                    <input-search/>
                </el-col>
                <el-col :span="2" :xs="12">
                    <btn-search/>
                </el-col>
            </el-row>
            <el-col :span="6" v-for="(o) in 10" :key="o">
                <el-card :body-style="{ padding: '0px' }" class="border-radius">
                <div class="image bg-img"></div>
                <div style="padding: 14px;">
                    <span>Yummy hamburger</span>
                    <div class="bottom clearfix">
                    <time class="time"> 2018/09/11 </time>
                    <el-button style="float: right;" size="mini" type="warning" icon="el-icon-circle-check-outline" circle></el-button>
                    </div>
                </div>
                </el-card>
            </el-col>
        </el-row>
    </el-container>
</template>

<style>
  .border-radius {
    border-radius: 30px !important;
    margin: 8% !important;
  }  
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .bg-img {
    background-image: url("https://s5.eestatic.com/2017/09/22/social/Apocalipsis-Fin_del_mundo-La_Jungla_248739111_47695645_864x486.jpg");
    background-color: #cccccc; /* Used if the image is unavailable */
    height: 25vh; /* You must set a specified height */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire */
  }
</style>

<script>
import InputSearch from '../inputs/InputSearch.vue'
import BtnSearch from '../buttons/BtnSearch.vue'
import BtnBackTop from '../buttons/BtnBackTop.vue'
import {EventBus} from '@/plugins/EventBus.js'

export default {
    name: "ShowCaseImg",
    props: {
        dataImgs: Object
    },
    components: {
        InputSearch,
        BtnSearch,
        BtnBackTop
    },
    data() {
        return {
            currentDate: new Date()
        };
    }
}
</script>