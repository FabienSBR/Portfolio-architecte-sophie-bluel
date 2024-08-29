/****** ELEMENT HTML *********/
const modalPageOne = `<div class="popupNav">
            <button class="btnPopup closePopup">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
        <div class="page-one">
            <h3>Galerie photo</h3>
            <div class="miniGallery"></div>
            <div class="lineDecor">
                <input type="submit" class="newProject" value="Ajouter une photo">
            </div>
        </div>`

//*********** FONCTIONS ************* */

const displayPageOne = () => {
    const popupContent = document.querySelector('.popupContent');

    popupContent.innerHTML = "";
    popupContent.insertAdjacentHTML("beforeend", modalPageOne)
    genererApercu();
    displayPageTwo();
    closeModal();
}

/**
 * Générer l'affichage de la gallerie dans la popup
 */
const genererApercu = () => {
    const miniGallery = document.querySelector(".miniGallery");
    const localWorks = JSON.parse(window.localStorage.getItem('works'));

    miniGallery.innerHTML = "";

    localWorks.forEach((item) => {
        miniGallery.insertAdjacentHTML('beforeend', `
            <figure id="${item.id}">
                <img src="${item.imageUrl}">
                <button  class=" btnTrash"><i class="fa-regular fa-trash-can" id="${item.id}"></i></button>
            </figure>
        `);
    });

    const btnTrash = document.querySelectorAll('.btnTrash');
    btnTrash.forEach((btn) => {
        btn.addEventListener('click', async event => {
            deleteWork(event.target.id);
            gallery.innerHTML = "";
            await genererProjects();
            genererApercu();
        })
    })
};