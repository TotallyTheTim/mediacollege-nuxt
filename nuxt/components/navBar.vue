<template>
    <div class="nav">
        <div class="hambutton" v-on:click="hamburger = !hamburger">
            <div class="hamburger" :class="{'activeburger' : hamburger}" ></div>
        </div>
        <div class="grid" :class="{'showingMobile' : hamburger}">
            <div class="links">
                <nuxt-link  to="/" title="to home page" exact>Home</nuxt-link>
                <div class="between"/>
                <nuxt-link  to="/booze" title="to booze page">Booze</nuxt-link>
                <div class="between"/>
                <nuxt-link  to="/about" title="to about page">About</nuxt-link>
                <div class="between"/>
                <nuxt-link  to="/cocktail" title="to cocktail page">Cocktail</nuxt-link>
            </div>
            <div class="logo">
                <div />
                <img src="~/assets/logo.png" title="time for booze logo" alt="time for booze logo">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                hamburger: false,
            }
        }
    }
</script>

<style scoped>
    .between{
        display: inline-block;
        width: 15px;
        border-radius: 2px;
        border: 2px var(--dark) solid;
        background: var(--midtone);
        height: 15px;
        margin: 0 10px;
        margin-bottom: 1px;
        transform: rotate(45deg);
    }
    .grid{
        background: var(--background);
    }
    .nav{
        z-index: 999;
        left: 0;
        top: 0;
        position: fixed;
        display: flex;
        justify-items: center;
        justify-content: center;
        align-items: center;
        width: 100vw;
        background: var(--background);
        height: 80px;
    }
    .links{
        color: var(--dark);
        font-family: PointedlyMad, sans-serif;
        font-size: 32px;
        grid-column: 1/ span 5;
    }
    .links > a{
        transition: 0.2s;
        color: inherit;
        position: relative;
        text-decoration: none;
    }
    .links > a:after{
        transition: inherit;
        content: '';
        width: 10px;
        height: 0px;
        border: 10px solid transparent;
        border-top: 12px solid transparent;
        right: 50%;
        margin-right: -10px;
        top: 85%;
        position: absolute;
    }
    .links > a:before{
        transition: inherit;
        content: '';
        width: 10px;
        height: 0;
        border: 10px solid transparent;
        border-bottom: 5px solid transparent;
        left: 50%;
        margin-left: -10px;
        margin-top: -15px;
        top: 85%;
        position: absolute;
    }
    .hambutton{
        width: 45px;
        height: 45px;
        position: absolute;
        left: 15px;
        z-index: 20;
        display: flex;
        align-items: center;
    }
    .hamburger{
        transition: 0.3s ease-in-out;
        display: none;
        background: var(--dark);
        height: 9px;
        border-radius: 2px;
        width: 45px;
    }
    .hamburger:before,.hamburger:after{
        display: block;
        transition: inherit;
        content: '';
        border-radius: inherit;
        position: absolute;
        width: inherit;
        height: inherit;
        background: inherit;
    }
    .hamburger:before{
        margin-top: -18px;
    }
    .hamburger:after{
        margin-top: 18px;
    }
    .activeburger{
        background: none;
    }
    .activeburger:before,.activeburger:after{
        background: var(--alt);
        margin-top: 0;
        transform: rotate(45deg);
    }
    .activeburger:before{
        transform: rotate(-45deg);
    }
    .nuxt-link-active:after{
        border-top: 12px solid var(--alt) !important;
        top: 115% !important;
        animation: float 1s ease-in-out;
    }
    .nuxt-link-active:before{
        border-bottom: 5px solid var(--alt) !important;
        top: 115% !important;
        animation: float 1s ease-in-out;
    }
    @keyframes float {
        0%,100%{transform: translate(0,0)}
        30%{transform: translate(0,5px)}
    }
    .logo{
        margin-top: -25px;
        grid-column: 6;
        display: flex;
        justify-content: center;
    }
    .logo > div{
        background: var(--background);
        width: 150px;
        transform: rotate(45deg);
        height: 150px;
        position: absolute;
    }
    .logo > img{
        position: absolute;
        width: 150px;
    }

    @media (max-width: 1320px){
        .logo{
            display: none;
        }
        .between{
            width: 10px;
            height: 10px;
            border: none;
            background: var(--dark);
            margin: 0 8px;
            margin-top: 14px;
        }
        .links{
            display: flex;
            justify-content: center;
            grid-column: span 6;
        }
        @media (max-width: 750px){
            .hamburger{
                display: block;
            }
            .between{
                display: none;
            }
            .grid:not(.showingMobile) > .links > .nuxt-link-active{
                position: fixed !important;
                top: 15px;
                animation: float 1s ease-in-out;
                margin-top: 0;
                background: none;
            }
            .logo{
                display: none;
            }
            .links{
                height: max-content;
                display: flex;
                flex-direction: column;
                align-items: center;
                grid-column: span 6;
            }
            .links > a{
                padding: 0px;
                margin: 15px auto;
                background: var(--background);
                display: block;
            }
            .grid{
                transition: 0.5s ease-in-out;
                margin-top: -100vh;
                padding:25px;
                top: 0;
                left: 0;
                background: var(--background);
                position: absolute;
                height: 380px;
                width: 100vw;
                max-width: 100vw;
            }
            .showingMobile{
                margin-top: 0vh;
            }
        }
    }
</style>