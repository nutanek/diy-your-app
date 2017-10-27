<template>
    <div id="app" class="container">
        <div class="row diy-title">
            <div class="col text-center">
                <h1>DIY You App</h1>
            </div>
        </div>
        <div class="row diy-editor">
            <div class="col-md-5">
                <app-mockup :info="info"></app-mockup>
            </div>
            <div class="col-md-7">
                <app-form :info="info" :edit="editInfo"></app-form>
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
        data() {
            return {
                info: {
                    displayname: 'NutAnek',
                    displaynameColor: '#FFFFFF',
                    appBackgroundColor: '#FFFFFF',
                    titleBackgroundColor: "#E74C3C",
                    appIconColor: "#000000",
                    profileImage: null,
                    backgroundImage: null            
                } 
            }
        },
        methods: {
            editInfo(propName, value) {
                this.info[propName] = value
            }
        }
    }
</script>

<style lang="scss">
    .diy-title {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .diy-editor {
        margin-top: 50px;
        margin-bottom: 50px;
    }
</style>
