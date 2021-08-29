"use strict"

const COEFFICIENTS = {
    min: 1.2,
    low: 1.375,
    medium: 1.55,
    high: 1.725,
    max: 1.9,
  };
  
const COEFFICIENTS_FORMULA = {
  forWeight: 10,
  forHeight: 6.25,
  forAge: 5,
  forMale: 5,
  forFemale: 161,
  }
  
let parameters = {}
  
const form = document.querySelector('.form');
const inputGroups = form.querySelectorAll('.inputs-group input');
const buttonResult = form.querySelector('.form__submit-button');
const buttonReset = form.querySelector('.form__reset-button');

const counterResult = document.querySelector('.counter__result');

inputGroups.forEach((input) => {
  input.addEventListener('input', () => {
    checkInputHaveValue() ? buttonReset.disabled = false : buttonReset.disabled = true;

    checkAllInputsHaveValue() ? buttonResult.disabled = false : buttonResult.disabled = true;
  })
})

function checkInputHaveValue() {
  let checkInputs = [];

  inputGroups.forEach((input) => {
    if (input.value !== '') {
      checkInputs.push(input.value);
    }
  })

  return checkInputs.length >= 1 ? true : false;
}

function checkAllInputsHaveValue() {
  let allCheckInputs = [];

  inputGroups.forEach((input) => {
    if (input.value !== '') {
      allCheckInputs.push(input.value);
    }
  })

  return allCheckInputs.length === 3 ? true : false;
}

function getParameters() {
  const gender = document.querySelector('.switcher input:checked').value;
  const age = form.querySelector('#age').value;
  const height = form.querySelector('#height').value;
  const weight = form.querySelector('#weight').value;
  const heading = document.querySelector('.radios-group input:checked').value;

  return parameters = {
    gender,
    age,
    height,
    weight,
    heading,
  }
}