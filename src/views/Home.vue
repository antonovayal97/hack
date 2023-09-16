<script setup>
// import { useCounterStore } from '../stores/counter'
import MainBannerForm from '../components/MainBannerForm.vue'
import ItemCard from '../components/ItemCard.vue'
// defineProps({
//   msg: String,
// })

// const counter = useCounterStore()




</script>

<template>


    <!-- <AlertBtn name="my button asdasdsd"/> -->


<div class="main">
    <div class="main__banner">
        <div class="main__banner-image">
            <img src="../assets/main__banner.png" alt="">
        </div>
        <div class="main__banner-text">
            <div class="main__banner-text-header">
                <h1>Путешествия по Якутии</h1>
            </div>
            <div class="main__banner-text-sub">
                <h2>Красота природы, богатства и традиции</h2>
            </div>
        </div>
        <div class="main__banner-form">
            <MainBannerForm/>
        </div>
    </div>
    <div class="main__cards">
    <ItemCard/>
    </div>
</div>


</template>

<style scoped>
.main
{
margin-top: 24px;
}
.main__banner
{
height: 280px;
overflow: hidden;
border-radius: 40px;
position: relative;
}
.main__banner img
{
widows: 100%;
height: 100%;
object-fit: cover;

}
.main__banner-text
{
    position: absolute;
    top: 60px;
    left: 60px;
    color: #fff;
    text-align: left;
}
.main__banner-text-header 
{
        margin-bottom: 12px;
}
.main__banner-text-header h1
{
    font-size: 40px;
    line-height: normal;
    font-weight: 700;
}
.main__banner-text-sub h2
{
    font-size: 24px;
    font-weight: 700;
}
.main__banner-form
{
    position: absolute;
    bottom: 42px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 842px;
    padding: 5px;
    border-radius: 150px;
    background-color: gray;
}
</style>
