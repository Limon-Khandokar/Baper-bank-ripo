
//get user email
document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;



    // get user password 
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;


    //cheak email and password
    if (userEmail == 'limmon@gmail.com' && userPassword == '123') {
        window.location.href = 'html/index.html';
    }
    else {
        console.log('invalid user');
    }

})