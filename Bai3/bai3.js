// Task 1: Function to calculate average score
function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

// Test data
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

// Task 2: Compare average scores to determine the winner (with bonus logic)
function determineWinner(dolphinScores, koalaScores, dataset) {
    const avgDolphins = calculateAverage(...dolphinScores);
    const avgKoalas = calculateAverage(...koalaScores);
    console.log(`Data Set ${dataset} -> Dolphins Avg: ${avgDolphins.toFixed(2)}, Koalas Avg: ${avgKoalas.toFixed(2)}`);

    let result;
    if (avgDolphins > avgKoalas && avgDolphins >= 100) {
        result = `Dolphins win with an average score of ${avgDolphins.toFixed(2)}!`;
    } else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
        result = `Koalas win with an average score of ${avgKoalas.toFixed(2)}!`;
    } else if (avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
        result = `It's a draw! Both teams have an average score of ${avgDolphins.toFixed(2)}.`;
    } else {
        result = `No team wins.`;
    }

    console.log(result);
    return result;
}

// Task 4: Display results in the webpage
function displayResults() {
    let output = '';
    output += `<p>${determineWinner(dolphinsScores1, koalasScores1, 1)}</p>`;
    output += `<p>${determineWinner(dolphinsScoresBonus1, koalasScoresBonus1, 2)}</p>`;
    output += `<p>${determineWinner(dolphinsScoresBonus2, koalasScoresBonus2, 3)}</p>`;
    
    document.getElementById('results').innerHTML = output;
}

// Call function to display the results
displayResults();
