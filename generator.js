const color = document.querySelector("#hex-color");
const generate_button = document.querySelector('#generator');
const copy_button = document.querySelector('#copy');
const result = document.querySelector('#result');

generate_button.addEventListener('click', setColor);
copy_button.addEventListener('click', copyColor);

function setColor () {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    document.body.style.backgroundColor = randomColor;
    color.innerText = randomColor;
}

function copyColor () {
    let text = color.innerText;
    let input = document.createElement('input');

    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    
    document.execCommand('copy');
    document.body.removeChild(input);
    
    result.classList.add("copied");
    result.innerText = 'Copied: ' + text;
}
