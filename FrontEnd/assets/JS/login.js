/** GESTION DE LA CONNEXION DE L'UTILISATEUR VIA L'ENVOI DE SES IDENTIFIANTS A L'API */


/** Sélection des éléments HTML */

const btnConnect = document.getElementById("btnConnect");
const errorBox = document.querySelector('.errorBox');


/** Fonction appelée lors du succès de la connexion */

const succes = (response) => {
    const token = response.token;
    const user = response.userId;
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', user);
    window.location.href = "./index.html"; 
}


/** Fonction appelée en cas d'échec de connexion */

const error = () => {
    errorBox.insertAdjacentHTML('afterbegin', "<p>Email ou mot de passe incorrect</p>");
}


/** Envoi des identifiants de l'utilisateur à l'API pour tenter une connexion */

const sendForm = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const identifiers = { /** création de l'objet 'identifiers' avec 2 paramètres */
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


/** Ce bloc de code écoute le clic sur le bouton de connexion et gère la tentative de connexion */

btnConnect.addEventListener("click", async (event) => {
    event.preventDefault();
    const response = await sendForm();
    if (response.token) {
        succes(response);
    } else {
        error();
    }
})

