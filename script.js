function login() {
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    if(username === 'Dein Benutzername' && password === 'Dein Passwort') {
        alert('Passwort und Benutzername Richtig');
    } else {
        alert('Passwort oder Benutzername Falsch');
    }
}