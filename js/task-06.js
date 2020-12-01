
const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('change', handleValidChange);

function handleValidChange(event) {
    if (validationInput.value.length === Number(validationInput.getAttribute('data-length'))) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');

    } else if (validationInput.value.length === 0) {
        validationInput.classList.remove('valid');
        validationInput.classList.remove('invalid');
    } else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid'); 
    } 
    
}
