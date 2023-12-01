document.getElementById("toggleUserMenu").addEventListener("click", function() {
    let userMenu = document.getElementById("userMenu")
    if (userMenu.classList.contains("show")) {
        userMenu.classList.remove("show")
    } else {
        userMenu.classList.add("show")
    }
})





