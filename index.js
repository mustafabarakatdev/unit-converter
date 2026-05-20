const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el") 

let meters = 0
let feet = 0
let liters = 0 
let gallons = 0
let kilos = 0 
let pounds = 0

convertBtn.addEventListener("click", function() {
    console.log('clicked')
    let input = Number(inputEl.value).toFixed(3)
    if(input == "NaN") {
        return;
    } else {
        length(input)
        volume(input)
        mass(input)
        let lengthtext = `${input} meters = ${feet.toFixed(3)} feet | ${input} feet = ${meters.toFixed(3)} meters`
        let volumetext = `${input} liters = ${gallons.toFixed(3)} gallons | ${input} gallons = ${liters.toFixed(3)} liters`
        let masstext = `${input} kilos = ${pounds.toFixed(3)} pounds | ${input} pounds = ${kilos.toFixed(3)} kilos`

        lengthEl.textContent = lengthtext
        volumeEl.textContent = volumetext
        massEl.textContent = masstext
    }
})



function length(number) {
    feet = number * 3.281
    meters = number / 3.281
}

function volume(number) {
    gallons = number * 0.264
    liters = number / 0.264
}

function mass(number) {
    pounds = number * 2.204
    kilos = number / 2.204
}