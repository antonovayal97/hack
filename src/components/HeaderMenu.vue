<script setup>
import { PersonCircleOutline, Menu } from "@vicons/ionicons5";
import { NButton, NDropdown, NIcon } from 'naive-ui'
import { h } from "vue";
defineProps(
    {
        options: Array
    }
)
function renderIcon() {
        return h(NIcon, null, {
          default: () => h(Menu)
        });
      }
</script>

<template>
 <n-dropdown :options="options">
    <n-button ghost :render-icon="renderIcon" round color="#000">
        <n-icon size="24" color="#000">
    <person-circle-outline />
  </n-icon>
    </n-button>
  </n-dropdown>
</template>

<style scoped>

</style>
