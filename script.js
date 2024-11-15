const capybaraImage = document.getElementById('capybaraImage');
const message = document.querySelector('.message');

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    capybaraImage.style.left = mouseX - capybaraImage.width / 2 + 'px';
    capybaraImage.style.top = mouseY - capybaraImage.height / 2 + 'px';
});

let isMouseDown = false;
document.addEventListener('mousedown', () => {
    isMouseDown = true;
    capybaraImage.src = "dancing-capybara.gif";
});

document.addEventListener('mouseup', () => {
    if (isMouseDown) {
        capybaraImage.src = "Capi.gif";
        isMouseDown = false;
    }
});
