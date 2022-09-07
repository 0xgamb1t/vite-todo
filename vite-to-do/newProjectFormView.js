const newProjectView = (() => {
    const newProjectBtn = document.getElementById('new-project-btn')

    newProjectBtn.addEventListener('click', () => {
        //create newProjectView
        //for now just activate the element:
        document.querySelector('.project-modal-bg').classList.add('active')
    })
})();
