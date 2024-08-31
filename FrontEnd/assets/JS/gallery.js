/** RECUPERATION DES PROJETS DEPUIS L'API, STOCKAGE LOCAL DANS LE NAVIGATEUR ET AFFICHAGE DYNAMIQUE SUR UNE PAGE WEB */


/** Sélection de l'élément HTML avec la classe "gallery" dans le DOM ; cet élément sera utilisé pour afficher les projets */

const gallery = document.querySelector('.gallery');


/** Génération d'un élément HTML 'figure' ajouté à la gallerie depuis la liste de projets 'works' */

const createFigures = (works) => {
    works.forEach((work) => {
        gallery.insertAdjacentHTML('beforeend', `
            <figure id="${work.id}">
                <img src="${work.imageUrl}" alt="${work.title}">
                <figcaption>${work.title}</figcaption>
            </figure>
        `)
    });
}


/** Stockage local au sein du navigateur des projets récupérés depuis l'API */

const stockWorks = async () => {
    const works = await getWorks();
    const worksList = JSON.stringify(works);
    window.sessionStorage.setItem('works', worksList);
}


/** Affichage des projets sur la page du navigateur */

const genererProjects = async () => {
    await stockWorks();

    const works = JSON.parse(window.sessionStorage.getItem('works'))

    createFigures(works);
}

/** Appel de la fonction 'genererProjects' : déclenche le processus de chargement du script */

genererProjects();



