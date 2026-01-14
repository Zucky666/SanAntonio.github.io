const alumnos = [
    { nombre: "Brandon Melgar Barba", fecha: "06/02/1996", salida: 2014, foto: "./img/alumnos2014/BrandonMB.jpeg" },
    { nombre: "Delbireny Arza Gualiany", fecha: "09/04/1997", salida: 2014, foto: "./img/alumnos2014/DelbirenyAG.png" },
    { nombre: "Yammil Zarraga Perez", fecha: "26/02/1997", salida: 2014, foto: "./img/alumnos2014/YammilZP.png" },
    { nombre: "Ximena Mamani Quispe", fecha: "11/08/1996", salida: 2014, foto: "./img/alumnos2014/XimenaMQ.jpeg" }
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
                <p>Fecha de nacimiento: ${alumno.fecha}</p>
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


