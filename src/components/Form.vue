<template>
    <form>
        <div class="form-group">
            <label>Display Name</label>
            <input type="text" class="form-control" v-model="displayname">
        </div>

        <div class="form-group">
            <label>Display Name Color</label>
            <div class="input-group">
                <input type="text" class="form-control" v-model="displaynameColor">
                <color-picker :initColor="displaynameColor" :pickColor="changeDisplaynameColor"></color-picker>
            </div>
        </div>

        <div class="form-group">
            <label>Profile Image</label>
            <input type="file" class="form-control-file" @change="changeProfileImage">
        </div>

        <div class="form-group">
            <label>Background Image</label>
            <input type="file" class="form-control-file" @change="changeBackgroundImage">
        </div>

        <div class="form-group">
            <label>Apps Background Color</label>
            <div class="input-group">
                <input type="text" class="form-control" v-model="appBackgroundColor">
                <color-picker :initColor="appBackgroundColor" :pickColor="changeAppBgColor"></color-picker>
            </div>
        </div>

        <div class="form-group">
            <label>Apps Icon Color</label>
            <div class="input-group">
                <input type="text" class="form-control" v-model="appIconColor">
                <color-picker :initColor="appIconColor" :pickColor="changeAppIconColor"></color-picker>
            </div>
        </div>

        <div class="form-group">
            <label>Title Background Color</label>
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
                displaynameColor: this.info.displaynameColor,
                appBackgroundColor: this.info.appBackgroundColor,
                titleBackgroundColor: this.info.titleBackgroundColor,
                appIconColor: this.info.appIconColor
            }
        },
        methods: {
            changeDisplaynameColor(color) {
                this.displaynameColor = color
            },
            changeAppBgColor(color) {
                this.appBackgroundColor = color
            },
            changeTitleBgColor(color) {
                this.titleBackgroundColor = color
            },
            changeAppIconColor(color) {
                this.appIconColor = color
            },
            changeProfileImage(e) {
                let imageData = this.getImage(e)
                this.edit('profileImage', imageData)
            },
            changeBackgroundImage(e) {
                let imageData = this.getImage(e)
                this.edit('backgroundImage', imageData)
            },
            getImage(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length) {
                    return;
                }
                return files[0]
            }
        },
        watch: {
            displayname(name) {
                this.edit('displayname', name)
            },
            displaynameColor(color) {
                this.edit('displaynameColor', color)
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
    label {
        font-weight: bold;
    }
</style>
