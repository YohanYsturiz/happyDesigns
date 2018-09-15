<template>
    <el-container>
        <el-row :gutter="5">
            <btn-back-top/>
            <el-row :gutter="10" type="flex" justify="center">
                <el-col :span="24" :xs="12">
                    <span class="title-two">Imagenes por la palabra "{{dataImg.word}}"...</span>
                </el-col>
            </el-row>
            <el-row :gutter="10" type="flex" justify="center">
                <!-- <el-col :span="6" :xs="12">
                    <input-search/>
                </el-col>
                <el-col :span="2" :xs="12">
                    <btn-search/>
                </el-col> -->
            </el-row>
            <PosterImg :infoPoster="item" v-for="item in infoData" :key="item.id"/>
        </el-row>
    </el-container>
</template>
<script>
import InputSearch from '../inputs/InputSearch.vue'
import BtnSearch from '../buttons/BtnSearch.vue'
import BtnBackTop from '../buttons/BtnBackTop.vue'
import PosterImg from '../posterimg/PosterImg.vue'
import {EventBus} from '@/plugins/EventBus.js'

export default {
    name: "ShowCaseImg",
    props: {
        dataImg: Object
    },
    components: {
        InputSearch,
        BtnSearch,
        BtnBackTop,
        PosterImg
    },
    data() {
        return {
            currentDate: new Date(),
            infoData: this.dataImg['hits']
        };
    },
    watch: {
        infoData: {
            handler(newValue, oldValue){
                // something
                console.log('escuchas ????');
            },
            deep: true
        }
    },
}
</script>

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
    background-color: #cccccc; /* Used if the image is unavailable */
    height: 25vh; /* You must set a specified height */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire */
  }
  .tag-likes {
    float: right !important;
    background-color: #1f96d9 !important;
    color: white !important;
    font-weight: bold;
    cursor: pointer;
  }
</style>
