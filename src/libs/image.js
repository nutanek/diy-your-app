import Vue from 'vue'

export function createImage(file) {
    return new Promise((resolve, reject) => {
        if (file) {
            let image = new Image()
            let reader = new FileReader()
            reader.onload = (e) => {
                resolve(e.target.result)
            };
            reader.readAsDataURL(file)
        } else {
            reject()
        }
    })
}