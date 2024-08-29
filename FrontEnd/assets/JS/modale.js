/****** ELEMENT HTML *********/
const createModalContainer = () => `<div class="popup"">
        <div class="popupContent">
        </div>
        </div>`

/**
 * Evenement qui génère le conteneur modale au clic sur le bouton modifier
 */
btnEdit.addEventListener("click", () => {
    main.insertAdjacentHTML("beforeend", createModalContainer())
    displayPageOne();
    closeByBgd();
})

/**
 * Evenements qui suppriment la modale au clic sur la croix ou le background
 */
const closeModal = () => {
    const closePopup = document.querySelector('.closePopup');
    const popup = document.querySelector('.popup');

    closePopup.addEventListener("click", () => {
        popup.remove()
    })
}

const closeByBgd = () => {
    const popup = document.querySelector('.popup');

    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.remove()
        }
    })
}

/**
 * Evenement qui gère le retour à l'écran précédent
 */
const returnPrevious = (event) => {
    const previousScreen = document.querySelector('.previousScreen')

    previousScreen.addEventListener('click', () => {
        displayPageOne();
    })
}