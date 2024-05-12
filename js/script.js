let dataProfe = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Rodriguez",
    titulo: "Entrenador Personal",
    imagen: "./images/Trainer1.jpg",
    descripcion: '"Apasionado por el fitness, disfruto guiar a otros hacia una vida más sana, viendo su transformación como mi mayor motivación."',
  },
  {
    id: 2,
    nombre: "Mirtha",
    apellido: "Legrand",
    titulo: "Entrenadora Personal",
    imagen: "./images/Trainer2.jpg",
    descripcion: '"Entrenador comprometido, me encanta ayudar a mis clientes a lograr sus metas, emocionándome con su progreso y fortaleza."',
  },
  {
    id: 3,
    nombre: "Carla",
    apellido: "Martinez",
    titulo: "Profesora Ed. Física",
    imagen: "./images/Trainer3.jpg",
    descripcion: '"Amante del bienestar, personalizo soluciones para mejorar la vida de mis clientes, encontrando conexión en nuestras metas compartidas."',
  },
  {
    id: 4,
    nombre: "Jorge",
    apellido: "Maldonado",
    titulo: "Profesor Ed. Física",
    imagen: "./images/Trainer4.jpg",
    descripcion: '"Obsesionado con el ejercicio, busco desafiar y motivar constantemente, orgulloso de ver su determinación y avances."',
  },
  {
    id: 5,
    nombre: "Juana",
    apellido: "Perez",
    titulo: "Profesora Ed. Física",
    imagen: "./images/Trainer5.jpg",
    descripcion: '"Transformar vidas es mi pasión como entrenador, emocionándome al verlos alcanzar un estilo de vida más saludable y activo."',
  },
  {
    id: 6,
    nombre: "Anabela",
    apellido: "Perez",
    titulo: "Profesora Ed. Física",
    imagen: "./images/Trainer6.jpg",
    descripcion: '"Adicto al fitness, me apasiona ayudar a otros a descubrir su potencial, emocionándome con cada obstáculo superado y resultado logrado."',
  },
];

cad = ``;
for (let profe of dataProfe) {
  cad =
    cad +
    `
    <div class="cards">
    <div class="flip-card">
    <div class="flip-card-front">
      <img class="imgProfe" src="${profe.imagen}" alt="" >
    </div>
    <div class="flip-card-back">
      <h1>${profe.nombre} ${profe.apellido}</h1>
      <p>${profe.titulo}</p>
      <p class="profe_desc" >${profe.descripcion}</p>
    </div>
  </div>
  </div>
  `;
}

document.querySelector(".equipos").innerHTML = cad;

let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelector(".slides").children;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
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
