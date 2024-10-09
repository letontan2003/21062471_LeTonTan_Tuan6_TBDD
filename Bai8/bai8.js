// Task 1: Create an array 'bills' containing all 10 test bill values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Task 2: Create empty arrays for 'tips' and 'totals'
const tips = [];
const totals = [];

// Reuse calcTip function from previous challenges
function calcTip(bill) {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
}

// Task 3: Use a for loop to calculate tips and totals for each bill
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

// Display results in the console
console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);

// Display results on the webpage
function displayResults() {
    let output = '';
    for (let i = 0; i < bills.length; i++) {
        output += `<p>Bill: $${bills[i]}, Tip: $${tips[i].toFixed(2)}, Total: $${totals[i].toFixed(2)}</p>`;
    }
    document.getElementById('results').innerHTML = output;
}

// Call function to display the results
displayResults();

// Bonus Task 4: Function to calculate the average of an array
function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];  // Add each element to sum
    }
    return sum / arr.length;  // Divide sum by the number of elements
}

// Calculate and display average of totals
const averageTotal = calcAverage(totals);
console.log(`Average total value: $${averageTotal.toFixed(2)}`);
