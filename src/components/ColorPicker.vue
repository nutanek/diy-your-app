<template>
    <div>
        {{color.hex}}
        <Chrome v-model="color" :disableAlpha="true"></Chrome>
    </div>
</template>

<script>
    import { Chrome } from 'vue-color'
    const defaultProps = {
        hex: '#000000'
    }
    export default {
        props: ['pickColor'],
        components: {
            'Chrome': Chrome
        },
        data() {
            return {
                color: defaultProps
            }
        },
        watch: {
            color({hex}) {
                this.pickColor(hex)
            }
        }
    }
</script>

<style lang="scss" scoped>
  
</style>
