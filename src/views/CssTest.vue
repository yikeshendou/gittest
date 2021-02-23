<template>
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">-1</div>
    </div>
</template>

<script>
    export default {
        name: "CssTest"
    }
</script>

<style scoped>
    .container{
        display: flex;
        border: 1px solid greenyellow;
        flex-direction:row;
        justify-content: space-evenly;
        align-content: baseline;
    }
    .item{
        width: 50px;
        height: 50px;
        border: 1px solid red;
        flex-grow:1;
    }
    .item:first-child {
        order:5;

    }
    .item:nth-child(2) {
        order:4;
    }
    .item:nth-child(3) {
        order:2;
        flex-grow:2;

    }
    .item:nth-child(4) {
        order:1;
        flex-grow:3;
    }
    .item:last-child {
        order:-1;
        flex-grow:2;
    }
</style>