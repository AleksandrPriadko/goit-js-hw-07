const fontSizeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');


fontSizeRef.addEventListener("input", onFontSize)

function onFontSize() {
    textRef.style.fontSize = fontSizeRef.value + 'px';
};