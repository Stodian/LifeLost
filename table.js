const canvas = document.getElementById('lifeCanvas');
const ctx = canvas.getContext('2d');

const scale = window.devicePixelRatio; // Get the device pixel ratio
canvas.width = 1200 * scale; // Scale the canvas width
canvas.height = 900 * scale; // Scale the canvas height
ctx.scale(scale, scale); // Scale the context to ensure the drawing operations are scaled

// Set the display size of the canvas
canvas.style.width = '1200px';
canvas.style.height = '900px';

const circleRadius = 6;
const circleDiameter = circleRadius * 2;
const padding = 4;
const totalMonths = 90 * 12;
const columns = 36; // Each row represents 3 years = 36 months
const rows = Math.ceil(totalMonths / columns);

function drawCircle(x, y, color, fill = true) {
    ctx.beginPath();
    ctx.arc(x, y, circleRadius, 0, Math.PI * 2);
    if (fill) {
        ctx.fillStyle = color;
        ctx.fill();
    } else {
        ctx.strokeStyle = color;
        ctx.stroke();
    }
    ctx.closePath();
}

function drawLabel(text, x, y, color) {
    ctx.fillStyle = color;
    ctx.font = '12px Arial';
    ctx.fillText(text, x, y);
}

function drawLifeInMonths() {
    const age = parseInt(document.getElementById('ageInput').value, 10) || 0;
    const workHours = parseInt(document.getElementById('workInput').value, 10) || 0;
    const exerciseHours = parseInt(document.getElementById('exerciseInput').value, 10) || 0;
    const readingHours = parseInt(document.getElementById('readingInput').value, 10) || 0;
    const tvHours = parseInt(document.getElementById('tvInput').value, 10) || 0;
    const socialMediaHours = parseInt(document.getElementById('socialMediaInput').value, 10) || 0;
    const sleepHours = parseInt(document.getElementById('sleepInput').value, 10) || 0;

    const totalDays = age * 365; // Approximation, ignoring leap years
    const totalWorkMonths = (workHours * totalDays) / (24 * 30);
    const totalExerciseMonths = (exerciseHours * totalDays) / (24 * 30);
    const totalReadingMonths = (readingHours * totalDays) / (24 * 30);
    const totalTvMonths = (tvHours * totalDays) / (24 * 30);
    const totalSocialMediaMonths = (socialMediaHours * totalDays) / (24 * 30);
    const totalSleepMonths = (sleepHours * totalDays) / (24 * 30);
    const totalActivityMonths = totalWorkMonths + totalExerciseMonths + totalReadingMonths + totalTvMonths + totalSocialMediaMonths + totalSleepMonths;

    let x = circleRadius + padding;
    let y = circleRadius + padding;
    let month = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            if (month >= totalMonths) return;

            let color = '#000000'; // Default color
            let fill = true;

            if (month < totalSleepMonths) {
                color = '#00FFFF'; // Sleep time in months
            } else if (month < totalSleepMonths + totalWorkMonths) {
                color = '#FF0000'; // Work time in months
            } else if (month < totalSleepMonths + totalWorkMonths + totalExerciseMonths) {
                color = '#00FF00'; // Exercise time in months
            } else if (month < totalSleepMonths + totalWorkMonths + totalExerciseMonths + totalReadingMonths) {
                color = '#0000FF'; // Reading time in months
            } else if (month < totalSleepMonths + totalWorkMonths + totalExerciseMonths + totalReadingMonths + totalTvMonths) {
                color = '#FFFF00'; // TV time in months
            } else if (month < totalSleepMonths + totalWorkMonths + totalExerciseMonths + totalReadingMonths + totalTvMonths + totalSocialMediaMonths) {
                color = '#FF00FF'; // Social Media time in months
            } else if (month < totalActivityMonths) {
                color = '#FFA500'; // Other activities
            } else {
                fill = false; // Free time
            }

            drawCircle(x, y, color, fill);
            x += circleDiameter + padding;
            month++;
        }
        x = circleRadius + padding;
        y += circleDiameter + padding;
    }
}

function drawLabels() {
    drawLabel('Sleep', 5, 15, '#00FFFF');
    drawLabel('Work', 5, 30, '#FF0000');
    drawLabel('Exercise', 5, 45, '#00FF00');
    drawLabel('Reading', 5, 60, '#0000FF');
    drawLabel('TV', 5, 75, '#FFFF00');
    drawLabel('Social Media', 5, 90, '#FF00FF');
    drawLabel('Free Time', 5, 105, '#000000');
}

document.getElementById('generateBtn').addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    drawLifeInMonths();
    drawLabels();
});

drawLifeInMonths();
drawLabels();
