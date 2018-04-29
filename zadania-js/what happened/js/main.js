'use strict';

const input = document.querySelector('input');
const info = document.querySelector('div');

const getApi = function () {
    const valueYear = input.value;
    const xhttp = new XMLHttpRequest(); // obiekt zapytania
    xhttp.open('GET', `http://numbersapi.com/${valueYear}/year`)
    xhttp.send()
    xhttp.onload = function () {
        if(this.status === 200) {
            info.textContent = this.responseText;
        }
    }
}

input.addEventListener('input', getApi);
