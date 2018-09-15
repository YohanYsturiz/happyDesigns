<template>
    <el-button type="success" class="btn-sucess-alegra" round @click.stop="emitSearch()"> Buscar </el-button>                    
</template>
<script>

import {EventBus} from '@/plugins/EventBus.js'

export default {
    name: 'BtnSearch',
    methods: {
        emitSearch() {
            EventBus.$emit('searchActive', {visibility: false, visibilityList: true, visibilityLoader: true, back: false});
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

