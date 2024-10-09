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

// Task 3: Determine who has the higher BMI and print a nice output

function printBMIComparison(markBMI, johnBMI, dataset) {
    let result;
    if (markBMI > johnBMI) {
        result = `Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})!`;
    } else if (johnBMI > markBMI) {
        result = `John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's (${markBMI.toFixed(2)})!`;
    } else {
        result = `Mark and John have the same BMI (${markBMI.toFixed(2)})!`;
    }

    console.log(`Data Set ${dataset}: ${result}`);
    return result;
}

// Output the results for Data Set 1
document.getElementById('data1').innerHTML = printBMIComparison(markBMI1, johnBMI1, 1);

// Output the results for Data Set 2
document.getElementById('data2').innerHTML = printBMIComparison(markBMI2, johnBMI2, 2);
