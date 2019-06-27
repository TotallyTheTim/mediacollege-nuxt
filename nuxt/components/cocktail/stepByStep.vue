<template>
    <section>
        <div class="bg-overlay" />
        <div class="grid">
            <div class="steps">
                <h2 class="fontify">Step by step</h2>
                <div class="holder">
                    <div class="buttons">
                        <button v-if="index" class="back" @click="back()"></button />
                        <button v-if="index < steps.length-1" class="next" @click="next()" />
                    </div>
                    <div class="step" v-for="step in stepList" :key="step.title">
                        <h3>{{step.title}}</h3>
                        <p>{{step.text}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
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
        color: white;
        padding: 85px;
        background-color: var(--dark);
        /*background-image: url('https://therealbarman.com/wp-content/uploads/2018/08/Bar-Background.png');*/
        background-image: url('https://picsum.photos/1440/720?random=1');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .steps{
        grid-column: 1/ span 6;
        background: var(--light);
        padding: 15px;
    }
    .holder{
        border-radius: 5px;
        overflow: hidden;
        position: relative;
        height: max-content;
        display: flex;
        background: rgba(1,2,3,.4);
    }
    .buttons{
        position: absolute;
        width: 100%;
        top: calc(50% - 25px);
        height: 50px;
    }
    h2{
        font-weight: 300;
        font-size: 34px;
        color: var(--dark);
        margin: 5px;
    }
    button{
        width: 50px;
        height: 50px;
        background: transparent;
        border: none;
        z-index: 5;
        position: relative;
    }
    .back{
        float: left;
    }
    .next{
        float: right;
    }
    .back:after{
        top: 0;
        left: 0;
        position: absolute;
        content: '';
        margin-left: 12.5px;
        border-right: 25px solid white;
        z-index: 3;
        border-top: 25px solid transparent;
        border-bottom: 25px solid transparent;
    }
    .next:after{
        top: 0;
        left: 0;
        position: absolute;
        content: '';
        margin-left: 12.5px;
        border-left: 25px solid white;
        z-index: 3;
        border-top: 25px solid transparent;
        border-bottom: 25px solid transparent;
    }
    .step{
        padding: 25px 65px;
        transition: 0.4s ease-in-out;
        background-image: linear-gradient(to right top, orangered,rebeccapurple);
        background-attachment: fixed !important;
        background-position: center !important;
        min-width: 100%;
        max-width: 100%;
    }
    .step:nth-child(3){ background-image: linear-gradient(to right top, lightcoral,dodgerblue);}
    .step:nth-child(4){ background-image: linear-gradient(to right top, darkslateblue,brown);}
    .step:nth-child(5){ background-image: linear-gradient(to right top, dimgray,darksalmon);}
    .step:nth-child(6){ background-image: linear-gradient(to right top, midnightblue,mintcream);}
    .step:nth-child(7){ background-image: linear-gradient(to right top, darkred,deeppink);}
    .hide{
        margin-left: -100%;
    }
</style>

<script>
    export default {
        data(){
            return{
                steps: '',
                index: 0,
                stepList: [
                    {
                        title: 'Gather Ingredients',
                        text: 'Make sure the ice is frozen, te gin is below 20 degrees celsius and the tonic is cold.',
                    },
                    {
                        title: 'This needs some booze',
                        text: 'Start with adding some Gin, about 5 ~ 10 % of the total drink should be gin',
                    },
                    {
                        title: 'Cool it!',
                        text: 'Add some ice. This will make it look better and who doesn\' love a good cool drink?',
                    },
                    {
                        title: 'Bubbles?',
                        text: 'In this step we\'ll add some Tonic. fill the rest of the drink with tonic.',
                    },
                    {
                        title: 'Extra: Flavors',
                        text: 'Add some Flavors, a well known flavor is Lime. slice it up and add it in.',
                    },
                    {
                        title: 'Enjoy!',
                        text: 'Enjoy you drink, perfect for hot weather, with friends or like me behind a computer.',
                    }
                ]
            }
        },
        mounted(){
            this.steps = document.getElementsByClassName('step')
            console.log(this.steps)
        },
        methods:{
            next(){
                this.steps[this.index].classList.add('hide')
                this.index++;
            },
            back(){
                this.index--;
                this.steps[this.index].classList.remove('hide')
            }
        }
    }
</script>