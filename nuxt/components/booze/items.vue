<template>
    <section>
        <div class="bg-overlay"></div>
        <div class="grid">
            <div class="filters">
                <div class="flexFilter">
                    <div class="search">
                        <h3>Search for booze</h3>
                        <input type="text" placeholder="Pilsener, Jack daniels, etc!" v-model="search"  @input="filterBoozes()"/>
                    </div>
                    <div class="type">
                        <h3>Type of booze</h3>
                        <select v-model="type" @input="filterBoozes()">
                            <option value="All">All</option>
                            <option value="Beer">Beer</option>
                            <option value="Wine">Wine</option>
                            <option value="Rum">Rum</option>
                            <option value="Mix">Mix</option>
                        </select>
                    </div>
                    <div class="price">
                        <h3>Max Price</h3>
                        <div>
                        <p v-text="min"/>
                    <input @input="filterBoozes()" type="range" v-model="price" :min="Math.ceil(min)" :max="Math.ceil(max)" class="slider">
                        <p v-text="max"/>
                        </div>
                    </div>
                    <div class="allergies">
                        <h3>Allergies</h3>
                        <select v-model="allergies"  @input="filterBoozes()">
                            <option value="None">None</option>
                            <option value="Gluten">Gluten</option>
                            <option value="Milk">Milk</option>
                            <option value="Nuts">Nuts</option>
                            <option value="Pip/Stone fruit">Pip/Stone fruit</option>
                        </select>
                    </div>
                </div>
                <div v-if="price < max || search.length || type !== 'All' || allergies !== 'None'">
                    <h3 class="filterTitle"> Filtering on:</h3>
                    <div class="activeFilters">
                        <div v-if="price < max">Max price: €{{price}} <a @click="price=max"><icon class="close" icon="times-circle" /></a></div>
                        <div v-if="search.length">Name contains: {{search}} <a @click="search=''"><icon class="close" icon="times-circle" /></a></div>
                        <div v-if="type !== 'All'">Type of booze: {{type}} <a @click="type='All'"><icon class="close" icon="times-circle" /></a></div>
                        <div v-if="allergies !== 'None'">Allergies: {{allergies}}<a @click="allergies='None'"><icon class="close" icon="times-circle" /></a></div>
                    </div>
                </div>
            </div>
            <div class="boozelist">
                <div class="results" v-if="boozes.length">
                    <span>got {{boozes.length}} results</span>
                    <select v-model="order" @input="filterBoozes()">
                        <option value="0">Alphabetical order</option>
                        <option value="1">Search</option>
                        <option value="2">Highest price</option>
                        <option value="3">Lowest price</option>
                    </select>
                </div>

                <div class="results noResults" v-else>No results found with those filters</div>

                <div class="booze" :class="'bg-' + booze.type" v-for="booze in boozes">
                    <icon class="icon" :class="'icon-' + booze.type" :icon="getIcon(booze.type)"></icon>
                    <img class="brand" :src="require(`@/assets/brands/${booze.brand.toLowerCase()}.png`)">
                    <p>{{booze.name}}</p>
                    <span class="boozePrice">{{booze.price}}</span>
                    <nuxt-link  :to="'booze/' + booze.type" class="noDec">
                        <retroBtn
                            alt="small"
                            BtnText="Read more"
                            :BtnTextHover="'Buy ' + booze.type"
                    />
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import * as Fuse from 'fuse.js';
    import retroBtn from '~/components/retroBtn.vue';
    import beer from '~/json/beer.json'
    import wine from '~/json/wine.json'
    import rum from '~/json/rum.json'
    import mix from '~/json/mix.json'

    export default {
        components: {
            retroBtn
        },
        computed: {
            allBoozes () {
                let arr = [];
                for (let i = 0; i < beer.length; i++){
                    arr.push({...beer[i], 'type' : 'beer'})
                }

                for (let i = 0; i < wine.length; i++){
                    arr.push({...wine[i], 'type' : 'wine'})
                }

                for (let i = 0; i < rum.length; i++){
                    arr.push({...rum[i], 'type' : 'rum'})
                }

                for (let i = 0; i < mix.length; i++){
                    arr.push({...mix[i], 'type' : 'mix'})
                }
                return arr;
            }
        },
        data(){
            return{
                order: 0,
                boozes: [],
                fuse: '',
                min: 4.49,
                max: 1249.99,
                price: 99999,
                search: '',
                type: 'All',
                allergies: 'None',
                options : {
                    shouldSort: true,
                    threshold: 0.5,
                    location: 0,
                    distance: 1000,
                    maxPatternLength: 32,
                    minMatchCharLength: 1,
                    keys: [
                        "brand",
                        "name"
                    ]
                }
            }
        },
        mounted() {
            if(this.$route.query.filter) {
                let filter = (this.$route.query.filter)
                this.type = filter.charAt(0).toUpperCase() + filter.slice(1);
                let _this = this;
                setTimeout(function () {
                    window.scrollTo(0, _this.getPosition(document.getElementsByClassName('results')[0]).y - innerHeight/2)
                },300)};
            this.boozes = this.allBoozes;
            this.max = Math.max.apply(Math, this.boozes.map(function(o) { return o.price; }))
            this.min = Math.min.apply(Math, this.boozes.map(function(o) { return o.price; }))
            this.price = Math.ceil(this.max);
            this.fuse = new Fuse(this.boozes, this.options)
            this.filterBoozes();
        },
        methods: {
            getPosition(el) {
                let x = 0,
                    y = 0;
                while (el != null && (el.tagName || '').toLowerCase() != 'html') {
                    x += el.offsetLeft || 0;
                    y += el.offsetTop || 0;
                    el = el.parentElement;
                }
                return { x: parseInt(x, 10), y: parseInt(y, 10) };
            },
            async filterBoozes(){
                    let boozes = await this.allBoozes;
                    if (this.search.length) {
                    boozes = (this.fuse.search(this.search));
                    }
                    delete boozes.__ob__;
                    if (this.type !== 'All') {
                        boozes = boozes.filter(b => b.type.toLowerCase() === this.type.toLowerCase())
                    }
                    if (this.allergies !== 'None') {
                        boozes = boozes.filter(b => b.allergies.toLowerCase() !== this.allergies.toLowerCase())
                    }
                    switch(this.order.toString()) {
                        case '0':
                            //Alphabetical
                            let arr = [];
                            for (let i = 0; i < boozes.length; i++){
                                arr.push(boozes[i].name)
                            }
                            arr.sort();
                            let newBoozes = [];
                            for (let i = 0; i < arr.length; i++){
                                let index = boozes.findIndex(p => p.name == arr[i])
                                newBoozes.push(boozes[index])
                            }
                            boozes = newBoozes;
                            break;
                        case '1':
                            //Search
                            //do nothing
                            break;
                        case '2':
                            //Highest price
                            this.order = 1;
                            break;
                        case '3':
                            //Lowerst price
                            this.order = 1;
                            break;
                    }
                    boozes = boozes.filter(b => b.price < this.price);
                    this.boozes = boozes;
            },
            getIcon(type){
                switch(type) {
                    case 'wine':
                        type = 'wine-glass-alt';
                        break;
                    case 'rum':
                        type = 'glass-whiskey';
                        break;
                    case 'mix':
                        type = 'cocktail';
                        break;
                }
                return type;
            }
        }
    }
