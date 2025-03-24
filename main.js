
//VERIABLE DECLERATION 
let button = document.getElementById('submitButton');
let userInput = document.getElementById('name');
let nameErr = document.getElementById('nameError');
let nameBox = document.querySelector('.nameBox');
let emailInput = document.getElementById('email');
let emailErr = document.getElementById('emailError');
let passInput = document.getElementById('password');
let passbox = document.getElementById('passbox');
let PassErr = document.getElementById('passwordError');
let confirmPass = document.getElementById('conpass');
let conpassword = document.getElementById('conpassword')
let conformpassError = document.getElementById('conformpassError');
let emailbox=document.getElementById('emailbox');
let body = document.querySelector('body');
// CLICK EVENT 
button.addEventListener('click', submitFunction);
function submitFunction(eve) {
    eve.preventDefault();
    // NO ERROR SECTION 
    if (nameError() && emailError() && PassError() && confirmPassword()) {
        setTimeout(() => {
            let div = document.createElement('div');
            div.className = 'newdisplay'
            div.innerHTML = `form is submitted  <i class='bx bx-x'></i>`
            body.appendChild(div);
            document.querySelector('.newdisplay').addEventListener('click', (e) => {
                div.className = ''
                div.innerHTML = ''
                userInput.value = ''
                nameBox.children[2].className = '';
                emailInput.value = ''
                emailbox.children[2].className = '';
                passInput.value = ''
                passbox.children[2].className = '';
                confirmPass.value = ''
                conpassword.children[2].className = '';
            })
        }, 3000);
    }



}
// ERROR SECTION  
//NAME ERROR SECTION 
function nameError() {
    if (userInput.value.length == 0) {
        nameErr.innerHTML = 'Name is Required!!';
        nameBox.children[2].className = 'bx bx-x';
        return false;
    }
    if (!userInput.value.match(' '
    )) {
        nameErr.innerHTML = 'Use Full Name';
        nameBox.children[2].className = 'bx bx-x';
        return false;
    }
    nameErr.innerHTML = " ";
    nameBox.children[2].className = 'bx bx-check';
    nameBox.children[2].style.color = 'green';
    return true;
}


document.querySelector('.nameBox').children[2].addEventListener('click',(e)=>{
    e.target.previousElementSibling.value=''
});

//EMAIL ERROR SECTION 

function emailError() {
    if (emailInput.value.length == 0) {
        emailErr.innerHTML = 'Email is Required!!';
        emailbox.children[2].className = 'bx bx-x';
        return false;
    }
    if (!emailInput.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    )) {
        emailErr.innerHTML = '@abc format';
        emailbox.children[2].className = 'bx bx-x';
        return false;
    }
    emailErr.innerHTML = "";
    emailbox.children[2].className = 'bx bx-check';
    emailbox.children[2].style.color = 'green';
    return true;
}

//PASSWORD ERROR SECTION

function PassError() {
    if (passInput.value.length < 8) {
        PassErr.innerHTML = 'Password should be at least 8 character';
        passbox.children[2].className = 'bx bx-x';
        return false;
    }
    if (!passInput.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/

    )) {
        PassErr.innerHTML = 'upper,lower,number,symbol required';
        passbox.children[2].className = 'bx bx-x';
        return false;
    }
    PassErr.innerHTML = " ";
    passbox.children[2].className = 'bx bx-check';
    passbox.children[2].style.color = 'green';
    return true;
}
// CONFIRM PASSWORD SECTION 
function confirmPassword() {
    if (!(confirmPass.value === passInput.value)) {
        conformpassError.innerHTML = 'password doesnot match';
        conpassword.children[2].className = 'bx bx-x';
        return false;
    }
    conformpassError.innerHTML = " ";
    conpassword.children[2].className = 'bx bx-check';
    conpassword.children[2].style.color = 'green';
    return true;
} 