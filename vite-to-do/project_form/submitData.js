const submitData = (() => {
    let data = []
    const submitBtn = document.getElementById('project-form-submit')

    submitBtn.addEventListener('click', (e) => {
        //take all the data in the form and add it to the dataArray
        e.preventDefault();

        const projectForm = document.getElementById('project-form')
        const formData = new FormData(projectForm);
        const formProps = Object.fromEntries(formData);
        console.log(formProps);

        //if data is valid push data to the array
        data.push(formProps)
        console.log(data);
    });    
})();



