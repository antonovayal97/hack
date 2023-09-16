<script setup>
defineProps(
    {
        links: Array
    }
)

</script>

<template>
    <nav>
        <ul>
            <li v-for="lin in links"><a :href="lin.href">{{lin.name}}</a></li>
        </ul>
    </nav>
</template>

<style scoped>
ul
{
    display: flex;
    list-style-type: none
}
li
{
    font-size: 16px;
    margin: 0 40px;
}
a
{
    color: #000
}
</style>
