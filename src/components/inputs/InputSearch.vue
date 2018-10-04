<template>
    <el-input placeholder="Ingrese una palabra" @input="changed" v-model="inputSearch" prefix-icon="el-icon-search"  class="input-radius">
    </el-input>
</template>

<script>
import {EventBus} from '@/plugins/EventBus.js'

  export default {
    name: 'InputSearch',
    created () {
      EventBus.$on('searchActive', (obj) => {  
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
        },
        changed: function(event) {
          console.log('holaaaaaaaaaaaaa')
        }
    }
  };
</script>

<style scoped>
  input {
      border-radius: 50px !important;
  }
</style>
