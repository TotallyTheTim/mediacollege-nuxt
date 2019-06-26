<template>
    <div>
        <cocktail />
        <steps />
        <contact />
    </div>
</template>

<script>
    import steps from '~/components/cocktail/stepByStep.vue'
    import cocktail from '~/components/home/cocktailofthemonth.vue'
    import contact from '~/components/home/contact.vue'

    export default {
        components: {
            steps,
            cocktail,
            contact
        }
    }
</script>

<style scoped>
    section:first-child{
        padding-top: 150px;
        padding-bottom: 100px;
    }
</style>

