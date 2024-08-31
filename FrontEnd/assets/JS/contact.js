/** GESTION DE LA VALIDATION DU FORMULAIRE DE CONTACT */


/** Logique de validation du formulaire de contact */

const checkContact = () => {
    const form = document.getElementById('formContact');

    /** Ecouteur d'évènement 'submit' */
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        /** Sélection des champs du formulaire : 'name', 'email' et 'message' */
        const contactName = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        /** Vérification que les 3 champs obligatoires sont remplis ; si un champ est vide il est mis en évidence par une bordure rouge */
        if (!contactName.value) {
            contactName.style.border = "2px solid red";
        } else if (!email.value) {
            email.style.border = "2px solid red";
        } else if (!message.value) {
            message.style.border = "2px solid red";

        /** Génération du lien 'mailto:' si les champs sont correctement remplis : l'utilisateur est redirigé vers son client de messagerie */
        } else {
            location.href = `mailto:sophie.bluel@test.tld
        ?subject=${contactName.value} aimerait vous contacter
        &body= Merci de répondre sur cette adresse :%0D%0A${email.value} %0D%0A %0D%0AContenu du message :%0D%0A${message.value}`
            form.reset(); /** le formulaire est réinitialisé suite à l'envoi */
        }
    })
}

/** Appel de la fonction 'checkContact' pour que la validation du formulaire soit active dès que le script est chargé */

checkContact();