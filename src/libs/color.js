export function invertColor(hex) {
    let r = parseInt("0x" + hex.substr(1, 2))
    let g = parseInt("0x" + hex.substr(3, 2))
    let b = parseInt("0x" + hex.substr(5, 2))
    let textColor = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return textColor >= 128 ? "#000000" : "#FFFFFF"
}

export function hexToRGBA(hex, alpha) {
    let r = parseInt("0x" + hex.substr(1, 2))
    let g = parseInt("0x" + hex.substr(3, 2))
    let b = parseInt("0x" + hex.substr(5, 2))
    return "rgba(" + [r, g, b, alpha].join() + ")"
}