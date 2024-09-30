// script.js

// Get DOM elements
const bmiForm = document.getElementById('bmi-form');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const resultDiv = document.getElementById('result');
const bmiValueSpan = document.getElementById('bmi-value');
const bmiCategoryP = document.getElementById('bmi-category');
const messageDiv = document.getElementById('message');

// Function to calculate BMI
function calculateBMI(weight, height) {
  // Convert height from cm to meters
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  return bmi.toFixed(1);
}

// Function to determine BMI category
function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return 'Underweight 🟡';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return 'Normal weight 🟢';
  } else if (bmi >= 25 && bmi < 29.9) {
    return 'Overweight 🟠';
  } else {
    return 'Obesity 🔴';
  }
}

// Event listener for form submission
bmiForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get input values
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);
  
  // Validate inputs
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    messageDiv.classList.remove('d-none');
    messageDiv.textContent = 'Please enter valid positive numbers for weight and height.';
    resultDiv.classList.add('d-none');
    return;
  }
  
  // Hide any previous messages
  messageDiv.classList.add('d-none');
  
  // Calculate BMI
  const bmi = calculateBMI(weight, height);
  const category = getBMICategory(bmi);
  
  // Display the result
  bmiValueSpan.textContent = bmi;
  bmiCategoryP.textContent = `Category: ${category}`;
  resultDiv.classList.remove('d-none');
});
