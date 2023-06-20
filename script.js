const destinosTuristicos = [
  {
    id: 1,
    nombre: "Salto Ángel",
    descripcion:
      "Embárcate en una aventura épica hacia el majestuoso Salto Ángel en Venezuela. Descubre la cascada más alta del mundo y maravíllate con su belleza imponente.",
    imagen:
      "https://c4.wallpaperflare.com/wallpaper/499/529/311/cliff-waterfall-tropical-rock-wallpaper-preview.jpg",
    precio: 250,
    disponibilidad: true,
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "Monte Kilimanjaro",
    descripcion:
      "Desafía tus límites y conquista el majestuoso Monte Kilimanjaro en Tanzania. Disfruta de vistas panorámicas increíbles y vive una experiencia inolvidable.",
    imagen:
      "https://c4.wallpaperflare.com/wallpaper/275/115/823/earth-mount-kilimanjaro-mountain-volcano-wallpaper-preview.jpg",
    precio: 500,
    disponibilidad: false,
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "Cataratas del Iguazú",
    descripcion:
      "Sumérgete en la belleza natural de las Cataratas del Iguazú en la frontera entre Argentina y Brasil.",
    imagen:
      "https://c4.wallpaperflare.com/wallpaper/486/350/491/iguazu-falls-wallpaper-preview.jpg",
    precio: 150,
    disponibilidad: true,
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "Gran Barrera de Coral",
    descripcion:
      "Explora el increíble ecosistema marino de la Gran Barrera de Coral en Australia. Sumérgete en aguas cristalinas, admira la diversidad de corales y descubre la vida marina fascinante.",
    imagen: "https://img2.rtve.es/i/?w=1600&i=1524395218444.jpg",
    precio: 300,
    disponibilidad: false,
    cantidad: 1,
  },
  {
    id: 5,
    nombre: "Machu Picchu",
    descripcion:
      "Viaja al pasado y descubre la misteriosa ciudadela de Machu Picchu en Perú. Explora las ruinas incas, disfruta de vistas panorámicas y sumérgete en la historia y la cultura de los antiguos habitantes.",
    imagen:
      "https://c0.wallpaperflare.com/preview/707/587/700/peru-machu-picchu-nature-cusco.jpg",
    precio: 200,
    disponibilidad: true,
    cantidad: 1,
  },
  {
    id: 6,
    nombre: "Santorini",
    descripcion:
      "Disfruta del encanto de la isla de Santorini en Grecia. Relájate en sus playas de aguas cristalinas, contempla las pintorescas casas blancas y azules y déjate cautivar por los atardeceres románticos.",
    imagen:
      "https://c4.wallpaperflare.com/wallpaper/744/487/759/night-in-santorini-wallpaper-preview.jpg",
    precio: 400,
    disponibilidad: true,
    cantidad: 1,
  },
  // {
  //   id: 7,
  //   nombre: "Gran Cañón",
  //   descripcion:
  //     "Contempla la grandiosidad del Gran Cañón en Estados Unidos. Admira los imponentes acantilados, recorre senderos panorámicos y disfruta de vistas espectaculares de una de las maravillas naturales del mundo.",
  //   imagen:
  //     "https://www.elagoradiario.com/wp-content/uploads/2020/01/Gran-Ca%C3%B1%C3%B3n.jpg",
  //   precio: 180,
  //   disponibilidad: true,
  // },
];

