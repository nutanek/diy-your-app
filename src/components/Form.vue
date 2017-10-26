<template>
    <form>
        <div class="form-group">
            <label>Display Name</label>
            <input type="text" class="form-control" v-model="displayname">
        </div>

        <div class="form-group">
            <label>Profile Image</label>
            <input type="file" class="form-control-file">
        </div>

        <div class="form-group">
            <label>Background Image</label>
            <input type="file" class="form-control-file">
        </div>

        <div class="form-group">
            <label>Apps Background</label>
            <div class="input-group">
                <input type="text" class="form-control" v-model="appBackgroundColor">
                <color-picker :initColor="appBackgroundColor" :pickColor="changeAppBgColor"></color-picker>
            </div>
        </div>

        <div class="form-group">
            <label>Apps Icon</label>
            <div class="input-group">
                <input type="text" class="form-control" v-model="appIconColor">
                <color-picker :initColor="appIconColor" :pickColor="changeAppIconColor"></color-picker>
            </div>
        </div>

        <div class="form-group">
            <label>Title Background</label>
            <div class="input-group">
                <input type="text" class="form-control" v-model="titleBackgroundColor">
                <color-picker :initColor="titleBackgroundColor" :pickColor="changeTitleBgColor"></color-picker>
            </div>
        </div>
    </form>
</template>

<script>
    import ColorPicker from './ColorPicker.vue'
    export default {
        props: ['info', 'edit'],
        components: {
            'color-picker': ColorPicker
        },
        data() {
            return {
                displayname: this.info.displayname,
                appBackgroundColor: this.info.appBackgroundColor,
                titleBackgroundColor: this.info.titleBackgroundColor,
                appIconColor: this.info.appIconColor
            }
        },
        methods: {
            changeAppBgColor(color) {
                this.appBackgroundColor = color
            },
            changeTitleBgColor(color) {
                this.titleBackgroundColor = color
            },
            changeAppIconColor(color) {
                this.appIconColor = color
            }
        },
        watch: {
            displayname(name) {
                this.edit('displayname', name)
            },
            appBackgroundColor(color) {
                this.edit('appBackgroundColor', color)
            },
            titleBackgroundColor(color) {
                this.edit('titleBackgroundColor', color)
            },
            appIconColor(color) {
                this.edit('appIconColor', color)
            }
        }
    }
</script>

<style lang="scss" scoped>
  
</style>
