<template>
    <section>
        <div class="bg-overlay"></div>
        <div class="grid" id="booze">
            <div class="boozeBtn rum">
                <nuxt-link tag="div" :to="{ path: '/booze', query: { filter: 'rum' }}">
                    <h1 class="fontify boozeTitle">Rum</h1>
                    <div class="bottle"></div>
                </nuxt-link>
            </div>
            <div class="boozeBtn wine">
                <nuxt-link tag="div" :to="{ path: '/booze', query: { filter: 'wine' }}">
                    <h1 class="fontify boozeTitle">Wine</h1>
                    <div class="bottle"></div>
                </nuxt-link>
            </div>
            <div class="boozeBtn beer">
                <nuxt-link tag="div" :to="{ path: '/booze', query: { filter: 'beer' }}">
                    <h1 class="fontify boozeTitle">Beer</h1>
                    <div class="bottle"></div>
                </nuxt-link>
            </div>
            <div class="boozeBtn cocktail">
                <nuxt-link tag="div" :to="{ path: '/booze', query: { filter: 'mix' }}">
                    <h1 class="fontify boozeTitle">Mixes</h1>
                    <div class="bottle"></div>
                </nuxt-link>
            </div>
        </div>
    </section>
</template>

<script>
    export default{
        data(){
            return{
                data: 'test'
            }
        },
    }
</script>

<style scoped>
    .bg-overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.75;
        background: var(--light);
    }
    section{
        position: relative;
        background: var(--light);
        /*background-image: url('https://therealbarman.com/wp-content/uploads/2018/08/Bar-Background.png');*/
        background-image: url('https://picsum.photos/1440/720?random=3');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .grid{
        margin: 25px 0;
    }
    .boozeBtn{
        position: relative;
        width: 300px;
        height: 300px;
        grid-column: span 3;
        margin: 0 auto;
        margin-top: 100px;
        overflow: hidden;
        transition: 0.3s ease-in-out;
    }
    .boozeBtn:hover{
        transform: scale(1.2);
    }
    .boozeBtn:hover > div > .bottle {
        animation: wiggle 0.3s ease-in-out;
    }
    .rum > div {
        background: #b14000;
        background-image: linear-gradient(to top left, #b14000, #d79b1f);
    }
    .beer > div {
        background: #b14000;
        background-image: linear-gradient(to top left, #0d2f11, #9ec523);
    }
    .wine > div {
        background: #b14000;
        background-image: linear-gradient(to top left, #141414, #a0a4ad);
    }
    .cocktail > div {
        background: #b14000;
        background-image: linear-gradient(to top left, #474b4e, #f6f8f7);
    }
    .boozeBtn > div{
        height: 200px;
        width: 300px;
        margin-top: 100px;
    }
    .boozeTitle{
        z-index: 15;
        font-weight: initial;
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 6px 10px;
        font-size: 48px;
    }
    .bottle{
        transition: 0.2s ease-in-out;
        margin-left: 35px;
        margin-bottom: -55px;
        width: 350px;
        height: 350px;
        left: 0;
        bottom: 0;
        position: absolute;
        background-size: cover;
        background-position: 0;
        background-repeat: no-repeat;
    }
    @media (max-width: 1200px) {
        .boozeBtn {
            width: 250px
        }

        .bottle {
            width: 300px;
            height: 300px;
        }
        @media (max-width: 1000px) {
            .boozeBtn {
                margin-top: 5px;
                grid-column: span 6;
                width: 80%;
            }
            .boozeBtn > div{
                width: 100%;
            }

            .bottle {
                height: 400px;
                width: 400px;
                transform: rotate(-30deg);
                margin-bottom: -100px;
                margin-left: 80px;
                animation: none !important;
            }
            @media (max-width: 600px){
            .boozeBtn{
                overflow: initial;
            }
                .bottle{
                    width: 200px;
                    height: 200px;
                    margin-bottom: 0;
                    margin-right: 200px;
                    margin-left: 100%;
                    transform: translate(-100px);
                }
            }
        }
    }
    @keyframes wiggle {
        0%, 100% {
            transform: rotate(0deg);
        }
        50%{
            transform: rotate(2deg);
        }
        20%, 80% {
            transform: rotate(-2deg);
        }
    }

    .rum > div > .bottle{background-image:  url("~assets/bottles/rum.png");}
    .beer > div > .bottle{background-image:  url("~assets/bottles/beer.png");}
    .wine > div > .bottle{background-image:  url("~assets/bottles/wine.png");}
    .cocktail > div > .bottle{background-image:  url("~assets/bottles/cocktails.png");}
</style>