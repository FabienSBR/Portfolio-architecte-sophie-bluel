/** GESTION DE L'INTERFACE UTILISATEUR EN MODE ADMINISTRATEUR
 * VERIFIE SI L'UTILISATEUR EST CONNECTE PUIS AFFICHE OU MASQUE CERTAINS ELEMENTS DE L'INTERFACE
 */


/** Sélection des éléments HTML nécessaires pour interagir avec le DOM */

const main = document.querySelector('main');
const logBtn = document.querySelector('.logBtn');
const adminBanner = document.querySelector('.adminBanner');
const btnEdit = document.getElementById('edit');


/** Génération du code HTML pour différents éléments de l'interface */

const displayEditModal = () => `<button class="edit"><i class="fa-regular fa-pen-to-square"></i>modifier</button>`;
const displayLogout = () => `<a class="logOut">logout</a>`;
const displayLogIn = () => `<a href="./login.html" class="logIn">login</a>`; 
const displayAdminBanner = () => `<div class="bannerContent"><i class="fa-regular fa-pen-to-square"></i><p>Mode édition</p></div>`;


/** Fonction qui vérifie si un utilisateur est connecté en vérifiant la présence d'un token dans le stockage local */

const isConnected = () => {
    return !!window.sessionStorage.getItem("token");
}


/** Affichage du mode administrateur en modifiant le DOM */

const enableAdmin = () => {
    logBtn.innerHTML = "";
    logBtn.insertAdjacentHTML("afterbegin", displayLogout());
    adminBanner.insertAdjacentHTML("afterbegin", displayAdminBanner());
    btnEdit.insertAdjacentHTML("afterbegin", displayEditModal());
    filters.style.display = "none";
    eraseToken(); /** appel de la fonction 'eraseToken' pour configurer la déconnexion */
}


/** Fonction qui désactive le mode administrateur en restaurant l'interface utilisateur à son état non administrateur */

const disabledAdmin = () => {
    filters.style.display = "flex";
    adminBanner.innerHTML = "";
    btnEdit.remove();
    logBtn.innerHTML = "";
    logBtn.insertAdjacentHTML("afterbegin", displayLogIn());
}


/** Cette partie du code détermine si le mode administrateur doit être activé ou non lorsque la page est chargée */

window.addEventListener("load", () => {
    if (isConnected()) {
        enableAdmin();
    } else {
        disabledAdmin();
    }
})

/** Gestion de la déconnexion :supprime le token du stockage local */

const eraseToken = () => {
    const logOut = document.querySelector('.logOut');
    logOut.addEventListener("click", () => {
        window.sessionStorage.removeItem("token");
        window.sessionStorage.removeItem("user");
        window.location.reload();
    });
}
