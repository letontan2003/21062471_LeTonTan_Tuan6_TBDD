// Task 1: Create a function 'printForecast' that takes an array of temperatures
function printForecast(arr) {
    let forecastStr = '... ';  // Start the string with '...'
    
    // Loop through the array to construct the forecast string
    for (let i = 0; i < arr.length; i++) {
        forecastStr += `${arr[i]}ºC in ${i + 1} days ... `;
    }

    // Log the result to the console
    console.log(forecastStr);
    return forecastStr;
}

// Test data
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// Call the function with both test datasets and display the results
function displayResults() {
    let output = '';
    output += `<p>${printForecast(data1)}</p>`;
    output += `<p>${printForecast(data2)}</p>`;
    document.getElementById('results').innerHTML = output;
}

// Call the function to display the results
displayResults();
