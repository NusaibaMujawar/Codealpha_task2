function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to update the color display
function updateColorDisplay(color) {
    const colorDisplay = document.querySelector('.color-display');
    colorDisplay.style.backgroundColor = color;
}

// Event listeners
document.getElementById('generate-btn').addEventListener('click', () => {
    const randomColor = generateRandomColor();
    updateColorDisplay(randomColor);
});

document.getElementById('apply-btn').addEventListener('click', () => {
    const customColor = document.getElementById('color-input').value;
    updateColorDisplay(customColor);
});

// Initial random color display
updateColorDisplay(generateRandomColor());
