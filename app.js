const modeChanc = document.querySelector('.mode-chanc');
const lightBtn = document.querySelector('.light-btn');
const darkBtn = document.querySelector('.dark-btn');


function darkMode() {
    modeChanc.classList.add('dark-mode');
    modeChanc.classList.remove('light-mode');
    modeChanc.style.transition = "ease-in 300ms"
}

function lightMode() {
    modeChanc.classList.add('light-mode');
    modeChanc.classList.remove('dark-mode');
    modeChanc.style.transition = "ease-in 300ms"
}

darkBtn.addEventListener('click', darkMode);
lightBtn.addEventListener('click', lightMode);