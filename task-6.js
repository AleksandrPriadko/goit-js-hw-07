const validationRef = document.querySelector('#validation-input');
validationRef.getAttribute('[data-length]');

function validations(event) {
    const attributeRef = Number(validationRef.dataset.length);
    if (attributeRef === event.target.value.length) {
        validationRef.classList.add('valid');
        validationRef.classList.remove('invalid');
    } else if (0 === event.target.value.length) {
        validationRef.classList.remove('invalid');
        validationRef.classList.remove('valid');
    } else {
        validationRef.classList.add('invalid');
        validationRef.classList.remove('valid');
    }
}

validationRef.addEventListener('blur', validations)