const button = document.querySelector(".btn-menu");


button.addEventListener("click", () => {
    
    toggleMenu();
    
});

function toggleMenu() {

    const menu = document.querySelector(".menu");
    const bgHidden = document.querySelector(".bg-hidden");
    const hidden = menu.hidden;

    if (hidden) {

        menu.classList.add("show");
        bgHidden.classList.add("show");

    } else {

        menu.classList.remove("show");
        bgHidden.classList.remove("show");

    }

    toggleButtonIcon(hidden);

    menu.hidden = !hidden;

}

function toggleButtonIcon(hidden) {

    const src = hidden ? "/src/assets/images/icon-close.svg" : "/src/assets/images/icon-menu.svg";

    button.querySelector("img").src = src;

}