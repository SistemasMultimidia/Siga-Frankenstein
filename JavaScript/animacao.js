const sprite = document.getElementById('sprite');

let currentFrame = 0;

setInterval(() => {
    if (currentFrame < 11) {
        currentFrame++;
        sprite.style.backgroundPosition = `${currentFrame * 100}% 0%`;
    }
}, 2000);