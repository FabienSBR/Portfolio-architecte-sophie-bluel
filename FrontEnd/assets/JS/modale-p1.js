/** GESTION DE L'AFFICHAGE ET L'INTERACTION DE LA PAGE 1 DE LA MODALE
 * -> APERCU DES PHOTOS EXISTANTES
 * -> AJOUT NOUVELLE PHOTO
 * -> SUPPRESSION DES PHOTOS EXISTANTES
*/


/** Structure HTML de la première page de la modale 
 * -> bouton de fermeture / titre / affichage des photos / bouton d'ajout
*/

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


/** Affichage de la première page de la modale en insérant le contenu de 'modalPageOne dans la modale */

const displayPageOne = () => {
    const popupContent = document.querySelector('.popupContent');

    popupContent.innerHTML = "";
    popupContent.insertAdjacentHTML("beforeend", modalPageOne)
    genererApercu();
    displayPageTwo();
    closeModal();
}

/** Génération de l'affichage de l'aperçu des photos dans la section 'miniGallery' du pop-up */

const genererApercu = () => {
    const miniGallery = document.querySelector(".miniGallery");
    const localWorks = JSON.parse(window.sessionStorage.getItem('works')); /** récupère la liste des photos stockées */

    miniGallery.innerHTML = "";

    /** Parcourt chaque photo dans 'localWorks' et insère son aperçu dans 'miniGallery' + ajout d'un bouton de suppression */
    localWorks.forEach((item) => {
        miniGallery.insertAdjacentHTML('beforeend', `
            <figure id="${item.id}">
                <img src="${item.imageUrl}">
                <button  class=" btnTrash"><i class="fa-regular fa-trash-can" id="${item.id}"></i></button> 
            </figure>
        `);
    });
    /** Ajout évènement 'click' à chaque bouton de supression, supression par ID, rechargement de 'miniGallery' pour refléter les modifications */
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