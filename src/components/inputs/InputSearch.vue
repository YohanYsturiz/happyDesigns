<template>
  <el-form ref="form" label-width="120px" size="large">
    <el-input placeholder="Ingrese una palabra" v-model="input3" prefix-icon="el-icon-search" class="input-radius">
    </el-input>
  </el-form>
</template>

<script>
  export default {
    name: 'InputSearch',
    data() {
        return {
          input3: ''
      }
    }
  };
</script>

<style scoped>
  .input-radius {
      border-radius: 50px !important;
  }
</style>
