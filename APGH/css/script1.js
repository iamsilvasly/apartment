const spinnerWapperEl = document.querySelector ('.spinner-wrapper');


window .addEventListener('load',()=>{
    spinnerWapperEl .style.opacity= '0';
    

    setTimeout(() => {
        spinnerWapperEl .style.display= 'none';
    }, 200)
})












