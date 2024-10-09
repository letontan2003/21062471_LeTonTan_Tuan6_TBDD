// Task 1: Function to calculate tip based on bill value using the rules provided
function calcTip(bill) {
    // Tip is 15% for bills between 50 and 300, otherwise it's 20%
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
}

// Test the function with a bill value of 100
console.log(`Tip for a bill of 100: ${calcTip(100)}`);

// Task 2: Create an array 'bills' containing the test data
const bills = [125, 555, 44];

// Task 3: Create an array 'tips' containing the tip value for each bill
const tips = bills.map(calcTip);

// Task 4 (Bonus): Create an array 'total' containing the total values (bill + tip)
const totals = bills.map((bill, index) => bill + tips[index]);

// Display the results in the console
console.log('Bills: ', bills);
console.log('Tips: ', tips);
console.log('Totals: ', totals);

// Display the results on the webpage
function displayResults() {
    let output = '';
    for (let i = 0; i < bills.length; i++) {
        output += `<p>Bill: $${bills[i]}, Tip: $${tips[i].toFixed(2)}, Total: $${totals[i].toFixed(2)}</p>`;
    }
    document.getElementById('results').innerHTML = output;
}

// Call the function to display the results
displayResults();
