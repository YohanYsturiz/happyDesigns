<template>
  <el-header>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">{{ msg }}</el-menu-item>
      <!-- <el-submenu index="2">
        <template slot="title">Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-submenu>
      </el-submenu> -->
      <el-menu-item index="2" disabled>Info</el-menu-item>
      <el-menu-item index="3" class="pull-right"> Registrate</el-menu-item>
      <el-menu-item index="4" class="pull-right"> Iniciar session</el-menu-item>
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
