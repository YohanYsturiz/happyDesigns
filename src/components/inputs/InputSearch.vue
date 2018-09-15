<template>
    <el-input placeholder="Ingrese una palabra" v-model="inputSearch" prefix-icon="el-icon-search" class="input-radius">
    </el-input>
</template>

<script>
import {EventBus} from '@/plugins/EventBus.js'

  export default {
    name: 'InputSearch',
    created () {
      EventBus.$on('searchActive', (obj) => {  
        //EventBus.$emit('btnChildren', obj, this.inputSearch);
        this.emitSearch(obj, this.inputSearch)
      });
    },
    data() {
        return {
          inputSearch: '',
      }
    },
    methods: {
        emitSearch(obj, descriptor) {
            EventBus.$emit('btnChildren', obj, descriptor);
        }
    }
  };
</script>

<style scoped>
  .input-radius {
      border-radius: 50px !important;
  }
</style>
