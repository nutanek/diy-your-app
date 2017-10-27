<template>
    <div class="row wrapper">
        <div class="col text-right">
            <button type="button" class="btn btn-success" @click="saveToImage">
                <i class="fa fa-download" aria-hidden="true"></i> Save to Image
            </button>
        </div>
    </div>
</template>

<script>
    import SaveImage from 'dom-to-image'
    import FileSaver from 'file-saver'
    export default {
        methods: {
            saveToImage() {
                let node = document.getElementById('mockup')
                let currentTime = new Date
                SaveImage.toBlob(node).then(function (blob) {
                    FileSaver.saveAs(blob, 'DIY-' + currentTime.getTime() + '.png')
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        margin-top: 50px;
        margin-bottom: 20px;
    }
    button:hover {
        cursor: pointer;
    }
    i {
        margin-right: 5px;
    }
</style>
