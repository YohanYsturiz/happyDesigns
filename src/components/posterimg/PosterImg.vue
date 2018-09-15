<template>
    <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }" class="border-radius">
            <!-- <div class="image bg-img" style="background-image: url({InfoImg.userImageURL});"></div> -->
            <img :src=InfoImg.webformatURL alt="" class="image bg-img">
            <div style="padding: 14px;">
                <span>{{InfoImg.name_user}}</span>
                <div class="bottom clearfix" @click="likeImg(InfoImg.id_user, InfoImg.id)">
                    <el-tag class="tag-likes" size="mini">
                        <i class="far fa-thumbs-up"></i> {{ addLikes() }}/20
                    </el-tag>
                </div>
            </div>
        </el-card>
    </el-col>
</template>
<script>
import {EventBus} from '@/plugins/EventBus.js'

export default {
    name: "PosterImg",
    props: {
        infoPoster: Object
    },
    data() {
        return {
            InfoImg: this.infoPoster,
            infoLikes: 0,
            valueMaximum: 20
        };
    },
    computed: {
        // addLikes: function () {
        //     return this.InfoImg.likes_user + this.infoLikes
        // }
    },
    methods: {
        likeImg(id_user, id_img) {
            console.log('[X] likeImg ');                        
            let likeData = {id_user, id_img}
            this.validWinner()
            EventBus.$emit('likeUser', likeData);
        },
        addLikes: function () {
            console.log('sumo (2) --> ', this.infoLikes)
            if (this.InfoImg.likes_user >= this.valueMaximum) return this.valueMaximum
            return this.InfoImg.likes_user
        },
        validWinner: function () {
            if (this.InfoImg.likes_user < this.valueMaximum) this.infoLikes += 1; 
        }
    }
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

