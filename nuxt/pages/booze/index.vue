<template>
    <div>
        <deals />
        <items />
        <contact />
    </div>
</template>

<script>
    import deals from '~/components/booze/deals.vue'
    import items from '~/components/booze/items.vue'
    import contact from '~/components/home/contact.vue'

    export default {
        components: {
            deals,
            items,
            contact
        }
    }
</script>
