<template>
     <el-footer class="footer"> 
        <el-row :gutter="10">
          <el-col class="text-footer"> Made by Yohan Ysturiz </el-col>
        </el-row>
    </el-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 40px !important;
        background-color: #f1f4f7;
        border-radius: 50px;
    }
    .text-footer{
        font-family: 'Baloo Tammudu', cursive;
        font-size: 1rem;
        color: #778a99;
        margin: 8px;
    }
</style>