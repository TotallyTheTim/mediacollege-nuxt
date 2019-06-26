<template>
    <section>
        <div class="bg-overlay"></div>
        <div class="grid">
            <div class="title fontify">Cocktail of the Month</div>
            <div class="details">
                <div class="big" />
                <div class="dealname"><h2 class="fontify">Ingredients:</h2>
                <p v-for="item in ingredients">{{item.amount}} X {{item.name}}</p>
                </div>
            </div>
            <div class="content">
                <div class="drink fontify" v-text="text.drink">Gin 'n Tonic</div>
                <div class="text">
                    <p v-text="text.txt"></p>
                </div>
                <div class="btn-holder">
                    <router-link class="noDec" title="to cocktail page" to="/cocktails">
                        <retroBtn
                                BtnText="Read more"
                                :BtnTextHover="text.drink"
                        />
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import retroBtn from '~/components/retroBtn.vue'

    export default {
        components: {
            retroBtn
        },
        data(){
            return{
            text: {
                drink: 'Gin \'n Tonic',
                txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas turpis eget tempor ornare. Donec lobortis purus et auctor elementum. Etiam ut lacus lorem. Quisque feugiat quam mauris, ut luctus mi molestie vitae. Nunc porta est ut sem pretium, vitae vulputate ante sagittis. Maecenas aliquam turpis eu nibh feugiat, non mattis erat sollicitudin. Nam condimentum convallis ligula, quis mollis sem varius vitae.'
                },
                ingredients: [
                    {name: 'GIN', amount: 1},
                    {name: 'TONIC', amount: 1},
                    {name: 'LIME', amount: 2},
                ]
            }
        }
    }
</script>

<style scoped>
    .btn-holder{
        margin-top: -2px;
        background: var(--light);
        padding: 15px;
        display: flex;
        justify-content: center;
    }
    .bg-overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.75;
        background: var(--alt);
    }
    section{
        position: relative;
        background: var(--alt);
        /*background-image: url('https://therealbarman.com/wp-content/uploads/2018/08/Bar-Background.png');*/
        background-image: url('https://picsum.photos/1440/720?random=2');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .grid{
        margin: 25px 0;
    }
    .title{
        grid-column: span 6;
        background: var(--light);
        padding: 15px;
        font-size: 48px;
    }
    .details, .content{
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        min-height: 500px;
        grid-column: span 3;
    }
    .big{
        flex: 1;
        background: var(--dark);
        background-image: url("https://www.garnishwithlemon.com/wp-content/uploads/2018/03/Elderflower-Gin-Tonic-2-of-2-720x720.jpg");
        background-position: center;
        background-size: cover;
        min-height: 150px;
    }
    .dealname{
        margin-top: 15px;
        background: var(--light);
        padding: 15px;
    }
    h2{
        font-weight: initial;
    }
    .drink{
        background: var(--light);
        padding: 15px;
        font-size: 28px;
    }
    .text{
        margin-top: 15px;
        padding: 15px;
        background: var(--light);
        flex: 1;
    }

    @media (max-width: 1200px){
        .content, .details{
            grid-column: span 6;
            min-height: 200px;
            margin: 0 25px;
        }
        .drink{
            text-align: center;
            letter-spacing: 0.2em;
            font-size: 38px;
        }
        .details{
            min-height: unset;
            flex-direction: row;
            align-items: stretch;
        }
        .dealname {
            min-height: 100%;
            /*max-height: unset;*/
            height: 300px;
            margin-top: 0;
            min-width: max-content;
            padding-right: 45px;
            margin-left: 15px;
        }
        @media (max-width: 750px){
            .big{
                min-height: 200px;
            }
            .details{
                flex-direction: column;
            }
            .content{
                grid-row: 2;
            }
            .dealname{
                height: max-content;
                margin-left: 0;
                margin-top: 15px;
            }
        }
    }

</style>