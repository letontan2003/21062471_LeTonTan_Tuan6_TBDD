// Task 1: Store Mark's and John's mass and height in variables (Test data 1 and Test data 2)
const markData1 = { mass: 78, height: 1.69 };
const johnData1 = { mass: 92, height: 1.95 };
const markData2 = { mass: 95, height: 1.88 };
const johnData2 = { mass: 85, height: 1.76 };

// Task 2: Calculate both their BMIs using the formula
function calculateBMI(mass, height) {
    return mass / (height * height);
}

const markBMI1 = calculateBMI(markData1.mass, markData1.height);
const johnBMI1 = calculateBMI(johnData1.mass, johnData1.height);
const markBMI2 = calculateBMI(markData2.mass, markData2.height);
const johnBMI2 = calculateBMI(johnData2.mass, johnData2.height);

// Task 3: Create a Boolean variable 'markHigherBMI'
const markHigherBMI1 = markBMI1 > johnBMI1;
const markHigherBMI2 = markBMI2 > johnBMI2;

// Display the results for Data Set 1
document.getElementById('data1').innerHTML = `
    <p>Mark's BMI: ${markBMI1.toFixed(2)}, John's BMI: ${johnBMI1.toFixed(2)}</p>
    <p>Is Mark's BMI higher than John's? ${markHigherBMI1}</p>
`;

// Display the results for Data Set 2
document.getElementById('data2').innerHTML = `
    <p>Mark's BMI: ${markBMI2.toFixed(2)}, John's BMI: ${johnBMI2.toFixed(2)}</p>
    <p>Is Mark's BMI higher than John's? ${markHigherBMI2}</p>
`;
