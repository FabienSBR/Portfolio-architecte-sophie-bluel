const btnConnect = document.getElementById("btnConnect");
const errorBox = document.querySelector('.errorBox');

/**
 * Fonction qui stocke le token et renvoie vers la page d'accueil en mode admin
 * @param {Array} response 
 */
const succes = (response) => {
    const token = response.token;
    const user = response.userId;
    localStorage.setItem('token', token);
    localStorage.setItem('user', user);
    window.location.href = "./index.html"; 
}

/**
 * Fonction qui retourne un message d'erreur en cas d'echec
 */
const error = () => {
    errorBox.insertAdjacentHTML('afterbegin', "<p>Email ou mot de passe incorrect</p>");
}

/**
 * fonction qui envoie les identifiants à l'API et récupère la réponse
 * @returns 
 */
const sendForm = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const identifiers = {
        email: email,
        password: password
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(identifiers)
    }

    const response = await fetch('http://localhost:5678/api/users/login', options);
    return await response.json();
}

/**
 * Ecouteur d'évenement qui déclenche la connection
 */
btnConnect.addEventListener("click", async (event) => {
    event.preventDefault();
    const response = await sendForm();
    if (response.token) {
        succes(response);
    } else {
        error();
    }
})

