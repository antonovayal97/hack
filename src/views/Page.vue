<script setup>
import { useCounterStore } from '../stores/counter'
//import { useRoute } from "vue-router";
//const route = useRoute();

//console.log(route)
const counter = useCounterStore()




</script>

<template>
  <h1>PAGE {{$route.params.pageId}}</h1>

    

</template>

<style scoped>

</style>

