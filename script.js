let menu = document.querySelectorAll(".anav")

menu.forEach((anav =>{
    anav.addEventListener("click",(e)=>{
        menu.forEach(anav => {
            anav.classList = "anav"
        })
        e.target.classList.toggle(("new_menu"))
    })
}))

