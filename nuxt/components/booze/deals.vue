<template>
    <section>
        <div class="bg-overlay"></div>
        <div class="grid">
            <div class="title fontify">Booze deal of the day</div>
            <div class="details">
                <div class="big"></div>
                <div class="dealname"><h2 class="fontify" v-text="deal.name" />
                    <p v-text="deal.items"></p>
                </div>
            </div>
            <div class="content">
                    <p class="text" v-text="deal.txt" />
                <div class="btn-holder">
                    <retroBtn
                            BtnText="Add to cart"
                            :BtnTextHover="deal.name"
                    />
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
                deal: {
                    name: 'German Pride',
                    items: 'two 6packs (25cl x 6) of german beer, 1 bottle of Jägermeister and german snacks.',
                    txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas turpis eget tempor ornare. Donec lobortis purus et auctor elementum. Etiam ut lacus lorem. Quisque feugiat quam mauris, ut luctus mi molestie vitae. Nunc porta est ut sem pretium, vitae vulputate ante sagittis. Maecenas aliquam turpis eu nibh feugiat, non mattis erat sollicitudin. Nam condimentum convallis ligula, quis mollis sem varius vitae.'
                }
            }
        }
    }
</script>

<style scoped>
    .btn-holder{
        /*margin-top: 15px;*/
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
        padding-top: 50px;
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
        background-image: url("https://www.thelocal.de/userdata/images/article/bd5edb7db25441bbe65e93278d5d7ef02153fed5a263242c1461ddab5427655a.jpg");
        background-position: center;
        background-size: cover;
        min-height: 150px;
    }
    .dealname{
        max-height: max-content;
        margin-top: 15px;
        background: var(--light);
        padding: 15px;
        flex: 1;
    }
    h2{
        font-weight: initial;
    }

    .text{
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

        .details{
            min-height: unset;
            flex-direction: row;
            align-items: stretch;
        }
        .dealname {
            min-height: 100%;
            max-height: unset;
            height: 300px;
            margin-top: 0;
            max-width: 100%;
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
            .dealname{
                margin-left: 0;
                margin-top: 15px;
            }
        }
    }

</style>