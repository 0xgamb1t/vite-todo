const closeForm = (() => {
    const closeBtn = document.getElementById('form-close-btn')

    closeBtn.addEventListener('click', () => {
        document.querySelector('.project-modal-bg').classList.remove('active')
    })
})();