    const loaderSpinner = document.getElementsByClassName("loader")[0];
    console.log(loaderSpinner);

    const fadeoutLoader = () => {
        loaderSpinner.style.opacity = "0"
    }

    const showLoader = () => {
        loaderSpinner.style.opacity = "1"
    }
    
    const hideLoader = () => {
        fadeoutLoader();

        setTimeout(( ) => {
            loaderSpinner.style.display = "none"
        }, 2000)
    }

    
    hideLoader()





    
