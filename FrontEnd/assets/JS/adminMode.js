const main = document.querySelector('main');
const logBtn = document.querySelector('.logBtn');
const adminBanner = document.querySelector('.adminBanner');
const btnEdit = document.getElementById('edit');

/****** ELEMENTS HTML *********/
const displayEditModal = () => `<button class="edit"><i class="fa-regular fa-pen-to-square"></i>modifier</button>`;
const displayLogout = () => `<a class="logOut">logout</a>`;
const displayLogIn = () => `<a href="./login.html" class="logIn">login</a>`; 
const displayAdminBanner = () => `<div class="bannerContent"><i class="fa-regular fa-pen-to-square"></i><p>Mode édition</p></div>`;

/**
 * Fonction qui vérifie si un token est présent dans le localStorage
 * @returns 
 */
const isConnected = () => {
    return !!window.localStorage.getItem("token");
}

/**
 * Fonction qui affiche les éléments admin
 */
const enableAdmin = () => {
    logBtn.innerHTML = "";
    logBtn.insertAdjacentHTML("afterbegin", displayLogout());
    adminBanner.insertAdjacentHTML("afterbegin", displayAdminBanner());
    btnEdit.insertAdjacentHTML("afterbegin", displayEditModal());
    filters.style.display = "none";
    eraseToken();
}

/**
 * Fonction qui masque les éléments admin
 */
const disabledAdmin = () => {
    filters.style.display = "flex";
    adminBanner.innerHTML = "";
    btnEdit.remove();
    logBtn.innerHTML = "";
    logBtn.insertAdjacentHTML("afterbegin", displayLogIn());
}

window.addEventListener("load", () => {
    if (isConnected()) {
        enableAdmin();
    } else {
        disabledAdmin();
    }
})

/**
 * Supprimer le token du local storage
 */
const eraseToken = () => {
    const logOut = document.querySelector('.logOut');
    logOut.addEventListener("click", () => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
        window.location.reload();
    });
}
