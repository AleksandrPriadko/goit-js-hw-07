const validationRef = document.querySelector('#validation-input');
const length = validationRef.getAttribute('data-length');

function validations(event) {
    if (length == validationRef.value.length) {
        validationRef.classList.add('valid');
        validationRef.classList.remove('invalid');

    } else if (0 === validationRef.value.length) {
        validationRef.classList.remove('invalid');
        validationRef.classList.remove('valid');
    } else {
        validationRef.classList.add('invalid');
    }
}

validationRef.addEventListener('blur', validations)