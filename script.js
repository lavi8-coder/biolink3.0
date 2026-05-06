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
