
let dataProfe = [
  {
      id: 1,
      nombre: "Juan",
      apellido: "Rodriguez",
      titulo: "Entrenador Personal",
      imagen: "./images/Trainer1.jpg",
      descripcion: "afadfshfkjdbfk"
  },
  {
    id: 2,
    nombre: "Mirtha",
    apellido: "Legrand",
    titulo: "Entrenadora Personal",
    imagen: "./images/Trainer2.jpg",
    descripcion: "afadfshfkjdbfk"
},
{
  id: 3,
  nombre: "Carla",
  apellido: "Martinez",
  titulo: "Profesora Ed. Física",
  imagen: "./images/Trainer3.jpg",
  descripcion: "afadfshfkjdbfk"
},
{
  id: 4,
  nombre: "Jorge",
  apellido: "Maldonado",
  titulo: "Profesor Ed. Física",
  imagen: "./images/Trainer4.jpg",
  descripcion: "afadfshfkjdbfk"
},
{
  id: 5,
  nombre: "Juana",
  apellido: "Perez",
  titulo: "Profesora Ed. Física",
  imagen: "./images/Trainer5.jpg",
  descripcion: "afadfshfkjdbfk"
},
{
  id: 6,
  nombre: "Anabela",
  apellido: "Perez",
  titulo: "Profesora Ed. Física",
  imagen: "./images/Trainer6.jpg",
  descripcion: "afadfshfkjdbfk"
},
]

cad = ``
for (let profe of dataProfe) {
    cad = cad + `
    <div class="cards">
    <div class="flip-card">
    <div class="flip-card-front">
      <img class="imgProfe" src="${profe.imagen}" alt="" >
    </div>
    <div class="flip-card-back">
      <h1>${profe.nombre} ${profe.apellido}</h1>
      <p>${profe.titulo}</p>
      <p>${profe.descripcion}</p>
    </div>
  </div>
  </div>
  `
}

document.querySelector(".equipos").innerHTML=cad

let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelector(".slides").children;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
}

setInterval(nextSlide, 4000);

function nextSlide() {
  showSlides();
}

function prevSlide() {
  slideIndex -= 2;
  if (slideIndex < 0) {
    slideIndex = document.querySelector(".slides").children.length - 1;
  }
  showSlides();
}