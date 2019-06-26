<template>
    <div class="grid">
        <h1 class="top">
            Reviews <span class="amount">{{reviews.length}} reviews</span>
        </h1>
        <div class="review" v-for="review in reviews">
            <h3 v-text="review.title" />
            <h4 v-if="!!review.name" v-text="review.name" />
            <p v-text="review.text"></p>
            <div class="starbar">
                <div class="star-off"></div>
                <div class="star-on" :style="{width: review.stars*20 + '%'}"></div>
                <img src="~/assets/starbar.png" title="beer bottle overlay" alt="beer bottle overlay"/>
            </div>
        </div>
        <div class="total-holder" :style="{gridRow: '2 / span ' + reviews.length}">
            <div class="total">
                <h3>Average score:</h3>
                <h4>{{stars/20}} beers</h4>
                <div class="starbar">
                    <div class="star-off"></div>
                    <div class="star-on" :style="{width: stars + '%'}"></div>
                    <img src="~/assets/starbar.png" title="beer bottle overlay" alt="beer bottle overlay"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .top a {
        display: block;
        color: dodgerblue;
        text-decoration: underline;
    }
.grid{
    margin-top: 15px;
    margin-bottom: 80px;
}
.top{
    padding: 8px;
    background: white;
    grid-column: span 6;
}
.amount{
    float: right;
}
.total-holder{
    background: white;
    position: relative;
    grid-row: 2/ span 6;
    grid-column: 5/ span 2;
}
    .total{
        padding: 15px;
        background: white;
        position: sticky;
        top: 150px;
        bottom: 150px;
        display: block;
    }

    .review {
        grid-column: 1/span 4 ;
        background: white;
        padding: 15px;
    }
    .starbar{
        position: relative;
        width: 100%;
        margin: 5px;
    }
    .starbar img {
        position: relative;
        margin-bottom: -5px;
        width: 100%;
    }
    .star-off{
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        background: black;
        position: absolute;
    }
    .star-on{
        transition: 0.2s ease-in-out;
        top: 0;
        left: 0;
        height: 100%;
        background: green;
        position: absolute;
    }
    .review > .starbar{
        width: 100px;
        float: right;
    }
</style>

<script>

    export default {
        data() {
            return {
                stars: 0,
                reviews: [
                    {
                        title: 'Great booze',
                        text: 'liked it very much',
                        stars: 5,
                        name: 'Tim Huijkman'
                    },
                    {
                        title: 'Good booze',
                        text: 'liked the taste and price yes',
                        stars: 4,
                        name: 'Pawel Dokodo'
                    }
                ]
            }
        },
        methods: {
            calcStars(){
                let stars = this.reviews.map(r => r.stars)
                let total = 0;
                stars.map(r => total +=r)
                this.stars = (total/stars.length)*20
            }
        },
        created(){
            this.calcStars()
        }
    }
</script>