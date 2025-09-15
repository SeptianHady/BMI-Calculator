const tinggi = parseFloat(document.getElementById('tinggi').value) / 100;
const berat = parseFloat(document.getElementById('berat').value);
const gender = document.querySelector('input[name="gender"]:checked');
const errorInput = document.getElementById('error-input');
const errorGender = document.getElementById('error-gender');
const resultDiv = document.getElementById('result');
const bmiValue = document.getElementById('bmi-value');
const bmiCategory = document.getElementById('bmi-category');

  let valid = true;

  if (!gender) {
    errorGender.classList.remove('hidden');
    valid = false;
  } else {
    errorGender.classList.add('hidden');
  }
  
  if (!tinggi || !berat || tinggi <= 0 || berat <= 0) {
    errorInput.classList.remove('hidden');
    valid = false;
  } else {
    errorMsg.classList.add('hidden');
  }
  
  if (!valid) {
    resultDiv.classList.add('hidden');
    return;
  }

  let bmi = berat / (tinggi * tinggi);
  bmi =  bmi.toFixed(1);

  let category, categoryClass = "";
  if (bmi < 18.5) {
    category = "Kurus";
    categoryClass = "category-kurus";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal";
    categoryClass = "category-normal";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Gemuk";
    categoryClass = "category-gemuk";
  } else {
    category = "Obesitas";
    categoryClass = "category-obesitas";
  }

  bmiCategory.textContent = bmi;
  bmiCategory.textContent = kategori;
  bmiCategory.className = "bmi-category " + categoryClass;
  resultDiv.classList.remove('hidden');
