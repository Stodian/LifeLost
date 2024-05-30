document.getElementById('generateBtn').addEventListener('click', function() {
    const age = parseInt(document.getElementById('ageInput').value);
    const lifeExpectancy = 90;
    const totalMonths = lifeExpectancy * 12;
    const livedMonths = age * 12;
    const remainingMonths = totalMonths - livedMonths;

    const visualization = document.getElementById('visualization');
    visualization.innerHTML = '';

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
