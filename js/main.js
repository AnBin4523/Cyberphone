document.querySelector(".fa-sun").onclick = function () {
    document.querySelector(".fa-sun").style.display = "none";
    document.querySelector(".fa-moon").style.display = "block";

    // dua class dark vao body
    document.querySelector("body").classList.toggle("dark");
}

// ktra dom khac null thi moi onclick
document.querySelector(".fa-moon").onclick = function () {
    document.querySelector(".fa-moon").style.display = "none";
    document.querySelector(".fa-sun").style.display = "block";

    document.querySelector("body").classList.toggle("dark");
}