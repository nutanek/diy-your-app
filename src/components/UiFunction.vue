<template>
    <div class="functions-wrapper text-center">
        <i class="icon fa" v-bind:class="icon" aria-hidden="true"></i>
        <p class="title">{{title}}</p>
    </div>
</template>

<script>
    export default {
        props: ['icon', 'title']
    }
</script>

<style lang="scss" scoped>
    .functions-wrapper {
        margin-top: 5px;
        margin-bottom: 20px;
        > .icon {
            font-size: 1.8em;
        }
        > .title {
            margin-bottom: 0px;
            font-size: 0.8em;
            text-transform: capitalize;
        }
    }
</style>
