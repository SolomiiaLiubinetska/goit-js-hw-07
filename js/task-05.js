const inputName = document.querySelector('[type="text"]');
const eventOutput = document.getElementById('name-output');


inputName.addEventListener('input', handleInputChange);
    
function handleInputChange(event) {
    eventOutput.value = event.target.value;
    eventOutput.textContent =
    inputName.value === '' ? 'незнакомец' : event.target.value;
}