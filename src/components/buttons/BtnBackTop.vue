<template>
    <el-button type="success" class="btn-sucess-alegra" style="float: left;" icon="el-icon-caret-left" round @click="BackTop()"> Volver </el-button>
</template>
<script>

import {EventBus} from '@/plugins/EventBus.js'

export default {
    name: 'BtnBackTop',
    methods: {
        BackTop() {
            EventBus.$emit('searchActive', {visibility: true, visibilityList: false, visibilityLoader: false, back: true});
            EventBus.$emit('closeInvoice');
        }
    }
}
</script>
<style scoped>
    .btn-sucess-alegra {
        background-color: #008080;
        background-color: #008080;
        border-color: #008080;
    }
    .btn-sucess-alegra:hover, .btn-sucess-alegra:active, .btn-sucess-alegra:focus {
        background-color: #05a0a0;
        background-color: #05a0a0;
        border-color: #05a0a0;
    }
</style>

