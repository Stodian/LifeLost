document.getElementById('generateBtn').addEventListener('click', function() {
    const age = parseInt(document.getElementById('ageInput').value);

    // Debugging: Check if age is correctly retrieved
    console.log('Age:', age);

    if (isNaN(age) || age < 0 || age > 90) {
        alert('Please enter a valid age between 0 and 90.');
        return;
    }

    const totalMonths = 90 * 12; // Total months from birth to 90 years
    const livedMonths = age * 12;

    // Debugging: Log calculated values
    console.log('Total Months:', totalMonths);
    console.log('Lived Months:', livedMonths);

    const visualization = document.getElementById('visualization');
    visualization.innerHTML = '';

    // Generate circles for each month of the life expectancy
    for (let i = 0; i < totalMonths; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        if (i < livedMonths) {
            circle.classList.add('lived');
        } else {
            circle.classList.add('remaining');
        }
        visualization.appendChild(circle);
    }
});
