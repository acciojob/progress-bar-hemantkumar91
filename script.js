//your JS code here. If required.
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');
let currentActive = 0;

nextButton.addEventListener('click', () => {
    currentActive++;
    updateProgress();
});

prevButton.addEventListener('click', () => {
    currentActive--;
    updateProgress();
});

function updateProgress() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    // Update buttons
    if (currentActive === 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    if (currentActive === circles.length) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}