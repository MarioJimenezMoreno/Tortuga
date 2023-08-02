document.addEventListener("DOMContentLoaded", function () {

});

async function registerUser() {

    let data = {};

    data.username = document.querySelector("#inputUsername").value;
    data.phone = document.querySelector("#inputPhone").value;
    data.password = document.querySelector("#inputPassword").value;
    let repeatpassword = document.querySelector("#inputRepeatPassword").value;
    data.email = document.querySelector("#inputEmail").value;

    if (data.password != repeatpassword) {
        alert("Passwords must be identical")
        return;
    }

    const request = await fetch('api/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data })
    });

}

