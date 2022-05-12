try {
    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value
}
catch (e) {
    console.log(e);
}
try {
    function getLogin() {
        const login = {
            username: username.value,
            password: password.value
        }
    }
}
catch (e) {
    console.log(e);
}