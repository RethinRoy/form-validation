let box = document.querySelector('.box button');
let input = document.querySelector('.userInput');
let count = true;
let i = 0;
let audioList = ['sajna.mp3', 'music.mp3'];
let audio = new Audio(audioList[i]);
let button = document.querySelector('button').addEventListener('click', (e) => {
    if (count) {
        audio.play();
        box.style.borderRadius = `${50}%`;
        document.querySelector('button').innerHTML = `<img class='im1' src="images.jpg" alt="" height="100%" width="100%" style="object-fit: cover;">`;
        document.querySelector('.im1').style.borderRadius = `${50}%`;
        count = false;
    } else {
        audio.pause();
        count++;
        box.style.borderRadius = `${50}%`;
        document.querySelector('button').innerHTML = `<img class='im1' src="images.jpg" alt="" height="100%" width="100%" style="object-fit: cover;">`;
        document.querySelector('.im1').style.borderRadius = `${50}%`;
        document.querySelector('img').style.animation = 'none';
        count = true;
    }
});
console.log(count)
let buttons_group = document.querySelectorAll('.buttons_group button');
buttons_group.forEach(button => {
    button.style.backgroundColor = button.getAttribute('data-value');
    button.style.border = 'none';
    button.addEventListener('click', () => {
        box.style.backgroundColor = button.getAttribute('data-value');
    })
})
let shadow_class = document.querySelectorAll('.shadow_class button');
shadow_class.forEach((shadowBtn) => {
    shadowBtn.addEventListener('click', (e) => {
        if (shadowBtn.getAttribute('data-value') === 'lg') {
            box.classList.add('lg');
            box.classList.remove('sm');
        } else {
            box.classList.add('sm');
            box.classList.remove('lg');
        }
    })
})
