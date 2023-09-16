<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { NConfigProvider } from 'naive-ui'
import { ruRU } from 'naive-ui'

</script>

<template>
  <n-config-provider :locale="ruRU">
      <Header/>
      <div class="content">
        <router-view/>
      </div>
        <Footer/>
      </n-config-provider>
</template>

<style>
*
{
  margin: 0;
  padding: 0;
}
#app
{
  width: 1340px;
  max-width: unset;
}
.content
{
  min-height: 100vh;
}
</style>
