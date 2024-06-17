<script setup>
import { ref } from 'vue';

const rightList = ref([
    {
        id: 1,
        icon: require("@/assets/icon/github.png"),
        title: " github: ",
        content: "https://github.com/uwvsjizba"
    },{
        id: 2,
        icon: require("@/assets/icon/email.png"),
        title: "邮箱：",
        content: "jlg112578@163.com"
    }
])

</script>


<template>

<div class="home-foot">
    <div class="copy-right">
        <div class="foot-title">Copyright@星野博客 版权所有</div>
        <div class="foot-content"></div>
    </div>
    <div class="right-info">
        <div class="info-item" v-for="(item) in rightList" :key="item.id">
            <div class="item-icon">
                <img class="icon-style" :src="item.icon">
            </div>
            <div class="item-title">
                {{ item.title }}
            </div>
            <div class="item-content">
                {{ item.content }}
            </div>
        </div>
    </div>
</div>

</template>


<style lang="scss">
.home-foot {
    padding: 16px 32px;
    //height: 100PX;
    background-color: #fdfdfd;

    .copy-right {
        height: 40PX;
        display: flex;
        align-items: center;
        justify-content: center;

        .foot-title {
            color: #5d5d5d;

            font-size: 16PX;
        }
        .foot-content {
        }
    }
    .right-info {
        display: flex;
        gap: 16px;
        justify-content: center;
        flex-wrap: wrap;

        .info-item {
            padding: 16px 0;
            display: flex;
            align-items: center;
            //padding: 0 16px;
           


            .item-icon {
                width: 32PX;
                height: 32PX;
                .icon-style {
                    width: 32PX;
                    height: 32PX;
                }
            }
            .item-title {
                color: #5d5d5d;
                font-size: 16PX;
            }
            .item-content {
                color: #5d5d5d;

                font-size: 16PX;
            }
        }
    }
}
</style>