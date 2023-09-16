<script setup>
import { NButton } from 'naive-ui'
defineProps(['name'])

function btnAlert() {
    alert('ALERT')
}
</script>

<template>

    <n-button @click="btnAlert()">{{ name }}</n-button>

</template>

<style scoped>

</style>
