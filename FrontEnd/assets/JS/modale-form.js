/** GESTION DE LA VALIDATION ET SOUMISSION DU FORMULAIRE D'AJOUT DE PHOTO DANS LA GALERIE */


/** Initialisation de 'FormData' : construction de paires clé(champs du formulaire)/valeur 
 * -> collecte et envoi des données du projet via une requête HTTP
*/

let addedProject = new FormData();


/** Contrôle le formulaire à chaque changement via écouteurs d'évènements */

const validForm = () => {
    const explore = document.getElementById('explore');
    const inputProject = document.getElementById('projectName');
    const baliseSelect = document.getElementById('projectCategory');

    explore.addEventListener('change', () => {
        validImg()
    })

    inputProject.addEventListener('change', () => {
        validTitle()
    })

    baliseSelect.addEventListener('change', () => {
        validCat()
    })
}


/** Fonction qui Vérifie si une image a été sélectionnée et si elle respecte la limite de taille (4 Mo) */

const validImg = () => {
    try {
        const photo = document.getElementById('explore').files[0];
        removeError();
        if (!photo) {
            throw new Error('Merci de sélectionner une image.');
            
        }
        if (photo.size > 4000000) {
            throw new Error('Merci de réduire la taille de votre image');
            
        }
        
        addedProject.append('image', photo); /** ajout à 'addedProject' si l'image est valide */
        enableAdd()
        return true;

    } catch (error) {
        displayError(error.message)
    }
}


/** Fonction qui vérifie la présence et la longueur du titre */

const validTitle = () => {
    try {
        const title = document.getElementById('projectName').value;
        removeError();
        if (!title) {
            throw new Error('Merci de donner un titre à votre projet');
            
        }
        if (title.length < 3) {
            throw new Error('Le titre choisi est trop court');
            
        }

        addedProject.append('title', title);
        enableAdd()
        return true;

    } catch (error) {
        displayError(error.message);
    }
}


/** Fonction qui s'assure qu'une catégorie a été sélectionnée */

const validCat = () => {
    try {
        const category = document.getElementById('projectCategory').value;
        removeError();
        if (category === "") {
            throw new Error('Merci de choisir une catégorie pour votre projet');
            
        }

        addedProject.append('category', category);
        enableAdd()
        return true;

    } catch (error) {
        displayError(error.message)
    }
}


/** Gestion des erreurs */

/** affichage d'un message d'erreur dans la zone dédiée */
const displayError = (message) => {
    const errorBox = document.querySelector('.errorBox');
    errorBox.innerHTML = message
}

/** efface tout message d'erreur précédemment affiché */
const removeError = () => {
    const errorBox = document.querySelector('.errorBox');
    errorBox.innerHTML = ""
}


/** Activation du bouton de soumission du formulaire : 'btnAdd' */

const enableAdd = () => {
    const btnAdd = document.getElementById('btnAdd');
    const category = document.getElementById('projectCategory').value;
    const title = document.getElementById('projectName').value;
    const image = document.getElementById('explore').value;

    /**bouton non-actif si tous les champs ne sont pas remplis */
    if (!!category & !!title & !!image) {
        btnAdd.removeAttribute('disabled')
    }
}


/** Ajout du projet à la gallerie : insertion d'un nouvel élément 'figure' avec image et titre du projet */

const addNewFigure = (addedProject) => {
    gallery.innerHTML = "";
    gallery.insertAdjacentHTML('beforeend', `
            <figure>
                <img src="${addedProject.image}" alt="${addedProject.title}">
                <figcaption>${addedProject.title}</figcaption>
            </figure>
        `);
}


/** Soumission du nouveau projet */

const publishProject = () => {
    const btnAdd = document.querySelector('.btnAdd');

    btnAdd.addEventListener('click', async (event) => {
        event.preventDefault();
        const gallery = document.querySelector('.gallery');
        const form = document.getElementById('createProject');
        const response = await sendForm(addedProject);
        const prevNewProject = document.querySelector('.prevNewProject');
        const notice = document.querySelectorAll('.notice');
        const errorBox = document.querySelector('.errorBox');

        /** succès */
        if (response.ok) {
            console.log("Projet créé avec succès");
            gallery.innerHTML = "";
            await genererProjects();
            form.reset();
            addedProject = new FormData();
            prevNewProject.src = "";
            errorBox.classList.add("succes");
            errorBox.innerHTML = "Projet ajouté à la galerie";
            notice.forEach((item) => {
                item.hidden = false
            });
        }
        /** échec */
        else {
            console.log("Echec lors de la création du projet");
            errorBox.classList.remove("succes");
            errorBox.innerHTML = "Echec lors de la création du projet";
        }
    })
}
