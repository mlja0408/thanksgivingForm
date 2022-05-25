try {
    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value
}
catch (e) {
    console.log(e);
}
function getLogin() {
    try {
        const login = {
            username: username.value,
            password: password.value
        }
        fetch('http://hlcathanksgivingboxes.com:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(login),
        })
            .then(response => response.json())
            .then(() => {

                document.getElementById('adminLogin').submit();
            }).catch((e) => console.error(e.stack), alert('Login failed. Please try again.'));
    } catch (e) {
        console.log(e)
    }
}