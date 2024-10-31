
function verDescripcion(personaje) {
    document.getElementById(`descripcion-${personaje}`).style.display = 'flex';
}

function cerrarDescripcion(personaje) {
    document.getElementById(`descripcion-${personaje}`).style.display = 'none';
}
