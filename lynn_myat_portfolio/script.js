//adding sticky nav bar
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY >= 55);
})
//adding focus on Contact Form
document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll(".contact_input");



    inputs.forEach((ipt) => {
        ipt.addEventListener("focus", () => {
            ipt.parentNode.classList.add("focus")
            ipt.parentNode.classList.add("not-empty");
        })

        ipt.addEventListener("blur", () => {
            if (ipt.value == "") {
                ipt.parentNode.classList.remove("not-empty");
            }

            ipt.parentNode.classList.remove("focus");

        })
        const storedValue = localStorage.getItem(ipt.name);

        if(storedValue)
        {
            ipt.value = storedValue;
            ipt.parentNode.classList.add("not-empty");
        }

        ipt.addEventListener("input", () =>
        {
            localStorage.setItem(ipt.name, ipt.value);
        })
    })

})
//dark
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun"

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";

const getCurrenticon = () => themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

if(selectedTheme)
{
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"] (darkTheme);

    themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"] (iconTheme);

    if(selectedTheme==="dark")
    {
        themeButton.style.color = '#fff';
    }
   
}

themeButton.addEventListener('click' , () =>
{
    document.body.classList.toggle(darkTheme);

    themeButton.classList.toggle(iconTheme);
    themeButton.classList.toggle("bx-moon");

    if (getCurrentTheme() ==="dark")
    {
        themeButton.style.color = '#fff';

    }else{
        themeButton.style.color = "";
    }

    document.body.style.transition = "background-color 1s";

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrenticon());
});

document.body.addEventListener('transitioned', () =>{
    document.body.style.transition = "";
})
//hidden menu
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = (e) => {
    e.preventDefault();

    menu.classList.toggle("bx-x");

    navbar.classList.toggle("open");


};

let navlinks = document.querySelectorAll(".nav-link");

navlinks.forEach((link) => {
    link.addEventListener("click", (e) =>
    {
        e.preventDefault();

        let targetId = link.querySelector("a").getAttribute("href");

        document.querySelector(targetId).scrollIntoView({behavior: "smooth"});

        if(navbar.classList.contains("open")){
            menu.classList.toggle("bx-x");
            navbar.classList.toggle("open");
        }
    })
});

