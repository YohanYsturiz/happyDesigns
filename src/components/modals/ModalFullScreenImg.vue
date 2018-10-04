<template>
    <el-dialog style="background: none !important;" :visible.sync="visibility" center fullscreen="true">
        <el-row>
            <el-col :style=infoModal.imgFullScreen :span="24">
                <!-- {{ InfoImg }} -->
                <el-row :span="24" type=flex :style=imgFull>
                    <el-col :span="12">
                        <span class="text-card-user">{{infoModal.userName}}</span>
                    </el-col>
                    <el-col :span="12" style="position: relative;">
                        <el-button type="primary" class="tag-download-m" circle>
                            <i class="fas fa-download"></i>
                        </el-button>
                        <el-button type="primary" class="tag-dislikes-m" circle>
                            <i class="fas fa-thumbs-down"></i>
                        </el-button>
                        <el-button type="primary" class="tag-likes-m" circle>
                            <i class="far fa-thumbs-up"></i>
                        </el-button>
                        <el-button type="primary" class="tag-heart-m" circle>
                            <i class="fas fa-heart"></i>
                        </el-button>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </el-dialog>
</template>
<script>
import {EventBus} from '@/plugins/EventBus.js'

export default {
    name: "ModalFullScreenImg",
    props: {
        infoModal: Object,
        visibility: Boolean
    },
    data() {
        return {
        };
    },
    computed: {
    },
    methods: {
    }
}
</script>

<style scope>
/* ---- alter class to default element.js */
.is-fullscreen {
    background: none !important;
}
.text-card-user {
    font-family: 'Baloo Tammudu', cursive;
    font-size: 1rem;
    color: white;
    margin: 18px;
}
.tag-dislikes-m {
    background-color: #7C7B7B !important;
    color: white !important;
    font-weight: bold;
    cursor: pointer;
    top: 1vh;
    margin-left: 90% !important;
    border-radius: 50px !important;
    position: absolute;
    font-size: 15px !important;
    border-color: #7C7B7B !important;
    box-shadow: 3px 3px 8px #999;
    -webkit-animation: bounce 5s;
    animation: bounce 5s;
  }

  .tag-download-m {
    background-color: #7C7B7B !important;
    color: white !important;
    font-weight: bold;
    cursor: pointer;
    top: 75vh;
    margin-left: 90% !important;
    border-radius: 50px !important;
    position: absolute;
    font-size: 15px !important;
    border-color: #7C7B7B !important;
    box-shadow: 3px 3px 8px #999;
    -webkit-animation: bounce 5s;
    animation: bounce 5s;
  }

  .tag-likes-m {
    float: right !important;
    background-color: #1f96d9 !important;
    color: white !important;
    font-weight: bold;
    cursor: pointer;
    top: 1vh;
    margin-left: 80% !important;
    border-radius: 50px !important;
    position: absolute;
    font-size: 15px !important;
    border-color: #1f96d9 !important;
    box-shadow: 3px 3px 8px #999;
    -webkit-animation: bounce 5s;
    animation: bounce 5s; 
  }
  
  .tag-heart-m {
    float: right !important;
    background-color: #FB454F !important;
    color: white !important;
    font-weight: bold;
    cursor: pointer;
    top: 1vh;
    margin-left: 70% !important;
    border-radius: 50px !important;
    position: absolute;
    font-size: 15px !important;
    border-color: #FB454F !important;
    box-shadow: 3px 3px 8px #999;
    -webkit-animation: bounce 5s;
    animation: bounce 5s;
  }

  /* Animations buttons modal */
  @-webkit-keyframes bounce {
  0% {
    top: 100px;
    animation-timing-function: ease-out;
  }
  25% {
    top: 25px;
    animation-timing-function: ease-in;
  }
  50% {
    top: 50px;
    animation-timing-function: ease-out;
  }
  75% {
    top: 37px;
    animation-timing-function: ease-in;
  }
  100% {
    top: 50px;
  }
}

@keyframes bounce {
  0% {
    top: 100px;
    animation-timing-function: ease-out;
  }
  25% {
    top: 25px;
    animation-timing-function: ease-in;
  }
  50% {
    top: 50px;
    animation-timing-function: ease-out;
  }
  75% {
    top: 37px;
    animation-timing-function: ease-in;
  }
  100% {
    top: 50px;
  }
}
</style>

