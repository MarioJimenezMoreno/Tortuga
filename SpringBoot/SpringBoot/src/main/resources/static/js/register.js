
async function registerUser() {

    let data = {};
    data.email = document.querySelector("#inputEmail").value;
    data.username = document.querySelector("#inputUsername").value;
    data.phone = document.querySelector("#inputPhone").value;
    data.password = document.querySelector("#inputPassword").value;
    let repeatpassword = document.querySelector("#inputRepeatPassword").value;


    if (data.password !== repeatpassword) {
        alert("Passwords must be identical")

    }else if (data.password.length<6)
    {
        alert("Password require a minimum length of 6")
    } else {
    const request = await fetch('api/users/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( data)
    });
    alert("The account was successfully created")
    window.location.href = 'users.html'
}}

