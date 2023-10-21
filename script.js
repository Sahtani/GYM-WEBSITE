// BUREDER MENU
let menu = document.getElementById("nav");
let list=document.getElementById("list");
console.log(list);
list.onclick=function(){
    if(menu.style.display === "block") {
        menu.style.display="none";
    }else {
        menu.style.display="block";
    }
}


// FAQ ANSWER

const faqs = document.querySelectorAll('.check'); 
faqs.forEach(check => {
   const answer=check.querySelector('.answer');
   check.addEventListener('click',()=>{
        answer.classList.toggle("active")

    });

})



//REJEX
const form = document.getElementById("myform");
        const result = document.getElementById("result");

        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Empêche l'envoi par défaut du formulaire

            if (form.checkValidity()) {
                result.innerHTML = "Le formulaire est valide.";
                result.style.display="block";

            } else {
                result.innerHTML = "Le formulaire contient des erreurs. Veuillez vérifier les champs.";
                result.style.display="block";
            }
        });