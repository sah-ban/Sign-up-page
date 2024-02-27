function submitForm() {
    var name = document.getElementById('name').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var dob = document.getElementById('dob').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var checkbox = document.getElementById("checkbox");

   resetErrorStyles(); 

    var hasErrors = false;

    if (!name) {
        highlightErrorField('name');
        hasErrors = true;
    }

    if (!gender) {
        highlightErrorField('gender');
        hasErrors = true;
    }

    if (!dob) {
        highlightErrorField('dob');
        hasErrors = true;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        highlightErrorField('email');
        hasErrors = true;
    }

    var phoneNumberRegex = /^[0-9]+$/;
    if (!phoneNumberRegex.test(phone)) {
        alert("Please enter a valid phone number with only digits");
        highlightErrorField('phone');
        hasErrors = true;
    }

    if (!password) {
        highlightErrorField('password');
        hasErrors = true;
    }

    if (!checkbox.checked) {
        highlightErrorField('checkbox');
        alert("Please agree to the terms & conditions");
        hasErrors = true;
    }

    if (hasErrors) {
        alert("Please fill out all fields correctly");
        return;
    }

    localStorage.setItem('name', name);
    localStorage.setItem('gender', gender.value);
    localStorage.setItem('dob', dob);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('password', password);

    window.location.href = 'index2.html';
}

function resetErrorStyles() {
    var inputFields = document.querySelectorAll('.input-box input');
    inputFields.forEach(function (field) {
        field.classList.remove('error');
    });

 
    var genderSection = document.querySelector('.gender');
    genderSection.classList.remove('error');
}

function highlightErrorField(fieldId) {
    if (fieldId === 'gender') {
        
        var genderSection = document.querySelector('.gender');
        genderSection.classList.add('error');
    } else {
       
        document.getElementById(fieldId).classList.add('error');
    }
}

