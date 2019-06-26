<template>
    <section>
        <div class="bg-overlay" />
        <div class="grid header-offset">
            <div class="image-holder">
                <logo />
            </div>
            <div class="text-holder">
                <div>
                    <h1 class="fontify">Time for Booze</h1>
                    <h2 class="fontify title" v-text="text.title"></h2>
                    <p class="text-content" v-text="text.txt"></p>
                    <div class="button-holder">
                        <a @click="goToRum()"><retroBtn
                                BtnText="Read more"
                                BtnTextHover="Buy booze"
                        /></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import retroBtn from '~/components/retroBtn.vue'
    import logo from '~/components/home/logo.vue'

    export default {
        components: {
            retroBtn,
            logo
        },
        data(){
            return {
                text: {
                    title: 'It\'s Time for a drink',
                    txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas turpis eget tempor ornare. Donec lobortis purus et auctor elementum. Etiam ut lacus lorem. Quisque feugiat quam mauris, ut luctus mi molestie vitae. Nunc porta est ut sem pretium, vitae vulputate ante sagittis. Maecenas aliquam turpis eu nibh feugiat, non mattis erat sollicitudin. Nam condimentum convallis ligula, quis mollis sem varius vitae.'
                }
            }
        },
        methods: {
            goToRum(){
                scrollTo(0, this.getPosition(document.getElementsByClassName('rum')[0]).y)
            },
            getPosition(el) {
                    let x = 0,
                        y = 0;
                while (el != null && (el.tagName || '').toLowerCase() != 'html') {
                    x += el.offsetLeft || 0;
                    y += el.offsetTop || 0;
                    el = el.parentElement;
                }
                return { x: parseInt(x, 10), y: parseInt(y, 10) };
            }
        }
    }
</script>

<style scoped>
    h1{
        text-align: center;
        width: 100%;
        font-weight: 100;
        letter-spacing: .1em;
    }
    h2{
        text-align: center;
        width: 100%;
    }
    .bg-overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.75;
        background: var(--dark);
    }
    section{
        position: relative;
        background-color: var(--dark);
        /*background-image: url('https://therealbarman.com/wp-content/uploads/2018/08/Bar-Background.png');*/
        background-image: url('https://picsum.photos/1440/720?random=1');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .button-holder{
        width: max-content;
        margin: 0 auto;
    }
    .title{
        font-weight: initial;
        font-size: 42px;
    }
    .text-content{
        padding: 16px 8px;
    }
    .image-holder{
        margin-left: -200px;
        min-height: max-content;
        /*background: rgba(234,123,234,0.4);*/
        display: flex;
        align-items: center;
        justify-content: center;
        grid-column: 1/ span 3;
    }
    .image-holder>*{
        width: 600px;
        height: 600px;
        max-width: 80vh;
    }
    .text-holder{
        color: white;
        align-items: center;
        display: flex;
        /*background: rgba(012,234,123,0.4);*/
        min-height: max-content;
        grid-column: span 3;
    }
    .text-holder > div{
        max-width: 100%;
        height: max-content;
    }
    @media (max-height: 650px){
        .image-holder{
            display: none;
        }
        .text-holder{
            grid-column: span 6;
            justify-content: center;
        }
        .text-holder > div{
            width: 600px;
        }
        @media (max-width: 1500px) {
            .text-holder > div{
                width: 100%;
            }
        }
    }

    @media (max-width: 1500px){
        .text-content{
            /*width: 80%;*/
        }
        @media (max-width: 1200px){
            .image-holder{
                display: none;
            }
            .text-holder{
                width: 100%;
                grid-column: span 6;
            }
            .title{
                width: 80%;
                margin: 0 auto;
            }
            .text-content{
                width: 80%;
                margin: 0 auto;
            }
        }
        .image-holder>img{
            width: 500px;
            height: 500px;
        }
    }
</style>
