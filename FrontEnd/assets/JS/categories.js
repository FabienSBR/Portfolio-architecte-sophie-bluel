const filters = document.getElementById('filters');

/**
 * Fonction qui créée les boutons'categories' de manière dynamique
 */
const generateBtn = async () => {
    const categories = await getCategories();
    const catList = JSON.stringify(categories);
    window.localStorage.setItem('categories', catList);

    categories.forEach(category => {
        const btn = `<button id="${category.id}" class="filter"> ${category.name}</button>`;
        filters.insertAdjacentHTML('beforeend', btn);
    })
}

/**
 * Fonction qui trie les projets par catégorie
 */
const sortWorks = () => {
    const localWorks = JSON.parse(window.localStorage.getItem('works'));
    const sortButtons = document.querySelectorAll('.filter');
    sortButtons.forEach(sortButton => {
        sortButton.addEventListener('click', (event) => {
            if (item => item.categoryId === event.target.id) {
                const selectedWorks = localWorks.filter(item => item.categoryId == event.target.id);
                gallery.innerHTML = "";
                createFigures(selectedWorks);
            }
            if (event.target.id === '0') {
                gallery.innerHTML = "";
                createFigures(localWorks);
            }
        })
    })
}

/**
 * Fonction qui gère les filtres
 */const manageCategories = async () => {
    await generateBtn();
    sortWorks()
}
manageCategories()