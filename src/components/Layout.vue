<template>
  <el-header>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1" class="text-info"><i class="fas fa-globe-americas"></i> {{ msg }}</el-menu-item>
      <el-menu-item index="2" class="text-info">¿Eres empresa?</el-menu-item>
      <el-menu-item index="3" class="pull-right text-info"> Iniciar session</el-menu-item>
      <el-menu-item index="4" class="pull-right text-info"> Registrate </el-menu-item>
    </el-menu>
    <div class="line"></div>
  </el-header>
</template>

<script>
export default {
  name: 'Layout',
  props: {
    msg: String
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pull-right {
    float: right !important;
  }
</style>
