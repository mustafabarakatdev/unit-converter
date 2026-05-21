const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el") 

inputEl.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        convertBtn.click()
    }
})

convertBtn.addEventListener("click", function() {
    if(inputEl.value === "") {
        alert("Please enter a number!")
        return
    }
    let input = Number(inputEl.value)
    if(!isNaN(input)) {
        const len = length(input)
        const vol = volume(input)
        const mas = mass(input)

        lengthEl.textContent = `${input.toFixed(3)} meters = ${len.feet.toFixed(3)} feet | ${input.toFixed(3)} feet = ${len.meters.toFixed(3)} meters`
        volumeEl.textContent = `${input.toFixed(3)} liters = ${vol.gallons.toFixed(3)} gallons | ${input.toFixed(3)} gallons = ${vol.liters.toFixed(3)} liters`
        massEl.textContent = `${input.toFixed(3)} kilos = ${mas.pounds.toFixed(3)} pounds | ${input.toFixed(3)} pounds = ${mas.kilos.toFixed(3)} kilos`
    } else {
        alert("Please enter a valid number!")
    }
})

function length(number) {
    return {
        feet: number * 3.281,
        meters: number / 3.281
    }
}

function volume(number) {
    return {
        gallons: number * 0.264,
        liters: number / 0.264
    }
}

function mass(number) {
    return {
        pounds: number * 2.204,
        kilos: number / 2.204
    }
}