const resenaClientes = [
  {
    nombre: "Pedro Almeida",
    descripcion:
      '"Mi viaje al Salto Ángel fue una experiencia increíble. Quedé asombrado por la majestuosidad de la cascada más alta del mundo.¡Fue una aventura épica que nunca olvidaré!"',
    imagen: "https://xsgames.co/randomusers/assets/avatars/male/63.jpg",
    estrellas: "⭐⭐⭐⭐⭐",
    fecha: "20/02/2023",
  },
  {
    nombre: "Clint Davis",
    descripcion:
      '"La ascensión al Kilimanjaro fue desafiante pero gratificante. La vista desde la cima era impresionante, con la vasta sabana africana extendiéndose hasta donde alcanza la vista."',
    imagen: "https://xsgames.co/randomusers/assets/avatars/male/46.jpg",
    estrellas: "⭐⭐⭐⭐",
    fecha: "20/02/2023",
  },
  {
    nombre: "Lucas Fernandez",
    descripcion:
      '"Visitar las Cataratas de Iguazú fue una experiencia de ensueño. Quedé maravillado por la magnitud y la belleza de las cascadas."',
    imagen: "https://xsgames.co/randomusers/assets/avatars/male/74.jpg",
    estrellas: "⭐⭐⭐⭐⭐",
    fecha: "20/02/2023",
  },
  {
    nombre: "Jessica Stones",
    descripcion:
      '"Las Cataratas del Iguazú son una maravilla natural que todo el mundo debería visitar al menos una vez en su vida. "',
    imagen: "https://xsgames.co/randomusers/assets/avatars/female/6.jpg",
    estrellas: "⭐⭐⭐⭐",
    fecha: "20/02/2023",
  },
  {
    nombre: "María Silva",
    descripcion:
      '"Subir al Kilimanjaro fue una experiencia desafiante pero gratificante. Las vistas panorámicas desde la cima son simplemente impresionantes. "',
    imagen: "https://xsgames.co/randomusers/assets/avatars/female/33.jpg",
    estrellas: "⭐⭐⭐⭐⭐",
    fecha: "20/02/2023",
  },
  {
    nombre: "Melissa Clarke",
    descripcion:
      '"El Salto Ángel es simplemente espectacular. La vista de esta imponente cascada te deja sin aliento. El sonido del agua cayendo desde esa altura es una experiencia única. "',
    imagen:
      "https://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg",
    estrellas: "⭐⭐⭐⭐",
    fecha: "20/02/2023",
  },
];

// Container y cards de destinos.
const destinosContainer = document.getElementById("destino");

destinosTuristicos.forEach((destino) => {
  // Crear el elemento de la card
  const card = document.createElement("div");
  card.classList.add("card", "rounded-3", "m-4");
  card.style.width = "23rem";

  // Crear la imagen de la card
  const img = document.createElement("img");
  img.classList.add("card-img-top", "w-100", "h-100");
  img.src = destino.imagen;
  img.alt = destino.nombre;

  // Crear el cuerpo de la card
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "m-4");

  // Crear el título de la card
  const titulo = document.createElement("h2");
  titulo.classList.add("card-title");
  titulo.textContent = destino.nombre;
  titulo.style.color = "rosybrown";

  // Crear la descripción de la card
  const descripcion = document.createElement("p");
  descripcion.classList.add("card-text", "text-black-50");
  descripcion.textContent = destino.descripcion;

  // Crear div row con precio y disponibilidad
  const divInfo = document.createElement("div");
  divInfo.classList.add("d-flex", "flex-row", "justify-content-between");

  // Crear el precio de la card
  const precio = document.createElement("p");
  precio.classList.add("card-text", "fw-bold");

  // Crear el elemento <span> para el valor del precio
  const precioValor = document.createElement("span");
  precioValor.style.color = "green";
  precioValor.textContent = "$ " + destino.precio;

  // Agregar el texto "Precio: $" y el valor del precio al elemento <p>
  precio.innerHTML = `Precio: ${precioValor.outerHTML}`;

  // Crear la disponibilidad de la card
  const disponibilidad = document.createElement("p");
  disponibilidad.classList.add(
    "card-text",
    destino.disponibilidad === true ? "text-success" : "text-danger",
    "fw-bold"
  );
  disponibilidad.textContent = destino.disponibilidad
    ? "Disponible ✅"
    : "No disponible ❌";

  const btn = document.createElement("button");
  btn.classList.add("btn", "w-100", "mt-2", "mb-0");
  btn.style.backgroundColor = "rosybrown";
  btn.style.color = "white";
  btn.textContent = "Reservar ahora 📚";
  btn.disabled = !destino.disponibilidad;

  // Agregar los atributos data-bs-toggle, data-bs-target y aria-controls
  btn.setAttribute("data-bs-toggle", "offcanvas");
  btn.setAttribute("data-bs-target", "#offcanvasRight");
  btn.setAttribute("aria-controls", "offcanvasRight");

  // Agregar evento click al botón
  btn.addEventListener("click", function () {
    addPaquete(destino);
    updateCarrito(destino);
  });

  // Establecer el color de hover
  btn.addEventListener("mouseover", function () {
    this.style.backgroundColor = "#c29b9b";
  });

  // Restaurar el color original al salir del hover
  btn.addEventListener("mouseout", function () {
    this.style.backgroundColor = "rosybrown";
  });

  // Agregar elementos al cuerpo de la card
  cardBody.appendChild(titulo);
  cardBody.appendChild(descripcion);

  // Agregar elementos a divInfo
  divInfo.appendChild(precio);
  divInfo.appendChild(disponibilidad);

  // Agregar la imagen a la card
  card.appendChild(img);

  // Agregar el divInfo al cuerpo de la card
  cardBody.appendChild(divInfo);

  // Agregar el botón al cuerpo de la card
  cardBody.appendChild(btn);

  // Agregar el cuerpo de la card a la card
  card.appendChild(cardBody);

  // Agregar la card al contenedor de destinos
  destinosContainer.appendChild(card);
});

