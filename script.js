document.getElementById('bmi-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get input values
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

  // Validate inputs
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert('Please enter valid weight and height values!');
    return;
  }

  // Calculate BMI
  const bmi = (weight / (height * height)).toFixed(2);

  // Determine BMI category
  let category = '';
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = 'Normal weight';
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = 'Overweight';
  } else {
    category = 'Obesity';
  }

  // Display results
  document.getElementById('bmi-result').textContent = bmi;
  document.getElementById('bmi-category').textContent = category;
  document.getElementById('bmi-category').className = category.includes('Obesity') ? 'text-danger' : (category.includes('Normal') ? 'text-success' : 'text-warning');
});
