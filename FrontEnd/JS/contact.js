/**
 * Vérifie que le formulaire de contact est correctement rempli et construit le message
 */
const checkContact = () => {
    const form = document.getElementById('formContact');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const contactName = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        if (!contactName.value) {
            contactName.style.border = "2px solid red";
        } else if (!email.value) {
            email.style.border = "2px solid red";
        } else if (!message.value) {
            message.style.border = "2px solid red";
        } else {
            location.href = `mailto:sophie.bluel@test.tld
        ?subject=${contactName.value} aimerait vous contacter
        &body= Merci de répondre sur cette adresse :%0D%0A${email.value} %0D%0A %0D%0AContenu du message :%0D%0A${message.value}`
            form.reset();
        }
    })
}

checkContact();