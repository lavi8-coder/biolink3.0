
const pulsante = document.getElementById('theme-toggle');
const corpo = document.body;
pulsante.addEventListener('click', () => {
corpo.classList.toggle('dark-mode');

 if (corpo.classList.contains('dark-mode')) {
 pulsante.innerText = "☀️ Modalità Luce";
 } else {
 pulsante.innerText = "🌙 Modalità Notte";
 }

 });
$(document).ready(function() {

$("table").hide().fadeIn(2000);
document.getElementById('contact-form')
.addEventListener('submit', function(e) {

const email =
document.getElementById('email').value;

if (!email.includes('@')) {

e.preventDefault();

alert("Inserisci un indirizzo email valido!");

}

});

});
