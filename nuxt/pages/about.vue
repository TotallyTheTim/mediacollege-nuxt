<template>
    <section>
        <div class="grid">
            <h1 class="fontify">About us</h1>
            <p>
                The people at Time for Booze don't have a watch
                because they know that it's allways time for Booze.
                We're trying to let people across southern Europe know that it's always time for a good drink.
                With our Booze deals usually including snacks we make it easy for people to buy something special for a cool occasion.
                Even if they wanna spice it up more we have a different discounted cocktail every week!
            </p>
            <p></p>
            <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Amsterdam&t=&z=9&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
        </div>
    </section>
</template>

<style scoped>
    h1{
        font-size: 72px;
        grid-column: 1 /span 6;
    }
    p{
        grid-column: 1/ span 6;
    }
    .grid{
        margin-top: 150px;
    }
    .mapouter{
        grid-column: 1/ span 6;
        position:relative;
        text-align:right;
        min-height: 300px;
        height: 20vw;
        width:100%;
    }
    .gmap_canvas {
        overflow:hidden;
        background:none!important;
        height:100%;width:100%;
    }
</style>