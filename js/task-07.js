const sizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

sizeControl.addEventListener('input', handleControlText);

function handleControlText(event) {
    textSpan.style.fontSize = event.target.value + 'px';
}
