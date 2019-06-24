<template>
    <div class="grid">
        <h2 class="top">
            <span class="title">Title</span>
            <span class="brand">brand</span>
            <span class="price">$9,99</span>
        </h2>
        <div class="img-holder" :class="page">
            <div class="img"></div>
            <div class="small">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="info">
            <h3>Product info</h3>
        </div>
    </div>
</template>

<style scoped>
    .grid{
        margin-top: 150px;
    }
    .top{
        padding: 8px;
        background: white;
        grid-column: span 6;
    }
    .title{
        color: var(--dark);
        padding: 7px;
        display: block;
        width: 100%;
        border-bottom: solid 2px var(--dark);
    }
    .price, .brand{
        color: var(--dark);
        width: max-content;
        padding: 7px;
        display: inline-block;
    }
    .img-holder{
        grid-column: span 4;
        padding: 15px;
        background: white;
    }
    .price{
        float: right;
    }
    .img,.small > div{
        box-shadow:-2px -2px 0 inset var(--dark), 2px 2px 0 inset var(--dark);
        background-size: contain !important;
        background-position: center !important;
        background-repeat: no-repeat !important;
        background: var(--light);
    }
    .img{height: 300px}
    .small{
        display: flex;
        justify-content: space-between;
        justify-items: stretch;
        margin-top: 15px;
        min-height: 150px;
    }
    .small > * {
        flex: 1;
        background: var(--light);
        min-width: 10px;
    }
    .small > *:nth-child(2){
        margin: 0 15px;
    }
    .info{
        grid-column: span 2;
        padding: 15px;
        background: white;
    }

    .beer > .img{background: url("~assets/products/heineken.jpg")}
    .beer > .small > div:nth-child(1){background: url("~assets/products/heineken1.jpeg")}
    .beer > .small > div:nth-child(2){background: url("~assets/products/heineken2.jpg")}
    .beer > .small > div:nth-child(3){background: url("~assets/products/heineken3.jpg")}

    .wine > .img{background: url("~assets/products/wine3.jpg")}
    .wine > .small > div:nth-child(1){background: url("~assets/products/wine1.jpg")}
    .wine > .small > div:nth-child(2){background: url("~assets/products/wine2.jpg")}
    .wine > .small > div:nth-child(3){background: url("~assets/products/wine.jpg")}

    .rum > .img{background: url("~assets/products/rum.png")}
    .rum > .small > div:nth-child(1){background: url("~assets/products/rum.webp")}
    .rum > .small > div:nth-child(2){background: url("~assets/products/rum.jpg")}
    .rum > .small > div:nth-child(3){background: url("~assets/products/rum1.jpg")}

    .mix > .img{background: url("~assets/products/mix.png")}
    .mix > .small > div:nth-child(1){background: url("~assets/products/mix1.jpg")}
    .mix > .small > div:nth-child(2){background: url("~assets/products/mix2.jpg")}
    .mix > .small > div:nth-child(3){background: url("~assets/products/mix3.webp")}
</style>

<script>
    export default {
        props: ['page']
    }
</script>