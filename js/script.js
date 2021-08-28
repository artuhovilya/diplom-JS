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