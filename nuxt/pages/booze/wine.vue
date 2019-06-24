<template>
    <div>
        <section>
            <product page="wine" />
            <review />
        </section>
        <contact />
    </div>
</template>

<script>

    import product from '~/components/booze/product.vue'
    import review from '~/components/booze/product-review.vue'
    import contact from '~/components/home/contact.vue'

    export default {
        components: {
            product,
            review,
            contact
        }
    }
</script>

<style scoped>
    section{
        position: relative;
        background: var(--alt);
    }
</style>
