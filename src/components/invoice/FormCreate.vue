<template>
    <el-row :span="12" justify="center">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
            <div v-if="visibilityForm">
                <el-card class="box-card" style="width: 100%;">
                    <span class="title-two">Crear Factura</span>
                    <el-row :span="24" type="flex" justify="center">
                        <el-col :span="12">
                            <el-form-item label="Nombre" prop="name">
                                <el-input v-model="ruleForm.name" placeholder="Nombre y apellido"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :span="24" type="flex" justify="center">
                        <el-col :span="12">
                            <el-form-item label="Identificacion" prop="identificacion">
                                <el-input v-model="ruleForm.identificacion" placeholder="V-00000000"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :span="24" type="flex" justify="center">
                        <el-col :span="12">
                            <el-form-item label="Descripcion" prop="desc">
                                <el-input type="textarea" v-model="ruleForm.desc" placeholder="Indica tu satisfaccion"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-button type="primary" @click="submitForm('ruleForm')">Generar</el-button>
                    <el-button @click="resetForm('ruleForm')">limpiar</el-button>
                </el-card>            
            </div>
            <el-col v-if="visibilityLoader">
                <div class="loader"></div>
                <span class="text-loader"> {{ msgLoader }} </span>
            </el-col>
        </el-form>       
        
        <el-row type="flex" justify="center" v-if="visibilityInvoice">
            <el-col :span="10">
                <BtnBackTop></BtnBackTop>                
            </el-col>
            <el-col :span="24">
                <ViewInvoice :infoInvoice="infoInvoice"></ViewInvoice>              
            </el-col>   
        </el-row>
    </el-row>            
</template>
<script>
import {EventBus} from '@/plugins/EventBus.js'
import ViewInvoice from './ViewInvoice.vue'
import BtnBackTop from '../buttons/BtnBackTop.vue'
import axios from 'axios'
import viewInvoiceVue from './ViewInvoice.vue';
var that = this;

export default {
    name: "InvoiceCreate",
    props: {
        dataForm: Object,
    },
    components: {
        ViewInvoice,
        BtnBackTop
    },
    created() {
        EventBus.$on('closeInvoice', (obj) => {
            this.visibilityInvoice = false;
        });
    },
    data() {
        return {
            context: this.dataForm,
            infoContact: {},
            visibilityLoader: false,
            msgLoader: 'Creando factura ...',
            visibilityForm: true,
            visibilityInvoice: false,
            infoInvoice: {},
            ruleForm: {
                name: '',
                identificacion: '',
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: 'Por favor ingresa tu nombre completo', trigger: 'blur' },
                    { min: 3, max: 50, message: 'Maximo 50 caracteres', trigger: 'blur' }
                ],
                identificacion: [
                    { required: true, message: 'Por favor ingresa tu identifacion', trigger: 'blur' },
                    { min: 3, max: 9, message: 'El maximo es de 9 digitos', trigger: 'blur' }
                ],
                desc: [
                    { required: false, message: 'Ingresa una descripcion', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url = 'https://app.alegra.com/api/v1/contacts';
            var data = {"name": this.ruleForm.name};
            this.visibilityForm = false
            this.visibilityLoader = true

            fetch(url, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers:{
                    'Content-Type': 'application/json',
                    "Authorization": 'Basic ' + btoa('yohanysturiz@gmail.com:02845eb232d5eaff989b')
                }
            })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => (this.CreateInvoice(response)));
          
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      CreateInvoice (data) {
            var url = 'https://app.alegra.com/api/v1/invoices';
            var data = {
                "date": "2015-11-15",
                "dueDate": "2015-12-15",
                "client": data.id,
                "seller": {
                    "id": this.context.id_user
                },
                "items" : [
                    {
                    "id": 1,
                    "description": "Imagen!",
                    "price": this.context.likes,
                    "discount" : 10,
                    "quantity" : 1
                    }
                ]
                
            }
            fetch(url, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers:{
                    'Content-Type': 'application/json',
                    "Authorization": 'Basic ' + btoa('yohanysturiz@gmail.com:02845eb232d5eaff989b')
                }
            })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response =>  (this.SuccesInvoice(response)))
      },
      SuccesInvoice(data){
          console.log('A contruir el PDF');
            this.infoInvoice = data;
            this.visibilityLoader = false;
            this.visibilityInvoice = true;
      },
      finishInvoice() {
          this.visibilityInvoice = false;
      }
    }
}
</script>

<style>
  .demo-input-label {
    display: inline-block;
    width: 130px;
  }
</style>

