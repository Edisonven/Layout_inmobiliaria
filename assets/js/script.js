const propiedadesVenta = [
  {
    nombre: "Apartamento con piscina",
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion:
      "Este hermoso apartamento ofrece piscina, bar entre otros detalles",
    ubicacion: "Britsh Columbia, CA, 250",
    habitaciones: 3 + " habitaciones",
    baños: 2 + " Baños",
    costo: "Precio $" + 4000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento de 2 pisos",
    src: "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?auto=format&fit=crop&q=80&w=2028&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion:
      "Este hermoso apartamento ofrece piscina, bar entre otros detalles",
    ubicacion: "Britsh Columbia, CA, 250",
    habitaciones: 2 + " habitaciones",
    baños: 2 + " Baños",
    costo: "Precio $" + 6000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casas en avenida",
    src: "https://images.unsplash.com/photo-1610569244414-5e7453a447a8?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion:
      "Este hermoso apartamento ofrece piscina, bar entre otros detalles",
    ubicacion: "Britsh Columbia, CA, 250",
    habitaciones: 3 + " habitaciones",
    baños: 2 + " Baños",
    costo: "Precio $" + 4000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento de 2 pisos",
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1984&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion:
      "Este hermoso apartamento ofrece piscina, bar entre otros detalles",
    ubicacion: "Britsh Columbia, CA, 250",
    habitaciones: 4 + " habitaciones",
    baños: 4 + " Baños",
    costo: "Precio $" + 3000,
    smoke: true,
    pets: true,
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
            <span class="card__info__text">${propiedad.habitaciones}</span>
            <img src="./assets/images/bath.svg" alt="" class="card__icon card__icon--bath">
            <span class="card__info__text">${propiedad.baños}</span>
        </div>
        <p class="card__price">${propiedad.costo}</p>
        <div class="card__inportant__info__container">
            <div class="card__inportant__info" id="info1"> </div>
            <div class="card__inportant__info" id="info2"> </div>
        </div>
    </div>
  </div>
  `;
  cardsContainer.innerHTML += template;

  if (propiedad.smoke) {
    let info1 = document.getElementById("info1");
    let smoking = `<img src="./assets/images/smoking_rooms_FILL1_wght400_GRAD0_opsz24.svg" alt=""class="card__icon card__icon--smooking">
                   <span class="card__inportant__info__text card__inportant__info__text--smooking">Se permite fumar</span>`;
    info1.innerHTML += smoking;
  } else {
    let info1 = document.getElementById("info1");
    let smoking = `<img src="./assets/images/cigarette.svg" alt=""class="card__icon card__icon--no-smooking">
                   <span class="card__inportant__info__text card__inportant__info__text--no-smooking">No se permite fumar</span>`;
    info1.innerHTML += smoking;
  }
  if (propiedad.pets) {
    let info2 = document.getElementById("info2");
    let pet = `<img src="./assets/images/pets.svg" alt="" class="card__icon">
               <span class="card__inportant__info__text card__inportant__info__text--pets">Se permiten mascotas</span>`;
    info2.innerHTML += pet;
  } else {
    let info2 = document.getElementById("info2");
    let pet = `<img src="./assets/images/block.svg" alt="" class="card__icon">
               <span class="card__inportant__info__text card__inportant__info__text--no-pets">No se permiten mascotas</span>`;
    info2.innerHTML += pet;
  }
}
