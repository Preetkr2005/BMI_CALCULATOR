const age = document.querySelector("#ageInput");
const Height = document.querySelector("#heightInput");
const Weight = document.querySelector("#weightInput");
const btnM = document.querySelector("#Male");
const btnF = document.querySelector("#Female");
const ResultBtn = document.querySelector("#myresult");
const bmi = document.querySelector("#BMIResult");
const condition = document.querySelector("#Condition");

let selectedgender = null;

btnM.addEventListener('click', () => {
    selectedgender = 'Male';
});

btnF.addEventListener('click', () => {
    selectedgender = 'Female';
});

ResultBtn.addEventListener('click', () => {
    const heightValue = parseFloat(Height.value) / 100;
    const weightValue = parseFloat(Weight.value);

    if (heightValue && weightValue && selectedgender) {
        let BMI = weightValue / (heightValue * heightValue);
        bmi.textContent = `BMI: ${BMI.toFixed(2)}`;

        if (BMI < 18.5) {
            condition.textContent = "Underweight";
        } else if (BMI >= 18.5 && BMI <= 24.9) {
            condition.textContent = "Normal Weight";
        } else if (BMI >= 25.0 && BMI <= 29.9) {
            condition.textContent = "Overweight";
        } else {
            condition.textContent = "Obese";
        }
    } else {
        bmi.textContent = "Please enter valid height, weight and select gender.";
        condition.textContent = "";
    }
});
