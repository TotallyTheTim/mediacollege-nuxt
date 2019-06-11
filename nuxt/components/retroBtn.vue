<template>
    <div class="retro-holder fontify">
        <div class="retro" :class="alt">
            <div v-text="BtnText" />
            <div v-text="BtnTextHover" />
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                //
            }
        },
        props: ['alt','BtnText','BtnTextHover']
    }
</script>

<style scoped>
    .retro-holder {
        margin: 0 7px;
        --retro-button-color: var(--background);
        --retro-button-text-color: var(--dark);
        --retro-hover-button-color: var(--alt);
        --retro-hover-button-text-color: var(--light);
    }

    .retro{
        transition: 0.2s ease-in-out;
        background: var(--retro-button-color);
        text-transform: uppercase;
        color: var(--retro-button-text-color);
        font-size: 28px;
        width: max-content;
        padding: 18px 28px;
        box-shadow:
                3px 0 var(--retro-button-color),
                0 3px var(--retro-button-color),
                -3px 0 var(--retro-button-color),
                0 -3px var(--retro-button-color),
                inset -3px 0 var(--retro-button-color),
                inset 3px 0 var(--retro-button-color),
                inset 0 -3px var(--retro-button-color),
                inset 0 3px var(--retro-button-color),
                inset -6px 0 var(--retro-button-text-color),
                inset 6px 0 var(--retro-button-text-color),
                inset 0 -6px var(--retro-button-text-color),
                inset 0 6px var(--retro-button-text-color)
    ;
        position: relative;
        margin: 12px;
    }
    .retro > div{
        color: var(--retro-button-text-color);
        transition: inherit;
        overflow: hidden;
        width: max-content;
        margin: 0 auto;
        padding: 0 5px;
        height: 30px;
    }
    .retro > div:nth-child(2){
        color: var(--retro-hover-button-text-color);
        height: 0;
    }
    .retro:hover > div:nth-child(2){
        height: 30px;
    }
    .retro:hover > div:nth-child(1){
        height: 0;
    }

    .retro:hover{
        color: var(--retro-hover-button-text-color);
        background: var(--retro-hover-button-color);
        box-shadow:
                3px 0 var(--retro-hover-button-color),
                0 3px var(--retro-hover-button-color),
                -3px 0 var(--retro-hover-button-color),
                0 -3px var(--retro-hover-button-color),
                inset -3px 0 var(--retro-hover-button-color),
                inset 3px 0 var(--retro-hover-button-color),
                inset 0 -3px var(--retro-hover-button-color),
                inset 0 3px var(--retro-hover-button-color),
                inset -6px 0 var(--retro-hover-button-text-color),
                inset 6px 0 var(--retro-hover-button-text-color),
                inset 0 -6px var(--retro-hover-button-text-color),
                inset 0 6px var(--retro-hover-button-text-color)
    ;
    }
    .retro:hover:before,.retro:hover:after{
        width: 18px;
        height: 18px;
        transform: none;
        background: var(--retro-hover-button-color);
        box-shadow:
                3px -3px transparent,
                6px -6px transparent,
                -3px -3px var(--retro-hover-button-text-color),
                -3px 3px var(--retro-hover-button-text-color),
                -8px -8px var(--retro-hover-button-color),
                -8px 8px var(--retro-hover-button-color)
    ;
    }
    .retro:hover:before{
        left: -11px;
        transform: rotate(0deg) translate(0,2px);
    }
    .retro:hover:after{
        right: -11px;
        transform: rotate(-180deg) translate(0,-2px);
    }

    .retro:before,.retro:after{
        transition: inherit;
        content: '';
        display: block;
        background: var(--retro-button-color);
        width: 22px;
        height: 22px;
        position: absolute;
        top: 50%;
        margin-top: -11px;
        box-shadow:
                3px -3px var(--retro-button-color),
                6px -6px var(--retro-button-text-color)
    ;
    }

    .retro:before{
        left: -14px;
        transform: rotate(45deg);
    }
    .retro:after{
        right: -14px;
        transform: rotate(-135deg);
    }
    .small{
        font-size: 18px;
        padding: 12px 18px;
    }
    .small > div{
        height: 23px;
    }
    .small:hover > div:nth-child(2){
        height: 20px;
    }

    .retro-icon{
        transition: 0.2s ease-in-out;
        width: 35px;
        height: 35px;
        font-size: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--retro-button-text-color);
        padding: 5px;
        background: var(--retro-button-color);
        border-radius: 999%;
        border: solid 8px var(--retro-button-color);
        position: relative;
        flex-direction: column-reverse;
    }
    .retro-icon > div{
        transition: inherit;
        display: block;
        height: 24px;
        overflow: hidden;
        color: var(--retro-button-text-color);
    }
    .retro-icon:hover > div{
        height: 0;
    }
    .retro-icon:hover > div:nth-child(2){
        height: 24px;
    }
    .retro-icon > div:nth-child(2){
        color: var(--retro-hover-button-text-color);
        height: 0;
    }
    .retro-icon:before{
        transition: inherit;
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        border: var(--retro-button-text-color) solid 3px;
        margin: -3px;
        width: 100%;
        height: 100%;
        border-radius: 999%;
    }

    .retro-icon:hover{
        color: var(--retro-hover-button-text-color);
        border: solid 8px var(--retro-hover-button-color);
        background: var(--retro-hover-button-color);
    }

    .retro-icon:hover:before{
        margin: -6px;
        border: 6px double var(--retro-hover-button-text-color);
    }
</style>