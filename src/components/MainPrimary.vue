<template>
  <el-main>
    <el-row v-if="visibility" :gutter="20" type="flex" class="row-bg" justify="space-around">
        <el-col :span="20" class="grid-content">
            <el-card :justify="center" shadow="always" class="bg-purple">
                <div>
                    <span class="title-one">Busca una imagen</span>
                </div>
                <el-row :gutter="10" type="flex" justify="center">
                    <el-col :span="6" :xs="12">
                        <input-search/>
                    </el-col>
                    <el-col :span="2" :xs="12">
                        <btn-search/>
                    </el-col>
                </el-row>
            </el-card>
        </el-col>
    </el-row>
    <el-row v-if="visibilityLoader">
        <div class="loader"></div>
        <span class="text-loader"> Buscando imagenes... </span>
    </el-row>
    <el-row v-if="visibilityList" :gutter="20" type="flex" class="row-bg" justify="space-around">
        <el-col :span="20">
            <show-case-img :dataImg="infoResponse"/>
        </el-col>
    </el-row>
  </el-main>
</template>

<script>
import InputSearch from './inputs/InputSearch.vue'
import ShowCaseImg from './viewimg/ShowCaseImg.vue'
import BtnSearch from './buttons/BtnSearch.vue'
import {EventBus} from '@/plugins/EventBus.js'
import axios from 'axios'

var that = this;

export default {
    name: 'MainPrimary',
    created () {
        EventBus.$on('btnChildren:change', (obj, descriptor) => {
            // alter visibility of components
            if (obj.back){
                this.visibility = obj.visibility;
                this.visibilityList = obj.visibilityList;
                this.visibilityLoader = obj.visibilityLoader;    
            }else {
                this.visibility = obj.visibility;
                this.visibilityLoader = obj.visibilityLoader;
            }
            this.SearchSellers(obj, descriptor);
        });

        EventBus.$on('likeUser', (obj) => {
            this.LikeUser(obj);
        });
    },
    components: {
        InputSearch,
        ShowCaseImg,
        BtnSearch
    },
    data() {
        return {
            visibility: true,
            visibilityList: false,
            visibilityLoader: false,
            infoResponse: '',
            infoSellers: '',
        };
    },
    methods: {
        SearchSellers(obj, descriptor) {
            var config = { headers: {Authorization: 'Basic ' + btoa('yohanysturiz@gmail.com:02845eb232d5eaff989b')}}
            axios.get(`https://app.alegra.com/api/v1/sellers/`, config)
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.infoSellers = response.data
                    
                    // call function search imgs!
                    this.searchImgs(obj, descriptor);
                })
                .catch(e => {
                    console.error('error becerro', e)
                //this.errors.push(e)
            })
        },

        searchImgs(obj, searchImgs) {
            let word = searchImgs; 
            axios.get(`https://pixabay.com/api/?key=10090219-2d4776f756fac1a33b6ccc47a&q=${word}&image_type=photo`)
                .then( (response) => {
                    // JSON responses are automatically parsed.
                    response.data.word = word;
                    response.data.sellers = this.infoSellers;

                    this.infoResponse = response.data;
                    // associate user and images function
                    this.associateSellersImgs(obj)
                })
                .catch(e => {
                    console.error('error becerro', e)
                // this.errors.push(e)
            })
        },

        associateSellersImgs(obj) {
            let dataViewComponents = obj;
            let sellersData = this.infoSellers;
            let imgsData = this.infoResponse.hits;
            let infoRelations = new Array;
        
            for (let i=0; i < sellersData.length; i++){                
                imgsData[i].name_user = sellersData[i].name;
                imgsData[i].id_user = sellersData[i].id;
                imgsData[i].status_user = sellersData[i].status;
                imgsData[i].likes_user = 0;

                infoRelations.push(imgsData[i]);
            }

            this.infoResponse.hits = infoRelations;
            
            if (dataViewComponents.visibilityList)  this.visibilityLoader = false;
            if (dataViewComponents.back === false) this.visibilityList = dataViewComponents.visibilityList;
        },

        LikeUser(obj) {
            console.log('[X] likeUser', obj);            
            this.infoResponse['hits'].forEach(element => {
                if (element.id_user === obj.id_user){
                    this.$set(element, 'likes_user', element.likes_user+1); 
                }
            });
            console.log('Funciono? -->', this.infoResponse.hits)
        }

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .pt-10{
        margin-top: 10px;
    }
    .center-div {
        transform: translateY(25vh)
    }
    .bg-purple {
        background: #f1f4f7;
    }
    .text-loader{
        font-family: 'Baloo Tammudu', cursive;
        font-size: 1rem;
        color: #778a99;
        margin: 8px;
    }
</style>