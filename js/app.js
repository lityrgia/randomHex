const button = document.querySelector(".build")

function rgbToHex(r, g, b) {
    return r.toString(16) + g.toString(16) + b.toString(16)
}

function randomizeHex() {
    let randoms = []

    for (let i = 0; i < 6; i++) {
        randoms.push(Math.round(Math.random() * 255))
    }

    document.body.style.background = `linear-gradient(to right, rgb(${randoms[0]}, ${randoms[1]}, ${randoms[2]}), rgb(${randoms[3]}, ${randoms[4]}, ${randoms[5]}))`

    button.innerHTML = "#" + rgbToHex(randoms[0], randoms[1], randoms[2]) + ", " + "#" + rgbToHex(randoms[0], randoms[1], randoms[2])
}

randomizeHex()