<template>
    <div class="row header justify-content-center">
        <div class="col-12">
            <div class="profile" v-bind:style="{backgroundImage: 'url(' + profileImageContent + ')'}"></div>
        </div>
        <div class="col-12 text-center">
            <div class="displayname" v-bind:style="{color: displaynameColor}">
                {{displayname}}
            </div>
        </div>
    </div>
</template>

<script>
    import { createImage } from './../libs/image'
    export default {
        props: [
            'profileImage', 
            'displayname', 
            'displaynameColor'
        ],
        data() {
            return {
                profileImageContent: require('./../static/images/profile.jpg')
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
        watch: {
            profileImage(imageData) {
                this.changeImage('profileImageContent', imageData)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        position: absolute;
        top: 0;
        width: 100%;
        height: 240px;
        .profile {
            margin: 30px auto 0 auto;
            width: 140px;
            height: 140px;
            border: 4px solid #FFFFFF;
            border-radius: 100%;
            background-size: cover;
            background-position: center;
        }
        .displayname {
            font-weight: bold;
            font-size: 1.5em;
            color: #FFFFFF;
        }
    }
</style>
