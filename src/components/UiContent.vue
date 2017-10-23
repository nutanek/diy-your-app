<template>
    <div class="row content">
        <div class="col wrapper">
            <div class="row">
                <p class="title">Available Apps:</p>
            </div>
            <div class="row">
                <div class="col-4" v-for="(item, index) in functions">
                    <ui-function 
                        :icon="item.icon" 
                        :title="item.title">
                    </ui-function>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Function from './UiFunction.vue'
    export default {
        components: {
            'ui-function': Function,
        },
        data () {
            return {
                functions: [
                    { icon: 'fa-newspaper-o', title: 'news' },
                    { icon: 'fa-comments-o', title: 'chat' },
                    { icon: 'fa-film', title: 'movies' },
                    { icon: 'fa-music', title: 'songs' },
                    { icon: 'fa-newspaper-o', title: 'news' },
                    { icon: 'fa-comments-o', title: 'chat' },
                    { icon: 'fa-film', title: 'movies' },
                    { icon: 'fa-music', title: 'songs' },
                    { icon: 'fa-newspaper-o', title: 'news' },
                    { icon: 'fa-comments-o', title: 'chat' },
                    { icon: 'fa-film', title: 'movies' },
                    { icon: 'fa-music', title: 'songs' },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .content {
        position: absolute;
        top: 240px;
        width: 100%;
        > .wrapper {
            margin: 0px 15px;
            height: 280px;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.6);
            overflow-x: hidden;            
            overflow-y: hidden;
            .title {
                margin-top: 15px;
                margin-left: 15px;
                padding: 2px 10px;
                border-radius: 20px;
                background: #e74c3c;
                color: #FFFFFF;
                font-size: 0.8em;
            }
        }
    }
</style>
