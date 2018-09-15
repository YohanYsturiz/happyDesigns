<template>
  <div id="app">
    <Layout msg="ImgWordl"/>
    <MainPrimary/>
    <Footer/>
  </div>
</template>

<script>
import Layout from './components/Layout.vue'
import MainPrimary from './components/MainPrimary.vue'
import Footer from './components/Footer.vue'
import {EventBus} from'./plugins/EventBus.js'

export default {
  name: 'app',
  components: {
    Layout,
    MainPrimary,
    Footer
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
  }
  .title-one {
          font-family: 'Baloo Tammudu', cursive; 
          font-size: 3rem;
          color: #778a99;
  }
  .title-two {
          font-family: 'Baloo Tammudu', cursive; 
          font-size: 2rem;
          color: #778a99;
  }
  .title-three {
          font-family: 'Baloo Tammudu', cursive; 
          font-size: 1.3rem;
          float: left;
          color: #778a99;
  }
  .text-loader{
        font-family: 'Baloo Tammudu', cursive;
        font-size: 1rem;
        color: #778a99;
        margin: 8px;
    }
  .text-info{
      font-family: 'Baloo Tammudu', cursive;
      font-size: 0.8rem;
      color: #778a99;
      margin: 8px;
  }
  .text-info-money{
      font-family: 'Baloo Tammudu', cursive;
      font-size: 1rem;
      color: #8CB46C;
      margin: 8px;
  }
</style>
