const API_URL = "https://api.sampleapis.com/futurama/characters";

document.getElementById("btnJSON").addEventListener("click", mostrarJSON);
document.getElementById("btnIMG").addEventListener("click", mostrarImagen);
document.getElementById("btnClear").addEventListener("click", borrar);

async function mostrarJSON() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();

        const index = Math.floor(Math.random() * data.length);

        document.getElementById("imagen-container").innerHTML = ""; // Limpiar imagen
        document.getElementById("resultado").innerText =
            JSON.stringify(data[index], null, 2);

    } catch (e) {
        document.getElementById("resultado").innerText = "Error obteniendo JSON";
        console.error(e);
    }
}

async function mostrarImagen() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();

        const index = Math.floor(Math.random() * data.length);

        const personaje = data[index];
        const imagen = personaje.images.main;

        document.getElementById("resultado").innerText = ""; // Limpiar JSON
        document.getElementById("imagen-container").innerHTML = `
                <h3>${personaje.name.first} ${personaje.name.last}</h3>
                <img src="${imagen}" alt="Personaje">
            `;

    } catch (e) {
        console.error("Error cargando imagen:", e);
    }
}

function borrar() {
    document.getElementById("resultado").innerText = "";
    document.getElementById("imagen-container").innerHTML = "";
}