'use strict';

const populations = document.querySelectorAll('.population');

const totalPopulation = [...populations].reduce((acc, population) => {
  return acc + Number(population.textContent.split(',').join(''));
}, 0);
const averagePopulation = totalPopulation / populations.length;

document.querySelector('.total-population').textContent
  = totalPopulation.toLocaleString(`en-US`);

document.querySelector('.average-population').textContent
  = averagePopulation.toLocaleString(`en-US`);
