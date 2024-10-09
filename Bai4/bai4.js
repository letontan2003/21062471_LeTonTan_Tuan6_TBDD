// Task 1: Function to calculate tip based on bill value using a ternary operator
function calculateTip(bill) {
    // If the bill is between 50 and 300, tip is 15%, otherwise it's 20%
    const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
    return tip;
}

// Task 2: Print the result to the console and return the string to display on the page
function printBillInfo(bill) {
    const tip = calculateTip(bill);
    const total = bill + tip;
    const message = `The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}.`;
    
    // Log the result to the console
    console.log(message);
    
    // Return the message to display on the webpage
    return message;
}

// Test data: bill values 275, 40, and 430
const bills = [275, 40, 430];

// Display results for each bill
function displayResults() {
    let output = '';
    bills.forEach(bill => {
        output += `<p>${printBillInfo(bill)}</p>`;
    });

    document.getElementById('results').innerHTML = output;
}

// Call function to display the results
displayResults();
