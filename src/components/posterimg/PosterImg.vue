<template>
    <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }" class="card-border-radius">
            <!-- <div class="image bg-img" style="background-image: url({InfoImg.userImageURL});"></div> -->
            <!-- <img style="cursor: pointer" :src=InfoImg.webformatURL alt="" class="image bg-img" @click="likeImg(InfoImg.id_user, InfoImg.id)"> -->
            <el-row :span="24" type=flex :style=imgFull @click="likeImg(InfoImg.id_user, InfoImg.id)">
                <el-col :span="12">
                    <span class="text-card-user">{{InfoImg.user}}</span>
                </el-col>
                <el-col :span="12" style="position: relative;">
                    <el-tag class="tag-dislikes" size="mini" @click="likeImg(InfoImg.id_user, InfoImg.id)">
                        <i class="fas fa-thumbs-down"></i>
                    </el-tag>
                    <el-tag class="tag-likes" size="mini" @click="likeImg(InfoImg.id_user, InfoImg.id)">
                        <i class="far fa-thumbs-up"></i> {{ addLikes() }}
                    </el-tag>
                    <el-tag class="tag-heart" size="mini" @click="likeImg(InfoImg.id_user, InfoImg.id)">
                        <i class="fas fa-heart"></i>
                    </el-tag>
                </el-col>
            </el-row>            
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
        imgFull: function () {
            let urlImg = this.InfoImg.webformatURL
            console.log(`[X] params construct style:`, urlImg);
            return `background-image: url(${urlImg}); background-position: center; background-size: cover; height: 280px !important; cursor:pointer;`
        }
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
            if (this.InfoImg.likes_user >= this.valueMaximum) return this.valueMaximum -1
            return this.InfoImg.likes_user
        },
        validWinner: function () {
            if (this.InfoImg.likes_user < this.valueMaximum) this.infoLikes += 3; 
        }
    }
}
</script>

<style>
  .card-border-radius {
    border-radius: 30px !important;
    margin: 8% !important;
    -webkit-transition:all .9s ease; 
    -moz-transition:all .9s ease; 
    -o-transition:all .9s ease; 
    -ms-transition:all .9s ease; 
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
  .tag-dislikes {
    float: right !important;
    background-color: #7C7B7B !important;
    color: white !important;
    font-weight: bold;
    cursor: pointer;
    top: 80%;
    margin-left: 10%;
    border-radius: 45px;
    position: absolute;
  }

  .tag-likes {
    float: right !important;
    background-color: #1f96d9 !important;
    color: white !important;
    font-weight: bold;
    cursor: pointer;
    top: 70%;
    margin-left: 10%;
    border-radius: 45px;
    position: absolute;
  }
  .tag-heart {
    float: right !important;
    background-color: #FB454F !important;
    color: white !important;
    font-weight: bold;
    cursor: pointer;
    top: 60%;
    margin-left: 10%;
    border-radius: 45px;
    position: absolute;
  }

.card-border-radius:hover {
    -webkit-transform:scale(1.10);
    -moz-transform:scale(1.10);
    -ms-transform:scale(1.10);
    -o-transform:scale(1.10);
    transform:scale(1.10);
}
.text-card-user {
    font-family: 'Baloo Tammudu', cursive;
    font-size: 1rem;
    color: white;
    margin: 18px;
}

</style>

