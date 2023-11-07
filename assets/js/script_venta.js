const propiedadesVenta = [
  {
    nombre: "Apartamento con piscina",
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion:
      "Este hermoso apartamento ofrece piscina, bar entre otros detalles",
    ubicacion: "Britsh Columbia, CA, 250",
    habitaciones: 3,
    baños: 2,
    costo: 4000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento de 2 pisos",
    src: "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?auto=format&fit=crop&q=80&w=2028&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Esta propiedad está bubicada en un sitio muy tranquilo",
    ubicacion: "Fuente del Gallo 90",
    habitaciones: 2,
    baños: 2,
    costo: 6000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casas en avenida",
    src: "https://images.unsplash.com/photo-1610569244414-5e7453a447a8?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Hermosas casas con ubicadas centricamente",
    ubicacion: "4654 Palmer Road",
    habitaciones: 3,
    baños: 2,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento de 2 pisos",
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1984&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Apartamento ubicado en barrio residencial",
    ubicacion: "2564 Levy Court",
    habitaciones: 4,
    baños: 2,
    costo: 4700,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio NuevaVida",
    src: "https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Apartamento y casas ubicadas en condominio",
    ubicacion: "Britsh Columbia, CA, 250",
    habitaciones: 3,
    baños: 2,
    costo: 3800,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio NuevaEra",
    src: "https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Casas ubicadas en condominio (estacionamientos incluídos)",
    ubicacion: "2505 Duncan Avenue",
    habitaciones: 3,
    baños: 4,
    costo: 7000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa con amplio estacionamiento",
    src: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Esta casa tiene espacio para aparcar hasta 4 vehículos",
    ubicacion: "546 Reynolds Alley",
    habitaciones: 4,
    baños: 2,
    costo: 6000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casas acogedoras en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Casas con hasta 2 pisos para familias pequeñas",
    ubicacion: "Britsh Columbia, CA, 250",
    habitaciones: 2,
    baños: 1,
    costo: 3000,
    smoke: true,
    pets: false,
  },
];

const propiedadesAlquiler = [
  {
    nombre: "",
    src: "",
    descripcion: "",
    ubicacion: "",
    habitaciones: 0,
    costo: 0,
    smoke: false,
    pets: true,
  },
];

let cardsContainer = document.getElementById("section1");

for (const propiedad of propiedadesVenta) {
  let smoke = "";
  let pets = "";
  if (propiedad.smoke) {
    smoke = `<img src="./assets/images/smoking_rooms_FILL1_wght400_GRAD0_opsz24.svg" alt="" class="card__icon card__icon--smooking">
             <span class="card__inportant__info__text card__inportant__info__text--smooking">Se permite fumar</span>`;
  } else {
    smoke = `<img src="./assets/images/cigarette.svg" alt="" class="card__icon card__icon--no-smooking">
             <span class="card__inportant__info__text card__inportant__info__text--no-smooking">No se permite fumar</span>`;
  }
  if (propiedad.pets) {
    pets = `<img src="./assets/images/pets.svg" alt="" class="card__icon">
            <span class="card__inportant__info__text card__inportant__info__text--pets">Se permiten mascotas</span>`;
  } else {
    pets = `<img src="./assets/images/block.svg" alt="" class="card__icon">
            <span class="card__inportant__info__text card__inportant__info__text--no-pets">No se permiten mascotas</span>`;
  }

  let template = `
  <div class="card__body__container">
    <img src="${propiedad.src}" alt="" class="card__img">
    <div class="card__body">
        <h1 class="card__title">${propiedad.nombre}</h1>
        <p class="card__description">${propiedad.descripcion}</p>
        <div class="card__direction">
            <img src="./assets/images/location.svg" alt="" class="card__icon card__icon--location">
            <p class="card__text">${propiedad.ubicacion}</p>
        </div>
        <div class="card__info">
            <img src="./assets/images/bed.svg" alt="" class="card__icon card__icon--bed">
            <span class="card__info__text">${propiedad.habitaciones} Habitaciones</span>
            <img src="./assets/images/bath.svg" alt="" class="card__icon card__icon--bath">
            <span class="card__info__text">${propiedad.baños} Baños</span>
        </div>
        <p class="card__price">Precio: $${propiedad.costo}</p>
        <div class="card__inportant__info__container">
            <div class="card__inportant__info" id="info1">${smoke} </div>
            <div class="card__inportant__info" id="info2">${pets}</div>
        </div>
    </div>
  </div>
  `;
  cardsContainer.innerHTML += template;
}
