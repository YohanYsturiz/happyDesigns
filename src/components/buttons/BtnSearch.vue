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
        background-color: #23E1C7;
        background-color: #23E1C7;
        border-color: #23E1C7;
    }
    .btn-sucess-alegra:hover, .btn-sucess-alegra:active, .btn-sucess-alegra:focus {
        background-color: #23E1C7;
        background-color: #23E1C7;
        border-color: #23E1C7;
    }
</style>

