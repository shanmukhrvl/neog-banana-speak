const btnTranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");
const outputDiv = document.querySelector("#output");


function clickHandler() {
    outputDiv.innerText = txtInput.value;
}

btnTranslate.addEventListener("click", clickHandler);