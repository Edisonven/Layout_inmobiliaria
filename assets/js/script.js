const propiedadesVenta = [
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 4 + " habitaciones",
    baños: 4 + " Baños",
    costo: "Precio $" + 5000,
    smoke: false,
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
  const template = `
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
            <div class="card__inportant__info">
                <img src="./assets/images/cigarette.svg" alt=""
                    class="card__icon card__icon--no-smooking">
                <span
                    class="card__inportant__info__text card__inportant__info__text--no-smooking">No
                    se permite fumar</span>
            </div>
            <div class="card__inportant__info">
                <img src="./assets/images/block.svg" alt="" class="card__icon">
                <span class="card__inportant__info__text card__inportant__info__text--no-pets">No se
                    permiten mascotas</span>
            </div>
        </div>
     </div>
  </div>
  `;
  cardsContainer.innerHTML = template;
}
