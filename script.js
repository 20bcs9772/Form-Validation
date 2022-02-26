const form = document.querySelector('form');
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const messageContainer = document.querySelector(".message-container");
const message = document.querySelector("#message");

let isValid = false;
let passwordMatch = false;

function storeData(){
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        wesite: form.website.value,
        password: form.password.value
    }
    localStorage.setItem(`${user.name}`,[user]);
}

function validateForm(){
    isValid = form.checkValidity();
    if(!isValid){
    message.textContent = "Please fill all fields ";
    message.style.color = 'red';
    messageContainer.style.border = '1px solid red';
    return;
    }

    if(password1.value === password2.value){
        passwordMatch= true;
        password1.style.borderColor = 'green';
        password2.style.borderColor = 'green';
    } else{
        passwordMatch = false;
        message.textContent = "Make sure passwords match ";
        message.style.color='red';
        messageContainer.style.border = '1px solid red';
        password1.style.borderColor = 'red';
        password2.style.borderColor = 'red';
        return;
    }
    if(isValid && passwordMatch){
        message.textContent = "Successfullt Registered ";
        message.style.color = "green";
        messageContainer.style.border = '1px solid green';
        storeData();
    }
}

function processFormData(e){
    e.preventDefault();
    validateForm();
}

// event

form.addEventListener('submit', processFormData);