// Container y cards de clientes.
const clientesContainer = document.getElementById("clientes");

resenaClientes.forEach((cliente) => {
  const card = document.createElement("div");
  card.classList.add("card", "rounded-5", "m-4");
  card.style.width = "27rem";

  // Crear la imagen de la card
  const img = document.createElement("img");
  img.classList.add("rounded-circle");
  img.style.width = "60px";
  img.style.height = "60px";
  img.src = cliente.imagen;
  img.alt = cliente.nombre;

  // Crear el cuerpo de la card
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "m-4");

  const divRow = document.createElement("div");
  divRow.classList.add("d-flex", "flex-row", "justify-content-start");

  const divCol = document.createElement("div");
  divCol.classList.add("d-flex", "flex-column", "my-auto", "mx-3");

  const nombre = document.createElement("h3");
  nombre.classList.add("fs-5", "fw-bold", "text-start");
  nombre.textContent = cliente.nombre;

  const descripcion = document.createElement("p");
  descripcion.classList.add("text-black-50", "text-start");
  descripcion.textContent = cliente.descripcion;

  const estrellas = document.createElement("p");
  estrellas.classList.add("mb-0", "text-start");
  estrellas.textContent = cliente.estrellas;

  const fecha = document.createElement("p");
  fecha.classList.add("text-black-50");
  fecha.textContent = cliente.fecha;

  // Agregar al cardBody
  cardBody.appendChild(descripcion);
  cardBody.appendChild(divRow);
  cardBody.appendChild(divCol);

  // cardBody.appendChild(fecha);

  divRow.appendChild(img);
  divCol.appendChild(nombre);
  divCol.appendChild(estrellas);

  divRow.appendChild(divCol);

  // Agregar elementos a la card
  card.appendChild(cardBody);

  clientesContainer.appendChild(card);
});

// Carrito

let total = 0;

let carrito = [];

const carritoContainer = document.getElementById("paquetes");

const addPaquete = (destino) => {
  carrito.push(destinosTuristicos.find((item) => item.id === destino.id));
  total += destino.precio;
  console.log(`Cantidad de ${destino.nombre} actualizada: ${destino.cantidad}`);
  guardarCarritoEnLocalStorage();

  // // POR ACA ME QUEDE
  // if (carrito.length !== 0) {
  //   const btnComprar = document.getElementById("comprar");
  //   btnComprar.classList.add("d-block");
  // }
};

