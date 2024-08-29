const generateHeader = () => {
    const token = window.localStorage.getItem("token");
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };
}

const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    return await response.json();
}

/**
 * Recuperation des projets depuis l'API
 * @returns
 */
const getWorks = async () => {
    return fetchData('http://localhost:5678/api/works', { method: 'GET' });
};

/**
 * Récupération des categories depuis l'API
 *  * @returns
 */
const getCategories = async () => {
    return fetchData('http://localhost:5678/api/categories', { method: 'GET' });
}

/**
 * Supprimer un projet dans l'API //////////// a verifier après resolution du pb backend
 * @param {*} projectId
 */
const deleteWork = async (projectId) => {
    return fetch(`http://localhost:5678/api/works/${projectId}`, { method: 'DELETE', headers: generateHeader() })
}

/**
 * Créer un projet dans l'API //////////// a verifier après resolution du pb backend
 */
const sendForm = async (addedProject) => {
    const token = window.localStorage.getItem("token");
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