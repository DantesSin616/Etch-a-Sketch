document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector('.grid-container');
    const colorPicker = document.getElementById('colorPicker');
    const bgColor = document.getElementById('bgColor');
    const pencilBtn = document.getElementById('pencil');
    const eraserBtn = document.getElementById('eraser');
    
    let currentColor = '#000000';
    let isDrawing = false;
    let currentTool = 'pencil';

    // Create 32x32 grid
    for (let i = 0; i < 32 * 32; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }

    // Event Listeners for drawing
    gridContainer.addEventListener('mousedown', startDrawing);
    gridContainer.addEventListener('mousemove', draw);
    gridContainer.addEventListener('mouseup', stopDrawing);
    gridContainer.addEventListener('mouseleave', stopDrawing);

    // Color picker event
    colorPicker.addEventListener('input', (e) => {
        currentColor = e.target.value;
    });

    // Background color picker event
    bgColor.addEventListener('input', (e) => {
        gridContainer.style.backgroundColor = e.target.value;
    });

    // Tool selection events
    pencilBtn.addEventListener('click', () => {
        currentTool = 'pencil';
        pencilBtn.classList.add('active');
        eraserBtn.classList.remove('active');
    });

    eraserBtn.addEventListener('click', () => {
        currentTool = 'eraser';
        eraserBtn.classList.add('active');
        pencilBtn.classList.remove('active');
    });

    function startDrawing(e) {
        isDrawing = true;
        draw(e);
    }

    function draw(e) {
        if (!isDrawing) return;
        
        const gridItem = e.target;
        if (!gridItem.classList.contains('grid-item')) return;

        if (currentTool === 'pencil') {
            gridItem.style.backgroundColor = currentColor;
        } else if (currentTool === 'eraser') {
            gridItem.style.backgroundColor = bgColor.value;
        }
    }

    function stopDrawing() {
        isDrawing = false;
    }
});
