<template>
    <div class="mobile-color-wrapper">
        <div v-for="(color, index) in colors"
            class="selector" 
            v-bind:class="[color.name, {'selected' : selectedIndex===index}]" 
            @click="selectColor(index)">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['change'],
        data() {
            return {
                colors: [
                    { name: 'white', hex: '#FFFFFF' },
                    { name: 'black', hex: '#000000' }
                ],
                selectedIndex: 0
            }
        },
        methods: {
            selectColor(index) {
                this.selectedIndex = index
                this.change(this.colors[index].hex)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mobile-color-wrapper {
        position: absolute;
        top: 30px;
        right: 50px;
        > .selector {
            cursor: pointer;
            margin: 10px 0;
            width: 30px;
            height: 30px;
            border-radius: 100%;
            &:hover {
                transform: scale(1.2)
            }
            &.white {
                background-color: #FFFFFF;
                border: 1px solid #999;
            }
            &.black {
                background-color: #000000;
            }
            &.selected {
                border: 4px solid #2ecc71;
            }
        }
        
    }
</style>
