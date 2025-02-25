// Enable Next button based on form validation
const age = document.getElementById('age'); // Age input field
const gender = document.getElementById('gender'); // Gender dropdown field
const nextButton1 = document.getElementById('next-1'); // Next button for page 1
const nextButton2 = document.getElementById('next-2'); // Next button for page 2
const backButton1 = document.getElementById('back-1'); // Back button for page 1
const backButton2 = document.getElementById('back-2'); // Back button for page 2
const submitButton = document.getElementById('submit-button'); // Submit button for result

// Form page navigation
const page1 = document.getElementById('page-1'); // Page 1 container
const page2 = document.getElementById('page-2'); // Page 2 container
const page3 = document.getElementById('page-3'); // Page 3 container

// Function to validate Page 1 and enable Next button if conditions are met
function validatePage1() {
    // Check if age and gender inputs are filled
    if (age.value && gender.value) {
        nextButton1.disabled = false; // Enable Next button
    } else {
        nextButton1.disabled = true; // Disable Next button
    }
}

// Add tooltip functionality
document.querySelectorAll('.tooltip').forEach(function(tooltipElement) {
    // Get the data-tooltip attribute value (tooltip content)
    const tooltipText = tooltipElement.getAttribute('data-tooltip');
    
    // Create a tooltip text element inside the span
    const tooltipTextElement = document.createElement('span');
    tooltipTextElement.classList.add('tooltip-text');
    
    // Set the HTML content of the tooltip (allowing HTML to render)
    tooltipTextElement.innerHTML = tooltipText;

    // Append the tooltip text element to the tooltip span
    tooltipElement.appendChild(tooltipTextElement);
});

// Function to validate page 2 and enable Next button if conditions are met
function validatePage2() {
    // Get the values from page 2 fields
    const cp = document.getElementById('cp'); // Chest Pain Type
    const trestbps = document.getElementById('trestbps'); // Resting Blood Pressure
    const chol = document.getElementById('chol'); // Cholesterol Level
    const fbs = document.getElementById('fbs'); // Fasting Blood Sugar
    const restecg = document.getElementById('restecg'); // Resting Electrocardiogram Results

    // Check if all fields inputs are filled
    if (cp.value && trestbps.value && chol.value && fbs.value && restecg.value) {
        nextButton2.disabled = false; // Enable Next button
    } else {
        nextButton2.disabled = true; // Disable Next button
    }
}

// Function to validate page 3 and enable Submit button if conditions are met
function validatePage3() {
    // Get the values from page 3 fields
    const thalachh = document.getElementById('thalachh'); // Maximum Heart Rate
    const exang = document.getElementById('exang'); // Exercise-Induced Angina
    const oldpeak = document.getElementById('oldpeak'); // ST Depression
    const slope = document.getElementById('slope'); // Slope of the Peak Exercise ST Segment
    const ca = document.getElementById('ca'); // Number of Major Vessels
    const thal = document.getElementById('thal'); // Thalassemia

    // Check if all fields inputs are filled
    if (thalachh.value && exang.value && oldpeak.value && slope.value && ca.value && thal.value) {
        submitButton.disabled = false; // Enable Submit button
    } else {
        submitButton.disabled = true; // Disable Submit button
    }
}

// Function to enable back buttons after navigation
function validatePage4() {
    backButton1.disabled = false; // Enable Back button for page 1
    backButton2.disabled = false; // Enable Back button for page 2
}

// Add event listeners to validate page
age.addEventListener('input', validatePage1); // age input
gender.addEventListener('change', validatePage1); //gender change

document.getElementById('cp').addEventListener('change', validatePage2); // Chest Pain Type
document.getElementById('trestbps').addEventListener('input', validatePage2); // Resting Blood Pressure
document.getElementById('chol').addEventListener('input', validatePage2); // Cholesterol Level
document.getElementById('fbs').addEventListener('change', validatePage2); // Fasting Blood Sugar
document.getElementById('restecg').addEventListener('change', validatePage2); // Resting Electrocardiogram Results

document.getElementById('thalachh').addEventListener('input', validatePage3); // Maximum Heart Rate
document.getElementById('exang').addEventListener('change', validatePage3); // Exercise-Induced Angina
document.getElementById('oldpeak').addEventListener('input', validatePage3); // ST Depression
document.getElementById('slope').addEventListener('change', validatePage3); // Slope of the Peak Exercise ST Segment
document.getElementById('ca').addEventListener('input', validatePage3); // Number of Major Vessels
document.getElementById('thal').addEventListener('change', validatePage3); // Thalassemia

// Handle page navigation: Next and Back buttons
nextButton1.addEventListener('click', () => {
    page1.classList.remove('active'); // Hide page 1
    page2.classList.add('active'); // Show page 2
});

nextButton2.addEventListener('click', () => {
    page2.classList.remove('active'); // Hide page 2
    page3.classList.add('active'); // Show page 3
});

backButton1.addEventListener('click', () => {
    page2.classList.remove('active'); // Hide page 2
    page1.classList.add('active'); // Show page 1
});

backButton2.addEventListener('click', () => {
    page3.classList.remove('active'); // Hide page 3
    page2.classList.add('active'); // Show page 3
});

// Disable buttons initially
validatePage1();
validatePage2();
validatePage3();
validatePage4(); // Enable back buttons on page load