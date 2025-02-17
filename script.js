let menu = document.querySelector('.header .menu');

document.querySelector('#menu-btn').onclick = () =>{
    menu.classList.toggle('active');
}

window.onscroll =() =>{
    menu.classList.remove('active');
}
document.getElementById("menu-btn").addEventListener("click", function() {
    document.querySelector(".menu").classList.toggle("active");
});
