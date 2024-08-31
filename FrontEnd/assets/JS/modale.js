/** GESTION DE LA CREATION D'UNE MODALE (FENETRE POP-UP) */


/** Fonction pour créer la structure de la modale */

const createModalContainer = () => `<div class="popup"">
        <div class="popupContent">
        </div>
        </div>`


/** Affichage de la modale suite au click sur le bouton de modification*/

btnEdit.addEventListener("click", () => {
    main.insertAdjacentHTML("beforeend", createModalContainer())
    displayPageOne();
    closeByBgd(); /** permet de fermer la modale au click sur l'arrière-plan */
})


/** Fermeture de la modale lorsque l'utilisateur clique sur la croix de fermeture */

const closeModal = () => {
    const closePopup = document.querySelector('.closePopup');
    const popup = document.querySelector('.popup');

    closePopup.addEventListener("click", () => {
        popup.remove()
    })
}

/** Fermeture de la modale lorsque l'utilisateur clique sur l'arrière-plan */

const closeByBgd = () => {
    const popup = document.querySelector('.popup');

    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.remove()
        }
    })
}

/** Cette fonction gère le retour à l'écran précédent dans la modale */

const returnPrevious = (event) => {
    const previousScreen = document.querySelector('.previousScreen')

    previousScreen.addEventListener('click', () => {
        displayPageOne();
    })
}