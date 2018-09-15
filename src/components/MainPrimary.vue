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
    <el-row v-if="visibilityFormInvoice" :gutter="20" type="flex" class="row-bg" justify="space-around">
        <el-col :span="20">
            <form-create-invoice :dataForm="userWinner"/>
        </el-col>
    </el-row>
    
    <!-- Modal donde se carga la informacion del ganador -->
    <el-dialog :visible.sync="visibilityModal" center>
        <el-row type="flex" justify="center" class="row-bg">
            <el-col :span="10">
                <label class="title-three"> Tenemos un ganador!</label>
            </el-col>
        </el-row>
        <el-row type="flex">
            <el-col :span="24">
                <span class="text-info">Gracias por dar likes a la imagenes de nuestros vendedores!, la competencia a finalizado</span>
            </el-col>
        </el-row>
        <el-row justify="center" type="flex">
            <el-col :span="12">
                <el-card shadow="hover">
                    <el-row type='flex' justify="center">
                        <el-col :span="12"> 
                            <label class="text-info">Vendedor Ganador</label> 
                        </el-col>
                    </el-row>
                    <el-col :span="24"> 
                        <label class="text-info">Nombre: {{this.userWinner.name_user}}</label>
                    </el-col>
                    <el-col :span="24"> 
                        <label class="text-info">Likes: {{this.userWinner.likes}}</label> 
                    </el-col>
                </el-card>
            </el-col>
        </el-row>
        <div slot="footer" class="dialog-footer">
            <!-- <el-button type="default" @click="visibilityModal = false">Cerrar</el-button> -->
            <el-button type="primary" @click.stop="CreateInvoice();" >Crear factura</el-button>
        </div>
    </el-dialog>
  </el-main>
</template>

<script>
import InputSearch from './inputs/InputSearch.vue'
import ShowCaseImg from './viewimg/ShowCaseImg.vue'
import BtnSearch from './buttons/BtnSearch.vue'
// import ModalWinner from './modals/ModalWinner.vue'
import FormCreateInvoice from './invoice/FormCreate.vue'
import {EventBus} from '@/plugins/EventBus.js'
import axios from 'axios'

var that = this;

export default {
    name: 'MainPrimary',
    created () {
        EventBus.$on('btnChildren', (obj, descriptor) => {
            // alter visibility of components
            console.log('objeto recibido -->', obj)
            console.log('descriptor --->', descriptor)
            if (obj.back){
                this.infoResponse = {};   
                console.log('volverrrrrrrr!!!', this.infoResponse)
                this.visibility = obj.visibility;
                this.visibilityList = obj.visibilityList;
                this.visibilityLoader = obj.visibilityLoader; 
            }else {
                this.visibility = obj.visibility;
                this.visibilityLoader = obj.visibilityLoader;
            this.SearchSellers(obj, descriptor);
            }

        });

        EventBus.$on('likeUser', (obj) => {
            this.LikeUser(obj);
        });
    },
    components: {
        InputSearch,
        ShowCaseImg,
        BtnSearch,
        FormCreateInvoice
    },
    data() {
        return {
            visibility: true,
            visibilityList: false,
            visibilityLoader: false,
            visibilityFormInvoice: false,
            visibilityModal: false,
            infoResponse: '',
            infoSellers: '',
            valueMaximun: 20,
            userWinner: {}
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
                    console.error('error', e)
                //this.errors.push(e)
            })
        },

        searchImgs(obj, searchImgs) {
            let word = searchImgs;
            console.log('filtra por ---->', word) 
            axios.get(`https://pixabay.com/api/?key=10090219-2d4776f756fac1a33b6ccc47a&q=${word}&image_type=photo`)
                .then( (response) => {
                    // JSON responses are automatically parsed.
                    console.log('imagenes', response.data)
                    response.data.word = word;
                    response.data.sellers = this.infoSellers;

                    this.infoResponse = response.data;
                    // associate user and images function
                    this.associateSellersImgs(obj)
                })
                .catch(e => {
                    console.error('error', e)
                // this.errors.push(e)
            })
        },

        associateSellersImgs(obj) {
            let dataViewComponents = obj;
            let sellersData = this.infoSellers;
            let imgsData = this.infoResponse.hits;
            let infoRelations = [];
        
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
            let completed;
            completed = this.validateWinner()
            this.infoResponse['hits'].forEach(element => {
                if (element.id_user === obj.id_user && completed === false){
                    this.$set(element, 'likes_user', element.likes_user+1); 
                }
            });

        },

        validateWinner() {
            let completed = false
            let quantityInvoice = 0;
            this.infoResponse['hits'].forEach(element => {
                if (element.likes_user >= this.valueMaximun){
                    quantityInvoice = this.quantityInvoice()
                    this.userWinner = {'name_user': element.name_user, 'likes': quantityInvoice, 'id_user': element.id_user}
                    this.visibilityModal = true;
                    return completed = true;
                }
            });
            return completed;
        },
        quantityInvoice() {
            let quantity = 0;
            this.infoResponse['hits'].forEach(element => {
                    quantity +=  element.likes_user;
            });
            return quantity;
        },
        CreateInvoice() {
            this.visibility = false;
            this.visibilityList = false;
            this.visibilityModal = false;
            this.visibilityFormInvoice = true;
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