<script setup>
import { ref } from 'vue';
import HomeNav from './home-nav/homeNav.vue';
import HomeFoot from './home-foot/homeFoot.vue';
import { RouterView } from 'vue-router';


const navlist = ref([
    {
        title: "首页",
        path: "/",
        id: 1
    },
    {
        title: "登录",
        path: "/login",
        id: 2
    },
])


</script>

<template>
    <div id="home">
        <HomeNav :navlist="navlist"></HomeNav>
        <div class="main-view">
            <RouterView></RouterView>
        </div>
        <HomeFoot></HomeFoot>
    </div>
</template>

<style lang="scss" scoped>
#home {
    width: 100%;
    .main-view {
        width: 100%;
        //min-height: calc(100vh - 120px);
    }
}
</style>