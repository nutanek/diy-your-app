<template>
    <div class="wrapper -small">
        <div class="row top justify-content-center">
            <div>
                <div class="io -camera"></div>
                <div class="io -speaker"></div>
            </div>
        </div>
        <div class="col screen">
            
        </div>
        <div class="row bottom justify-content-center">
            <div class="home-button"></div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<style lang="scss">
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
            height: 540px;
            border: 2px solid #AAAAAA;
        }
    }
</style>
