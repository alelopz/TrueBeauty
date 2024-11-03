
// Funciones para mostrar y cerrar descripciones de personajes
function verDescripcion(personaje) {
    document.getElementById(`descripcion-${personaje}`).style.display = 'flex';
}

function cerrarDescripcion(personaje) {
    document.getElementById(`descripcion-${personaje}`).style.display = 'none';
}

// Código para la navegación de episodios

const episodios = [
    {
        titulo: "Episodio 1",
        imagen: "episodio1.jpg",
        resumen: "Este es el resumen del episodio 1. Aquí puedes añadir una breve descripción de lo que ocurre en el episodio."
    },
    {
        titulo: "Episodio 2",
        imagen: "episodio2.jpg",
        resumen: "Este es el resumen del episodio 2. Aquí puedes añadir una breve descripción de lo que ocurre en el episodio."
    },
    {
        titulo: "Episodio 3",
        imagen: "episodio3.jpg",
        resumen: "Este es el resumen del episodio 3. Aquí puedes añadir una breve descripción de lo que ocurre en el episodio."
    }
    // Agrega más episodios según sea necesario
];

let episodioActual = 0;

function cambiarEpisodio(direccion) {
    episodioActual += direccion;

    if (episodioActual < 0) {
        episodioActual = episodios.length - 1;
    } else if (episodioActual >= episodios.length) {
        episodioActual = 0;
    }

    const episodio = episodios[episodioActual];
    document.getElementById("tituloEpisodio").textContent = episodio.titulo;
    document.getElementById("imagenEpisodio").src = episodio.imagen;
    document.getElementById("resumenEpisodio").textContent = episodio.resumen;
}

