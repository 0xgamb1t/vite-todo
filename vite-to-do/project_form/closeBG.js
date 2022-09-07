const closeForm = (() => {
    const bg = document.querySelector('.project-modal-bg')

    bg.addEventListener('click', (e) => {
        const isClosest = e.target.closest('.project-modal-content');
        if(!isClosest){
            return bg.classList.remove("active");
        } else {
            console.log('closest element clicked');
            return
        }
    })
})();