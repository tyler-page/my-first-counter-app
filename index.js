console.log("hello from index.js")

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let saveBtn = document.getElementById('save-btn')
saveBtn.addEventListener('click', save);

let incrementBtn = document.getElementById("increment-btn")
incrementBtn.addEventListener('click', increment)

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
