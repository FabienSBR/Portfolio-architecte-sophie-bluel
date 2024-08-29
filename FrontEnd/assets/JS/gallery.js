const gallery = document.querySelector('.gallery');

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

const stockWorks = async () => {
    const works = await getWorks();
    const worksList = JSON.stringify(works);
    window.localStorage.setItem('works', worksList);
}

const genererProjects = async () => {
    await stockWorks();

    const works = JSON.parse(window.localStorage.getItem('works'))

    createFigures(works);
}

genererProjects();



