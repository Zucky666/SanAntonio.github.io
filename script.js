const alumnos = [
    { nombre: "Brandon Melgar Barba", fecha: "06/02/1996", salida: 2014, foto: "./img/alumnos2014/BrandonMB.jpeg" },
    { nombre: "Delbireny Arza Gualiany", fecha: "09/04/1997", salida: 2014, foto: "./img/alumnos2014/DelbirenyAG.png" },
    { nombre: "Yammil Zarraga Perez", fecha: "26/02/1997", salida: 2014, foto: "./img/alumnos2014/YammilZP.png" },
    { nombre: "Ximena Mamani Quispe", fecha: "11/08/1996", salida: 2014, foto: "./img/alumnos2014/XimenaMQ.png" },
    { nombre: "Lizbeth Maza Semo", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Leonardo Copa Pereira", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Jhon Jairo Rivero Moreno", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Lander Jimenes Rojas", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Jaime Malale Ichu", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Isaias Guardia Quiroga", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Santiago Noza Yuco", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Jimena Roca Tamo", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Yohana Rioja Malala", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Katherine Figueroa Iva", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Fabricio Heredia Cuellar", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Pedro Fernando Conorio Velarde", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Kathleen Flores Mano", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Roberto Duran Mopi", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Damaris Yasmin Rivas San Millan", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Kevin Cujuy Arias", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Eliana Moy Sucubono", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Luis Ruiz Pimental", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Alexandra Teran Herrera", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Raul Suarez Zeballos", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Edelberto Mosua Justiniano", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Yngrid Jimena Romero Vargas", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Henry Raul Hoyos Barboza", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Jose Carlos Quinteros Franco", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Yhon Robert Pinto Navarro", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Jose Henry Yuco Mae", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Elva E. Velarde Vaca", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Ayrton Julio Montero Mancilla", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Wilmer A. Claros Mareca", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Kenia L. Yuco Taborga", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" },
    { nombre: "Kelly Fabiola Zambrana Alpire", fecha: "00/00/1997", salida: 2014, foto: "./img/alumnos2014/incognito.png" }
    // ... hasta los 34 alumnos
];

//contenedor donde se van a mostrar
const contenedor = document.getElementById("listaAlumnos");
//funcion del indice
function renderAlumnos(lista) {
    contenedor.innerHTML = ""; //limpia contenedor

    lista.forEach((alumno, index) => {
        const card = document.createElement("article");
        card.classList.add("contenedor-alumno");
        card.innerHTML = `
            <span class="numero">${index + 1}</span>
            <img src="${alumno.foto}" class="foto-alumno">
            <div class="info-alumno">
                <h3>${alumno.nombre}</h3>
                <p class="fecha-nac">
                <img src="./img/icono/Pastel.png" class="icono-cumple" alt="Cumpleaños">
                <span>${alumno.fecha}</span>
                </p>
                <p>Año de salida: ${alumno.salida}</p>
            </div>
        `;

        contenedor.appendChild(card);
    });
}



function ordenarPorApellido(lista) {
    return lista.slice().sort((a, b) => {
        const apellidoA = a.nombre.split(" ")[1].toLowerCase();
        const apellidoB = b.nombre.split(" ")[1].toLowerCase();
        return apellidoA.localeCompare(apellidoB);
    });
}

//renderAlumnos(alumnos);
renderAlumnos(ordenarPorApellido(alumnos));

//funcion de buscar por por numero y texto
const buscador = document.getElementById("buscador");//busqueda en tiempo real

buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase();

    const filtrados = alumnos
        .filter(alumno => alumno.nombre.toLowerCase().includes(texto))

    const ordenados = ordenarPorApellido(filtrados)

    renderAlumnos(ordenados);
});


