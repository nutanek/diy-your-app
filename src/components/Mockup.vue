<template>
    <div class="wrapper">
        <div class="row top justify-content-center">
            <div>
                <div class="io -camera"></div>
                <div class="io -speaker"></div>
            </div>
        </div>
        <div class="col screen">
            <div class="row background" v-bind:style="{backgroundImage: 'url(' + backgroundImageContent + ')'}"></div>
            <ui-header 
                :profileImage="info.profileImage"
                :displayname="info.displayname"
                :displaynameColor="info.displaynameColor">
            </ui-header>
            <ui-content 
                :appBackground="info.appBackgroundColor"
                :titleBackground="info.titleBackgroundColor"
                :appIcon="info.appIconColor">
            </ui-content>
        </div>
        <div class="row bottom justify-content-center">
            <div class="home-button"></div>
        </div>
    </div>
</template>

<script>
    import Header from './UiHeader.vue'
    import Content from './UiContent.vue'
    import { createImage } from './../libs/image'
    export default {
        props: ['info'],
        components: {
            'ui-header': Header,
            'ui-content': Content
        },
        data() {
            return {
                backgroundImageContent: 'https://www.w3schools.com/w3images/fjords.jpg'
            }
        },
        methods: {
            changeImage(propName, file) {
                let vm = this
                createImage(file).then(data => {
                    vm[propName] = data
                }, () => {
                    // do nothing
                })
            }
        },
        computed: {
            backgroundData() {
                return this.info.backgroundImage
            }
        },
        watch: {
            backgroundData(imageData) {
                this.changeImage('backgroundImageContent', imageData)
            }
        }
    }
</script>

<style lang="scss" scoped>
    $screen-height: 540px;
    .wrapper {
        width: 350px;
        padding-left: 10px;
        padding-right: 10px;
        border: 2px solid #AAAAAA;
        border-radius: 30px;
        &.-small {
            transform: scale(0.9);
        }
        > .top {
            margin-top: 30px;
            margin-bottom: 30px;
            .io {
                height: 12px;
                border: 2px solid #AAAAAA;
                float: left;
                &.-camera {
                    margin-right: 5px;
                    width: 12px;
                    border-radius: 100%;
                }
                &.-speaker {
                    width: 100px;
                    border-radius: 10px;
                }
            }
        }
        > .bottom {
            .home-button {
                margin-top: 20px;
                margin-bottom: 20px;
                width: 40px;
                height: 40px;
                border: 2px solid #AAAAAA;
                border-radius: 100%;
            }
        }
        > .screen {
            height: $screen-height;
            border: 2px solid #AAAAAA;
            overflow: hidden;
        }
    }
    .background {
        height: $screen-height;
        width: 100%;
        position: relative;
        overflow: hidden;
        background-size: cover;
        background-position: center; 
        filter: blur(5px);
        transform: scale(1.3);
    }
</style>
