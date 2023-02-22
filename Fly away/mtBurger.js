let open = false;

document.querySelector("#bar").addEventListener("click", () => {
    open = !open;
    document.querySelector("#id_nav_show_hide").style.display = open ? "none" : "flex";
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
        document.querySelector("#id_nav_show_hide").style.display = "flex";
    }
})

