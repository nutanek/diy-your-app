<template>
    <div id="app" class="container">
        <div class="row">
            <div class="col text-center">
                <h1>DIY You App</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-5">
                <app-mockup></app-mockup>
            </div>
            <div class="col-md-7">
                <app-form></app-form>
            </div>
        </div>
    </div>
</template>

<script>
    import Mockup from './components/Mockup.vue'
    import Form from './components/Form.vue'
    export default {
        name: 'app',
        components: {
            'app-mockup': Mockup,
            'app-form': Form
        },
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style lang="scss">
    h1 {
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>
