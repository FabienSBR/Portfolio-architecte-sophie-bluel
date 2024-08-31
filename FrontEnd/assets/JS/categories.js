/** GENERATION DES BOUTONS DE FILTRES DE MANIERE DYNAMIQUE A PARTIR DES CATEGORIES RECUPEREES VIA L'API
 * + TRIE DES PROJETS AFFICHES EN FONCTION DE CES CATEGORIES */


/** Sélection de l'élément HTML avec l'ID 'filters' dans le DOM ; élément utilisé pour insérer les boutons de filtres correspondant aux catégories */

const filters = document.getElementById('filters');


/** Création des boutons pour chaque catégorie de manière dynamique, et ajout à l'élément 'filters' */

const generateBtn = async () => {
    const categories = await getCategories();
    const catList = JSON.stringify(categories);
    window.sessionStorage.setItem('categories', catList);

    categories.forEach(category => {
        const btn = `<button id="${category.id}" class="filter"> ${category.name}</button>`;
        filters.insertAdjacentHTML('beforeend', btn);
    })
}


/** Gestion du tri des projets en fonction des catégories sélectionnées par l'utilisateur en cliquant sur les boutons */

const sortWorks = () => {
    const localWorks = JSON.parse(window.sessionStorage.getItem('works'));
    const sortButtons = document.querySelectorAll('.filter');
    sortButtons.forEach(sortButton => {
        sortButton.addEventListener('click', (event) => {
            if (item => item.categoryId === event.target.id) {
                const selectedWorks = localWorks.filter(item => item.categoryId == event.target.id);
                gallery.innerHTML = "";
                createFigures(selectedWorks); /** Affiche uniquement les projets filtrés */
            }
            if (event.target.id === '0') {
                gallery.innerHTML = "";
                createFigures(localWorks); /** Affiche tous les projets */
            }
        })
    })
}


/** Fonction qui gère l'ensemble du processus : elle génère d'abord les boutons de catégories, puis configure le tri des projets en fonction de ces catégories */

    const manageCategories = async () => {
    await generateBtn();
    sortWorks()
}

/** Appel de la fonction 'manageCategories' : déclenche le processus de chargement du script */

manageCategories()