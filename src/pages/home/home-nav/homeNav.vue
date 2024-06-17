<script setup>
import { useRouter } from 'vue-router';
import { defineProps } from "vue"
import { throttle } from '@/utils/optimize'; 

const router = useRouter();

defineProps({
    navlist: {
        type: Array
    }
});

const toView = throttle(function(path){
    router.push({
        path: path
    })
});

</script>


<template>

<div class="home-nav">
    <div class="home-logo">
        <img class="logo-icon" src="@/assets/favicon.png" >
    </div>
    <div class="home-title">
        <span>星野博客</span>
    </div>
    <ul class="link-container">
        <li v-for="(item) in navlist" 
        :key="item.id" 
        class="nav-link"
        @click="toView(item.path)"
        >
            {{item.title}}
        </li>
    </ul>
</div>

</template>


<style lang="scss" scoped>

.home-nav {
    width: 100%;
    height: 55PX;
    padding: 10PX 40PX;
    box-sizing: border-box;
    background-color: #fdfdfd;
    display: flex;
    align-items: center;
    // box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

    .home-logo{ 
        width: 35PX;
        height: 35PX;

        .logo-icon {
            width: 35PX;
            height: 35PX;
        }
    }
    
    .home-title{
        padding: 0 16px ;
        font-size: 16PX;
    }

    .link-container {
       
        margin: 0;
        list-style: none;
        display: flex;
    }

    .nav-link {
        margin: 0 16px;
        padding: 0 16px;
        font-size: 16PX;
        cursor: pointer;
    }
}

</style>