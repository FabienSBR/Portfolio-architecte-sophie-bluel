/****** ELEMENT HTML *********/
const modalPageTwo = `<div class="popupNav">
            <button class="btnPopup closePopup">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <button class=" btnPopup previousScreen">
                <i class="fa-solid fa-arrow-left"></i>
            </button>
        </div>
        <div class="page-two">
			<h3>Ajout photo</h3>
			<form action="POST"  class="createProject" id="createProject">
				<div class="selectPhoto">
					    <label for="explore" class="notice"><i class="fa-regular fa-image"></i></label>
					    <input id="explore" type="file" accept=".png,.jpeg,.jpg">
                        <div id="btnAddPhoto" class="notice">+ Ajouter photo</div>
					    <p class="notice">jpg, png : 4mo max</p>
                    <img class="prevNewProject" src="#">
				</div>
				<label for="title">Titre</label>
				<input type="text" name="title" id="projectName">
				<label for="projectCategory">Catégorie :</label>
				<select name="category" id="projectCategory">
                    <option value="">Choisir une catégorie</option> 
                </select>
                <div class="errorBox"></div>
				<div class="lineDecor">
                    <input class="btnAdd" id="btnAdd" type="submit" value="Valider" disabled>
		        </div>
            </form>
		</div>`

//*********** FONCTION PRINCIPALE **************/

/**
 * Fonction principale qui crée la deuxième page de la modale
 */
const displayPageTwo = () => {
    const popupContent = document.querySelector('.popupContent');
    const newProject = document.querySelector('.newProject');

    newProject.addEventListener("click", (event) => {
        event.preventDefault();
        popupContent.innerHTML = "";
        popupContent.insertAdjacentHTML("beforeend", modalPageTwo);
        showPreview();
        generateOptions();
        closeModal();
        returnPrevious();
        validForm();
        publishProject();

    })
}

//*********** FONCTIONS SECONDAIRES **************/

/**
 * Fonction qui affiche l'aperçu de l'image sélectionnée
 */
const showPreview = () => {
    const explore = document.getElementById('explore');
    const prevNewProject = document.querySelector('.prevNewProject');
    const notice = document.querySelectorAll('.notice');

    
    explore.addEventListener('change', (event) => {
        if (event.target.files.length > 0) {
            prevNewProject.src = URL.createObjectURL(event.target.files[0]);
            prevNewProject.style.display = "block";
            notice.forEach((item) => {
                item.hidden = true
            })
        }
        else {
            prevNewProject.style.display = "none";
            notice.forEach((item) => {
                item.hidden = false
            })
        }
    })
}

/**
 * Fonction qui créée les options du formulaire de manière dynamique
 */
const generateOptions = () => {
    const catList = JSON.parse(window.localStorage.getItem('categories'));

    catList.forEach(item => {
        const baliseSelect = document.getElementById('projectCategory');
        const catOption = `<option value="${item.id}">${item.name}</option>`;
        baliseSelect.insertAdjacentHTML('beforeend', catOption);
    })
}
