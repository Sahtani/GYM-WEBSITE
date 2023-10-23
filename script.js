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

// REJEX
document.getElementById('myform').addEventListener('submit', function (e) {
  e.preventDefault();
      const fullname = document.getElementById("name").value; 
      const email = document.getElementById("email").value;
      const cin = document.getElementById("cin").value;
      const telephone = document.getElementById("phone").value;
      const result = document.getElementById("result");
      
      const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+\s[A-Za-zÀ-ÖØ-öø-ÿ]+$/;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const cinRegex = /^HH[0-9]{5}$/;
      const numberRegex = /^\+212[0-9]{9}$/;

      if (!fullname.match(nameRegex)) {
        alert("Name Invalid.");
        return false;
      }
      if (!email.match(emailRegex)) {
        alert("Email Invalid.");
        return false;
      }
      if (!cin.match(cinRegex)) {
        alert("CIN invlaid.");
        return false;
      }

      if (!telephone.match(numberRegex)) {
        alert("Le numéro de téléphone doit commencer par +212 suivi de 9 chiffres.");
        return false;
      }
      result.innerHTML = "Le formulaire est valide.";
                result.style.display="block";

    }
  

)

