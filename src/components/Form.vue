<template>
    <form>
        <div class="form-group">
            <label for="displayname">Display Name</label>
            <input type="text" class="form-control" v-model="displayname">
        </div>

        <div class="form-group">
            <label for="profile">Profile Image</label>
            <input type="file" class="form-control-file">
        </div>

        <color-picker :pickColor="changeAppBgColor"></color-picker>
        <div class="form-group">
            <label for="displayname">Display Name</label>
            <input type="text" class="form-control" v-model="appBackgroundColor">
        </div>

    
        <div class="form-group">
            <label for="background">Background Image</label>
            <input type="file" class="form-control-file">
        </div>
    </form>
</template>

<script>
    import ColorPicker from './ColorPicker.vue'
    export default {
        props: ['edit'],
        components: {
            'color-picker': ColorPicker
        },
        data() {
            return {
                displayname: 'Nutkung',
                appBackgroundColor: ''
            }
        },
        methods: {
            changeAppBgColor(color) {
                this.appBackgroundColor = color
                this.edit('appBackgroundColor', color)
            }
        },
        watch: {
            displayname(name) {
                this.edit('displayname', name)
            }
        }
    }
</script>

<style lang="scss" scoped>
  
</style>
