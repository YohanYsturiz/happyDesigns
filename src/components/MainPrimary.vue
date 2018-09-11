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
                <el-row>
                </el-row>
            </el-card>
        </el-col>
    </el-row>
    <el-row v-if="visibilityList" :gutter="20" type="flex" class="row-bg" justify="space-around">
        <el-col :span="20">
            <show-case-img />
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

export default {
    name: 'MainPrimary',
    created () {
        EventBus.$on('btnChildren:change', (obj) => {
            console.log('si funciona soy tu padre');
            this.searchImgs(obj);
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
            infoResponse: '',
        };
    },
    methods: {
        searchImgs(obj) {
            let dataViewComponents = obj;
            axios.get(`https://pixabay.com/api/?key=10090219-2d4776f756fac1a33b6ccc47a&q=orange&image_type=photo`)
                .then(response => {
                // JSON responses are automatically parsed.
                console.log('llegaron? ---->', response.data)
                this.infoResponse = response.data;
                this.visibility = dataViewComponents.visibility;
                this.visibilityList = dataViewComponents.visibilityList;
                //this.posts = response.data
                })
                .catch(e => {
                this.errors.push(e)
            })
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
</style>