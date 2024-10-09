// Task 1: Arrow function to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Test Data
const dolphinsScores1 = [44, 23, 71];
const koalasScores1 = [65, 54, 49];

const dolphinsScores2 = [85, 54, 41];
const koalasScores2 = [23, 34, 27];

// Task 2: Calculate averages for both teams using the calcAverage function
const avgDolphins1 = calcAverage(...dolphinsScores1);
const avgKoalas1 = calcAverage(...koalasScores1);

const avgDolphins2 = calcAverage(...dolphinsScores2);
const avgKoalas2 = calcAverage(...koalasScores2);

// Task 3: Function to check for the winner based on the rule
function checkWinner(avgDolphins, avgKoalas, dataset) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    } else {
        console.log('No team wins!');
        return 'No team wins!';
    }
}

// Task 4: Determine and display the winners for both datasets
function displayResults() {
    let output = '';
    output += `<p>Data Set 1: ${checkWinner(avgDolphins1, avgKoalas1, 1)}</p>`;
    output += `<p>Data Set 2: ${checkWinner(avgDolphins2, avgKoalas2, 2)}</p>`;
    
    document.getElementById('results').innerHTML = output;
}

// Call function to display the results
displayResults();
