<template>
    <span class="input-group-addon color-picker-addon" 
        v-bind:style="{backgroundColor: color.hex}"
        @click="isOpen=!isOpen">
        <div class="box" v-if="isOpen">
            <Chrome v-model="color" :disableAlpha="true"></Chrome>    
        </div>
    </span>
</template>

<script>
    import { Chrome } from 'vue-color'
    export default {
        props: ['initColor', 'pickColor'],
        components: {
            'Chrome': Chrome
        },
        data() {
            return {
                color: {
                    hex: this.initColor
                },
                isOpen: false
            }
        },
        watch: {
            color({hex}) {
                this.pickColor(hex)
            },
            initColor(hex) {
                this.color.hex = hex
            }
        }
    }
</script>

<style lang="scss" scoped>
    .color-picker-addon {
        position: relative;
        width: 50px;
        > .box {
            position: absolute;
            top: 40px;
            right: 0;
            z-index: 99;
        }
    }
</style>
