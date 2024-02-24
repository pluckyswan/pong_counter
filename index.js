const dropbox = document.querySelector("#max")
const p1 = document.querySelector("#p1")
const p2 = document.querySelector("#p2")
const s1 = document.querySelector("#s1")
const s2 = document.querySelector("#s2")
const reset = document.querySelector("#reset")

let p1s = 0
let p2s = 0
let max = 5

dropbox.addEventListener("change", function() {
    max = parseInt(this.value)
    resetMe()
})

p1.addEventListener("click", function() {
    p1s++
    s1.innerText = p1s
    if (p1s === max) {
        s1.style.backgroundColor = "green"
        s2.style.backgroundColor = "red"
        p1.disabled = true
        p2.disabled = true
    }
})

p2.addEventListener("click", function() {
    p2s++
    s2.innerText = p2s
    if (p2s === max) {
        s2.style.backgroundColor = "green"
        s1.style.backgroundColor = "red"
        p1.disabled = true
        p2.disabled = true
    }
})

reset.addEventListener("click", resetMe)

function resetMe() {
    p2s = 0
    p1s = 0
    s1.innerText = 0
    s2.innerText = 0
    s2.style.backgroundColor = ""
    s1.style.backgroundColor = ""
    p1.disabled = false
    p2.disabled = false
}