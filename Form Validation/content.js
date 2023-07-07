const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const form = document.getElementById('form');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    validateInputs();
});

const isValidEmail = (email) => {
    const set = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return set.test(String(email).toLowerCase());
};

const setsuccess = (element) => {
    const inputcontrol = element.parentElement;
    const errordisplay = inputcontrol.querySelector('.error');
    errordisplay.innerText = '';
    inputcontrol.classList.add('success');
    inputcontrol.classList.remove('error');
};

const validateInputs = () => {
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const password2value = password2.value.trim();

    if(usernamevalue === '') alert("Username is required!");
    else if(usernamevalue.length<4) alert("Username must be at least 4 characters!")
    else setsuccess(username);
    if(emailvalue === '') alert("Email is required!");
    else if(!isValidEmail(emailvalue)) alert("Please enter valid email address!");
    else setsuccess(email);
    if(passwordvalue === '') alert("Password is required!");
    else if(passwordvalue.length<6) alert("Password must be at least 6 characters!");
    else setsuccess(password);
    if(password2value === '') alert("Confirm your password!");
    else if(password2value !== passwordvalue) alert("Password doesn't match!");
    else setsuccess(password2);
};