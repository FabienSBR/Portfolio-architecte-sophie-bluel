/**REQUETE A L'API (SECURISEE) */

/**Fonction qui génère l'objet d'en-tête HTTP qui va être utilisé dans la requête réseau (en l'occurence "fetch") */
const generateHeader = () => {
    const token = window.sessionStorage.getItem("token"); /**Récupération du token dans le stockage local du navigateur */
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };
}

/**Fonction asynchrone (utilise "await") qui effectue une requête HTTP à une URL donnée et retourne les données JSON de la réponse */
const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    return await response.json();
}



/** RECUPERATION DES PROJETS (WORKS) DEPUIS L'API */

const getWorks = async () => {
    return fetchData('http://localhost:5678/api/works', { method: 'GET' });
}

/** RECUPERATION DES CATEGORIES DEPUIS L'API */

const getCategories = async () => {
    return fetchData('http://localhost:5678/api/categories', { method: 'GET' });
}

/** SUPPRESSION DE PROJET DANS L'API */

const deleteWork = async (projectId) => {
    return fetch(`http://localhost:5678/api/works/${projectId}`, { method: 'DELETE', headers: generateHeader() })
}

/** CREATION DE PROJET DANS L'API */

const sendForm = async (addedProject) => {
    const token = window.sessionStorage.getItem("token");
    const options = {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: addedProject
    };
    return await fetch(`http://localhost:5678/api/works`, options);
}