const updateCarrito = (paquete) => {
  const paqueteExistente = document.getElementById("paquete-cart" + paquete.id);

  if (paqueteExistente) {
    // La card del paquete ya existe, solo actualiza la cantidad
    const cantidadTxt = document.getElementById("cant" + paquete.id);
    paquete.cantidad += 1;
    total = carrito.reduce((acc, paquete) => acc + paquete.precio, 0);

    cantidadTxt.textContent = `Cantidad: ${paquete.cantidad}`;
    console.log("Cantidad: " + paquete.cantidad);
  } else {
    paquete.cantidad = 1;
    // Crea una nueva card para el paquete
    const card = document.createElement("div");
    card.classList.add("w-100", "d-flex", "flex-column");
    card.style.width = "23rem";
    card.setAttribute("id", "paquete-cart" + paquete.id);

    const btnRemove = document.createElement("button");
    btnRemove.classList.add("btn-close", "align-self-end", "mb-2");
    btnRemove.addEventListener("click", function () {
      Swal.fire({
        title: "¿Estás seguro/a de esto?",
        text: "¡No podrás revertir esta acción!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Eliminado!",
            text: "Su paquete fue retirado del carrito.",
            icon: "success",
            timer: 1500, // Tiempo en milisegundos
            timerProgressBar: true, // Muestra una barra de progreso durante el tiempo establecido
            allowEscapeKey: false, // Evita que se cierre al presionar la tecla Esc
            showConfirmButton: false,
          });
          deletePaquete(paquete.id);
        }
      });
    });

    // Crear la imagen de la card
    const img = document.createElement("img");
    img.classList.add("card-img-top", "w-100", "h-100");
    img.src = paquete.imagen;
    img.alt = paquete.nombre;

    // Crear el título de la card
    const titulo = document.createElement("h3");
    titulo.classList.add("card-title", "my-2");
    titulo.textContent = `Viaje a ${paquete.nombre}`;
    titulo.style.color = "rosybrown";

    // Crear el precio de la card
    const precio = document.createElement("p");
    precio.classList.add("card-text", "fw-bold", "my-auto");

    // Crear el elemento <span> para el valor del precio
    const precioValor = document.createElement("span");
    precioValor.style.color = "green";
    precioValor.textContent = "$ " + paquete.precio;

    const divRow = document.createElement("div");
    divRow.classList.add("d-flex", "flex-row");
    // Agregar el texto "Precio: $" y el valor del precio al elemento <p>
    precio.innerHTML = `${precioValor.outerHTML}`;

    const cantidadTxt = document.createElement("p");
    cantidadTxt.classList.add("card-text", "fw-bold", "my-auto");
    cantidadTxt.textContent = `Cantidad: ${paquete.cantidad}`;
    cantidadTxt.setAttribute("id", "cant" + paquete.id);

    const hr = document.createElement("hr");
    hr.classList.add("w-100", "my-4");

    card.appendChild(btnRemove);
    card.appendChild(img);
    card.appendChild(titulo);

    divRow.appendChild(precio);

    card.appendChild(divRow);
    card.appendChild(cantidadTxt);
    card.appendChild(hr);

    carritoContainer.appendChild(card);
  }
  createTotalElement();
  createComprarElement();
  guardarCarritoEnLocalStorage();
};

const createTotalElement = () => {
  const indicadorTotal = document.getElementById("total");
  indicadorTotal.innerHTML = ""; // Limpiar el contenido existente

  const textoTotal = document.createElement("p");
  textoTotal.classList.add("fs-4", "fw-bold");
  textoTotal.textContent = `Total: ${total}`;

  indicadorTotal.appendChild(textoTotal);
};

const createComprarElement = () => {
  const btnComprar = document.getElementById("comprar");
  btnComprar.innerHTML = ""; // Limpiar el contenido existente

  const btn = document.createElement("button");
  btn.classList.add(
    "btn",
    carrito.length !== 0 ? "d-block" : "d-none",
    "btn-secondary",
    "w-100",
    "mx-auto"
  );
  btn.textContent = "Comprar";

  btn.setAttribute("data-bs-dismiss", "offcanvas");
  btn.setAttribute("aria-label", "Close");

  btn.addEventListener("click", () => {
    carrito = [];
    localStorage.removeItem("carrito");
    document.getElementById("paquetes").innerHTML = "";
    document.getElementById("total").innerHTML = "";
    document.getElementById("comprar").innerHTML = "";
    total = 0;
    Swal.fire({
      icon: "success",
      title: "¡Compra realizada!",
      showConfirmButton: false,
      timer: 1500,
    });
  });

  btnComprar.appendChild(btn);
};

const deletePaquete = (productoId) => {
  const paqueteEliminado = carrito.find((item) => item.id === productoId);

  if (paqueteEliminado) {
    const cantidadEliminada = paqueteEliminado.cantidad;
    total -= paqueteEliminado.precio * cantidadEliminada;

    carrito = carrito.filter((item) => item.id !== productoId);

    let paqueteElements = document.querySelectorAll(
      "[id='paquete-cart" + productoId + "']"
    );
    paqueteElements.forEach((paqueteElement) => {
      paqueteElement.remove();
    });

    guardarCarritoEnLocalStorage();
    createTotalElement();

    //prueba.

    // if (carrito.length === 0) {
    //   const btnComprar = document.getElementById("comprar");
    //   btnComprar.classList.add("d-none");
    // }
  }
};

const init = () => {
  cargarCarritoDesdeLocalStorage();
};

// LocalStorage
const guardarCarritoEnLocalStorage = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

const cargarCarritoDesdeLocalStorage = () => {
  const carritoGuardado = localStorage.getItem("carrito");

  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
    carritoContainer.innerHTML = ""; // Limpiar el contenido existente del carrito

    carrito.forEach((paquete) => {
      const paqueteExistente = carrito.find((item) => item.id === paquete.id);
      if (paqueteExistente) {
        paquete.cantidad = paqueteExistente.cantidad; // Actualizar la cantidad del paquete desde el carrito
      }
      updateCarrito(paquete);
    });
  }
};

init();
