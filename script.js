// Obtener parámetros de URL
const urlSearchParams = new URLSearchParams(window.location.search);
const messageCustom = urlSearchParams.get('message');

// Personalizar el mensaje si se proporciona uno
if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage');
  mainMessageElement.textContent = decodeURI(messageCustom);
}

// Selección de elementos
const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');
const coverElement = document.querySelector('.cover');
const paperElement = document.querySelector('.paper');
const heartElement = document.querySelector('.heart');

// Inicializar estado
btnCloseElement.disabled = true;

// Función para abrir la carta
function openCard() {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;
  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1;
    paperElement.classList.add('open-paper');
    heartElement.style.display = 'block';
  }, 500);
}

// Función para cerrar la carta
function closeCard() {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;
  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.zIndex = 0;
    coverElement.classList.remove('open-cover');
    heartElement.style.display = 'none';
  }, 500);
}

// Event listeners
btnOpenElement.addEventListener('click', openCard);
btnCloseElement.addEventListener('click', closeCard);
