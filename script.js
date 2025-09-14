const form = document.getElementById('bmi-form');
const heightInput = document.getElementById('height-metric');
const weightInput = document.getElementById('weight-input');
const resultDiv = document.getElementById('result');
const bmiValue = document.getElementById('bmi-value');
const bmiCategory = document.getElementById('bmi-category');
const errorMsg = document.getElementById('error-message');
const genderError = document.getElementById('gender-error');

// handle submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const gender = document.querySelector('input[name="gender"]:checked');
  let height = parseFloat(heightInput.value) / 100;
  let weight = parseFloat(weightInput.value);

  let valid = true;

  if (!gender) {
    genderError.classList.remove('hidden');
    valid = false;
  } else {
    genderError.classList.add('hidden');
  }
  
  if (!height || !weight || height <= 0 || weight <= 0) {
    errorMsg.classList.remove('hidden');
    valid = false;
  } else {
    errorMsg.classList.add('hidden');
  }
  
  if (!valid) 
    return;

  let bmi = weight / (height * height);

  errorMsg.classList.add('hidden');
  bmi = bmi.toFixed(1);
  bmiValue.textContent = bmi;

  let category, categoryClass;
  if (bmi < 18.5) {
    category = 'Kurus';
    categoryClass = 'category-underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    category = 'Normal';
    categoryClass = 'category-normal';
  } else if (bmi >= 25 && bmi < 30) {
    category = 'Gemuk';
    categoryClass = 'category-overweight';
  } else {
    category = 'Obesitas';
    categoryClass = 'category-obese';
  }

  bmiCategory.textContent = category;
  bmiCategory.className = 'bmi-category ' + categoryClass;
  resultDiv.classList.remove('hidden');
});
