let meter = 3.2808399; // feet
let liter = 0.264172052; // gallons
let kilogram = 2.20462262; // pounds
let num = 20;

const length_el = document.getElementById("length");
const volume_el = document.getElementById("volume");
const mass_el = document.getElementById("mass");

// METERS TO FEET
function metersToFeet(num) {
  let meters_to_feet = num * meter;
  let feet_to_meters = num / meter;
  length_el.textContent = `${num} meters = ${meters_to_feet.toFixed(
    3
  )} feet | ${num} feet = ${feet_to_meters.toFixed(3)} meters`;
}

// Liter To Gallons
function literToGallons(num) {
  let liters_to_gallons = num * liter;
  let gallons_to_liters = num / liter;
  volume_el.textContent = `${num} liters = ${liters_to_gallons.toFixed(
    3
  )} gallons | ${num} gallons = ${gallons_to_liters.toFixed(3)} liters`;
}

// Kilogram To Pounds
function kilogramToPounds(num) {
  let kilogram_to_pounds = num * kilogram;
  let pounds_to_kilogram = num / kilogram;
  mass_el.textContent = `${num} kilos = ${kilogram_to_pounds.toFixed(
    3
  )} pounds | ${num} pounds = ${pounds_to_kilogram.toFixed(3)} kilos`;
}

metersToFeet(num);
literToGallons(num);
kilogramToPounds(num);
