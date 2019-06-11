<template>
    <div>
        <intro />
        <buttons />
        <cocktail />
        <contact />
    </div>
</template>

<script>
    import intro from '~/components/home/intro.vue'
    import buttons from '~/components/home/boozebuttons.vue'
    import cocktail from '~/components/home/cocktailofthemonth.vue'
    import contact from '~/components/home/contact.vue'

    export default {
        components: {
            intro,
            buttons,
            cocktail,
            contact
        }
    }
</script>
