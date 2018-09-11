<template>
    <el-button type="success" class="btn-sucess-alegra" style="float: left;" icon="el-icon-caret-left" round @click="BackTop()"> Volver </el-button>
</template>
<script>

import {EventBus} from '@/plugins/EventBus.js'

export default {
    name: 'BtnBackTop',
    methods: {
        emitSearch() {
            EventBus.$emit('btnChildren:change', {visibility: false, visibilityList: true});
        },
        BackTop() {
            EventBus.$emit('btnChildren:change', {visibility: true, visibilityList: false});
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

