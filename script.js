const destinosTuristicos = [
  {
    nombre: "Salto Ángel",
    descripcion:
      "Embárcate en una aventura épica hacia el majestuoso Salto Ángel en Venezuela. Descubre la cascada más alta del mundo y maravíllate con su belleza imponente.",
    imagen:
      "https://c4.wallpaperflare.com/wallpaper/499/529/311/cliff-waterfall-tropical-rock-wallpaper-preview.jpg",
    precio: 250,
    disponibilidad: true,
  },
  {
    nombre: "Monte Kilimanjaro",
    descripcion:
      "Desafía tus límites y conquista el majestuoso Monte Kilimanjaro en Tanzania. Disfruta de vistas panorámicas increíbles y vive una experiencia inolvidable.",
    imagen:
      "https://c4.wallpaperflare.com/wallpaper/275/115/823/earth-mount-kilimanjaro-mountain-volcano-wallpaper-preview.jpg",
    precio: 500,
    disponibilidad: false,
  },
  {
    nombre: "Cataratas del Iguazú",
    descripcion:
      "Sumérgete en la belleza natural de las Cataratas del Iguazú en la frontera entre Argentina y Brasil. Maravíllate con la cascada más grande del mundo y disfruta de la exuberante selva tropical.",
    imagen:
      "https://c4.wallpaperflare.com/wallpaper/486/350/491/iguazu-falls-wallpaper-preview.jpg",
    precio: 150,
    disponibilidad: true,
  },
  {
    nombre: "Gran Barrera de Coral",
    descripcion:
      "Explora el increíble ecosistema marino de la Gran Barrera de Coral en Australia. Sumérgete en aguas cristalinas, admira la diversidad de corales y descubre la vida marina fascinante.",
    imagen: "https://img2.rtve.es/i/?w=1600&i=1524395218444.jpg",
    precio: 300,
    disponibilidad: false,
  },
  {
    nombre: "Machu Picchu",
    descripcion:
      "Viaja al pasado y descubre la misteriosa ciudadela de Machu Picchu en Perú. Explora las ruinas incas, disfruta de vistas panorámicas y sumérgete en la historia y la cultura de los antiguos habitantes.",
    imagen:
      "https://c0.wallpaperflare.com/preview/707/587/700/peru-machu-picchu-nature-cusco.jpg",
    precio: 200,
    disponibilidad: true,
  },
  {
    nombre: "Santorini",
    descripcion:
      "Disfruta del encanto de la isla de Santorini en Grecia. Relájate en sus playas de aguas cristalinas, contempla las pintorescas casas blancas y azules y déjate cautivar por los atardeceres románticos.",
    imagen:
      "https://c4.wallpaperflare.com/wallpaper/744/487/759/night-in-santorini-wallpaper-preview.jpg",
    precio: 400,
    disponibilidad: true,
  },
  // {
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
  card.classList.add("card", "rounded-3", "mb-5", "mx-auto");
  card.style.width = "25rem";

  // Crear la imagen de la card
  const img = document.createElement("img");
  img.classList.add("card-img-top", "w-100", "h-100");
  img.src = destino.imagen;
  img.alt = destino.nombre;

  // Crear el cuerpo de la card
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

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
  card.classList.add("card", "rounded-5", "mb-5", "mx-auto");
  card.style.width = "24rem";

  // Crear la imagen de la card
  const img = document.createElement("img");
  img.classList.add("card-img-top", "rounded-circle", "mx-auto", "mt-2");
  img.style.width = "125px";
  img.style.height = "125px";
  img.src = cliente.imagen;
  img.alt = cliente.nombre;

  // Crear el cuerpo de la card
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const nombre = document.createElement("h3");
  nombre.classList.add("card-title");
  nombre.textContent = cliente.nombre;

  const descripcion = document.createElement("p");
  descripcion.classList.add("text-black-50");
  descripcion.textContent = cliente.descripcion;

  const estrellas = document.createElement("p");
  estrellas.classList.add("fs-5");
  estrellas.textContent = cliente.estrellas;

  const fecha = document.createElement("p");
  fecha.classList.add("text-black-50");
  fecha.textContent = cliente.fecha;

  // Agregar al cardBody
  cardBody.appendChild(nombre);
  cardBody.appendChild(descripcion);
  cardBody.appendChild(estrellas);
  cardBody.appendChild(fecha);

  // Agregar elementos a la card
  card.appendChild(img);
  card.appendChild(cardBody);

  clientesContainer.appendChild(card);
});
