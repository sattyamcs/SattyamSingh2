// console.log("Hello Testing")

const mobileNav = document.querySelector(".mobile-navbar-btn")
const navHeader = document.querySelector(".header")

const toggleNavbar =()=>{
    // window.alert("Hi")
    navHeader.classList.toggle("active")
};

mobileNav.addEventListener("click",()=>toggleNavbar())