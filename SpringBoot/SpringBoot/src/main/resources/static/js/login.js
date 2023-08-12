
async function logIn() {

    let data = {};

    data.email = document.querySelector("#inputEmail").value;
    data.password = document.querySelector("#inputPassword").value;

    const request = await fetch('api/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( data )
    });



    const credentials = await request.text();

    if (credentials !== 'FAIL') {
        localStorage.token = credentials;
        localStorage.email = data.email;
        window.location.href = "users.html";
    }
    else {
        alert("Email or password are incorrect.");
    }

}