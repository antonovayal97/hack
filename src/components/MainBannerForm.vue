<script setup>
import { NSpace, NInput, NIcon,NDatePicker, NButton } from 'naive-ui'
import { FlashOutline, PersonOutline } from '@vicons/ionicons5'


</script>

<template>
    <div class="form">
        <n-space horizontal>
    <n-input placeholder="Поиск" round >
      <template #suffix>
        <n-icon :component="FlashOutline" />
      </template>
    </n-input>
    <n-date-picker format="dd.MM.yyyy" start-placeholder="Дата заезда" end-placeholder="Дата отъезда" daterange type="daterange" round />
    <n-input placeholder="Кол-во человек" round >
      <template #suffix>
        <n-icon :component="PersonOutline" />
      </template>
    </n-input>
    <n-button type="primary" round>
      Найти
    </n-button>

  </n-space>
    </div>
</template>

<style>
.form
{
    text-align: left;
}
.n-input
{
    border-radius: 50px;
}
.n-space
{
    flex-flow: nowrap !important
}
.n-input.n-input--pair .n-input__separator .n-base-icon
{
    color: #2F97C1
}
</style>
