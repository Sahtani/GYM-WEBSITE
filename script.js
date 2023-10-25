
// BURGER MENU
const hamburger = document.querySelector("#list");
const navMenu = document.querySelector(".nav-links");


// hamburger navigation
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

}))

// FAQ ANSWER

const faqs = document.querySelectorAll('.check'); 
faqs.forEach(check => {
   const answer=check.querySelector('.answer');
   check.addEventListener('click',()=>{
        answer.classList.toggle("active")

    });

})

