// Metric Imperial unit converter

const mainHeading = document.getElementById('main-heading')
mainHeading.textContent = "Metric/Imperial Unit Converter"
const getResultBtn = document.getElementById('get-result-btn')
getResultBtn.textContent = "Convert"
const inputElement = document.getElementById('input-element')
inputElement.placeholder = "Input"
//const results = document.querySelectorAll('.results-heading')
/* 2. Call the forEach method on the NodeList
//results.forEach(element => {
  // Example DOM manipulation: change the inner text of each box
  element.
});
//results.textContent = "lenght (Meter/Feet)"*/
const length = document.querySelector('.length-par')
length.textContent = "Lenght (Meter/Feet)"
const lengthHeading = document.querySelector('.length')
lengthHeading.innerHTML = "Length (Meter/Feet)"
length.innerHTML = `1 meters = 3.28 feet | 1 feet = 0.30 meters`

const volume = document.querySelector('.volume-par')
volume.textContent = "Volume (Liters/Gallons)"
const volumehHeading = document.querySelector('.volume')
volumehHeading.innerHTML = "Volume (Liters/Gallons)"
volume.innerHTML = "1 liters = 0.22 gallons | 1 gallons = 4.55 liters"

const mass = document.querySelector('.mass-par')
mass.textContent = "Mass (Kilograms/Pounds)"
const massHeading = document.querySelector('.mass')
massHeading.innerHTML = "Mass (Kilograms/Pounds)"
mass.innerHTML = "1 kilogram = 2.20 pounds | 1 pounds = 0.45 kilogram"
const metersToFeet = 3.281
const feetToMeters = 0.3048
const literToGallons = 0.219969
const gallonsToLiter = 4.54609
const kiloToPound = 2.20462
const poundToKilo = 0.453592

//Functionality

getResultBtn.addEventListener('click', function(){
    if (inputElement.value === "") {
        inputElement.placeholder = "Invalid input"
    }else{
        length.textContent = `${inputElement.value} meters = ${(inputElement.value * metersToFeet).toFixed(2)} feet | ${inputElement.value} feet = ${(inputElement.value * feetToMeters).toFixed(2)} meters`

        volume.textContent = `${inputElement.value} liters = ${(inputElement.value * literToGallons).toFixed(2)} gallons | ${inputElement.value} gallons = ${(inputElement.value * gallonsToLiter).toFixed(2)} liters`

        mass.textContent = `${inputElement.value} kilogram = ${(inputElement.value * kiloToPound).toFixed(2)} pounds | ${inputElement.value} pounds = ${(inputElement.value * poundToKilo).toFixed(2)} kilogram`
    }
})