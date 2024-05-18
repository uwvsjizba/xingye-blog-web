<script setup>


</script>

<template>
    <div id="home">
        <div id="left"></div>
        <div id="right">
            <div id="child1"></div>
            <div id="child2"></div>
            <div id="child3"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#home {
    width: 650px;
    height: 300px;
    display: grid;
    grid-template-columns: 500px 150px;
    grid-template-rows: repeat(3, 100px);
    grid-area: 
        "left" "right"
        "left" "right"
        "left" "right";
    #left {
        grid-area: "left";
        background-color: lightblue;
    }
    #right {
        grid-area: "right";
        background-color: #dadada;
    }
}
</style>