<template>
    <el-card class="box-card">
        <div class="text item">
            <el-row type="flex" class="row-bg">
                <el-col :span="12">
                    <label class="title-three">Factura<label class="text-info"> # {{infoInvoice.id}}</label></label>
                </el-col>
            </el-row>
            <el-row :span="12" type="flex" class="row-bg" justify="start">
                <el-col :span="12">
                    <p class="text-info"> Producto: {{infoInvoice.items[0].name}}</p>
                </el-col>
                <el-col :span="12">
                    <p class="text-info-money"> $ {{infoInvoice.items[0].price}}</p>
                </el-col>
            </el-row>
            <el-row :span="12" type="flex" class="row-bg" justify="start">
                <el-col :span="12">
                    <p class="text-info" > Vendedor: {{infoInvoice.seller.name}}</p>
                </el-col>
            </el-row>
            <el-row :span="15" type="flex" class="row-bg" justify="start">
                <el-col :span="15">
                    <p class="text-info"> Fecha Vencimiento: {{infoInvoice.dueDate}}</p>
                </el-col>
            </el-row>
            <hr class="hr-style">
            <el-row :span="15" type="flex" class="row-bg" justify="start">
                <el-col :span="15">
                    <el-button type="success" round>Pagar</el-button>
                </el-col>
                <el-col :span="15">
                    <p class="text-info-money"><label class="text-info"> total: </label> $ {{infoInvoice.items[0].price}}</p>
                </el-col>
            </el-row>
            <!-- <p> {{infoInvoice}} </p> -->
        </div>
    </el-card>
</template>
<script>
import {EventBus} from '@/plugins/EventBus.js'

export default {
    name: "ViewInvoice",
    props: {
        infoInvoice: Object
    },
    data() {
        return {
            context: this.infoInvoice,
        };
    },
    computed: {
    },
    methods: {
    }
}
</script>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 450px;
    margin-bottom: 10%;
  }
  .hr-style {
    background-color: #c9d2da;
    /* border: 0px; */
    border-width: 2px;
    border-style: inset;
  }
</style>

