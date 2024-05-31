const canvas = document.getElementById('lifeCanvas');
const ctx = canvas.getContext('2d');

const circleRadius = 6;
const circleDiameter = circleRadius * 2;
const padding = 4;
const totalMonths = 90 * 12;
const columns = 36; // Each row represents 3 years = 36 months
const rows = Math.ceil(totalMonths / columns);

function drawCircle(x, y, color) {
    ctx.beginPath();
    ctx.arc(x, y, circleRadius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function drawLabel(text, x, y, color) {
    ctx.fillStyle = color;
    ctx.font = '12px Arial';
    ctx.fillText(text, x, y);
}

function drawLifeInMonths() {
    let x = circleRadius + padding;
    let y = circleRadius + padding;
    let month = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            if (month >= totalMonths) return;

            let color = '#000000'; // Default color

            if (month === 0) color = '#0000FF'; // Birth
            if (month === 30 * 12) color = '#008080'; // 30th Birthday
            if (month === 60 * 12) color = '#8B0000'; // 60th Birthday
            if (month === totalMonths - 1) color = '#800080'; // Turning 90

            drawCircle(x, y, color);
            x += circleDiameter + padding;
            month++;
        }
        x = circleRadius + padding;
        y += circleDiameter + padding;
    }
}

function drawLabels() {
    drawLabel('Birth', 5, 15, '#0000FF');
    drawLabel('30th Birthday', 5, 130, '#008080');
    drawLabel('60th Birthday', 5, 245, '#8B0000');
    drawLabel('Turning 90', 5, 720, '#800080');
    ctx.strokeStyle = '#FFA500';
    ctx.beginPath();
    ctx.moveTo(0, 770);
    ctx.lineTo(780, 770);
    ctx.stroke();
    drawLabel('Each row is 36 months = 3 years', 180, 790, '#FFA500');
}

drawLifeInMonths();
drawLabels();