</script>

<style scoped>
    .close{
        transform: scale(1.5);
        margin: 0 7px;
        color: var(--alt);
    }
    .brand{
        width: 50px;
        height: 50px;
        bottom: 0px;
        right: 0px;
        border-radius: 25px;
        position: absolute;
    }
    section{
        position: relative;
        background: var(--alt);
        background-image: url('https://picsum.photos/1080/720?random=2&blur=3');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .icon{
        width: 30px;
        height: 30px;
        padding: 5px;
        background: var(--light);
        color: var(--dark);
        font-size: 22px;
        border-radius: 100%;
        position: absolute;
        right: -5px;
        top: -5px;
    }
    .icon-beer{
        color: #b7934f;
    }
    .bg-beer{
        background: url("~assets/bg/beer.png") !important;
        background-size: cover !important;
        background-position: center !important;
    }
    .icon-wine{
        color: #700008;
    }
    .bg-wine{
        background: url("~assets/bg/wine.png") !important;
        background-size: cover !important;
        background-position: right !important;
    }
    .icon-rum{
        color: #b35005;
    }
    .bg-rum{
        background: url("~assets/bg/rum.png") !important;
        background-size: cover !important;
        background-position: left !important;
    }
    .icon-mix{
        color: #256a2c;
    }
    .bg-mix{
        background: url("~assets/bg/mix.png") !important;
        background-size: cover !important;
        background-position: center !important;
    }
    .results{
        width: 100%;
        background: #226622;
        color: white;
        height: 55px;
        margin: 15px;
        border-radius: 15px;
        grid-column: span 6;
        display: flex;
        align-items: center;
        justify-content: stretch;
    }
    .results > span{
        padding: 15px;
        min-width: max-content;
        flex: 1;
    }
    .results > select{
        border-radius: 0 15px 15px 0;
        height: 100%;
        padding: 15px;
        min-width: max-content;
    }
    .noResults{
        background: #662222;
    }
    .boozelist{
        display: flex;
        justify-content: stretch;
        flex-wrap: wrap;
        background: var(--midtone);
        grid-column: span 6;
    }
    .boozePrice{
        width: max-content;
        margin-left: auto;
    }
    .booze{
        font-size: 18px;
        border-radius: 0 0 26px 0;
        margin: 15px;
        min-width: max-content;
        flex: 1;
        height: 150px;
        position: relative;
        padding: 25px;
        background: var(--light);
        color: var(--dark);
    }
    .booze > p, .booze > span{
        z-index: 5;
    }
    .boozePrice:before{
        content: '€';
    }
    .noDec{
        padding-right: 35px;
    }

    .filterTitle{
        margin-left: 15px;
        color: white;
    }
    .activeFilters{
        padding: 7.5px;
        border-radius: var(--radius);
        margin: 0 15px 15px;
        background: var(--background);
    }
    .activeFilters > div{
        margin-right: 5px;
        display: inline-block;
        background: var(--light);
        width: max-content;
        padding: 7.5px;
        border-radius: 5px;
    }
    .filters{
        background: var(--dark);
        margin-top: 25px;
        grid-column: span 6;
    }
    .search, .type, .price, .allergies{
        color: white;
        margin: 7.5px;
        min-width: 500px;
        border-radius: var(--radius);
        flex: 1;
        max-width: 100%;
    }
    .type, .allergies{
        min-width: 250px;
        max-width: 100%;
    }
    .type{
        min-width: 200px;
    }
    h3{
        font-weight: initial !important;
    }
    .search > input, .type > select, .allergies > select, .price > div{
        padding: 15px;
        color: black;
        background: white;
        width: 100%;
        border-radius: var(--radius);
        font-size: 18px;
    }
    input, select{
        border: 2px var(--midtone) solid;
    }
    input:focus,select:focus{
        outline: none;
        border-color: dodgerblue;

    }
    .price > div{
        justify-content: stretch;
        align-items: center;
        display: flex;
        max-width: 100%;
    }
    .price > div >p{
        margin-right:15px;
        display: inline-block;
    }
    .price > div >p:before{
        content: '€';
    }
    .price > div >p:last-child{
        margin-right: 0;
        margin-left: 15px;
    }
    .slider {
        border-radius: var(--radius);
        flex: 1;
        -webkit-appearance: none;
        width: 100%;
        height: 15px;
        background: none;
        outline: none;
        transition: .2s;
    }
    .slider:focus,.slider:hover{
        height: 25px;
    }
    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        transition: .2s ease-in-out;
        appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        background: var(--alt);
        cursor: pointer;
    }
    .slider:hover::-webkit-slider-thumb, .slider:focus::-webkit-slider-thumb {
        height: 25px;
        width: 7px;
        border-radius: 20%;
        background: var(--dark);
    }
    .flexFilter{
        flex-wrap: wrap;
        padding: 7.5px;
        width: 100%;
        display: flex;
        justify-content: stretch;
    }
    .bg-overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.75;
        background: var(--light);
    }
    @media (max-width: 550px){
        .filters,.boozelist{
            margin: 0 -15px;
        }
        .boozelist{
            justify-content: center;
            margin-top: -15px;
        }
        .booze{
            width: 100%;
            margin: 5px;
            max-width: 100%;
        }
        .noDec{
            margin-top: 32px;
            margin-bottom: 5px;
        }
        .flexFilter{
            flex-direction: column;
        }
        .search,.type,.price,.allergies{
            padding-right: 15px;
            width: 100%;
            min-width: 0;
            max-width: 100%;
        }
    }
</style>