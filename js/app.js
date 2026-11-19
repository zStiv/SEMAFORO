
const boton = document.getElementById("btnIniciar");
const luces = ["verde", "amarillo", "rojo"];
const tiempos = [10, 3, 10];

let contador;
let posicion = 0;
let tiempo = 10;

boton.addEventListener("click", () => {

    if (boton.textContent == "Iniciar") {
        boton.textContent = "Detener";
        posicion = 0;
        tiempo = tiempos[posicion];

        let luz = document.getElementById(luces[posicion]);
        luz.classList.add(luces[posicion]);
        luz.textContent = tiempo;

        contador = setInterval(() => {
            tiempo--;

            if (tiempo == 0) {
                luz.classList.remove(luces[posicion]);
                luz.textContent = "";

                posicion = (posicion + 1) % 3;
                tiempo = tiempos[posicion];
                luz = document.getElementById(luces[posicion]);

                luz.classList.add(luces[posicion]);
            }

            luz.textContent = tiempo;

        }, 1000);

    } else {
        clearInterval(contador);
        boton.textContent = "Iniciar";

        for (let i = 0; i < 3; i++) {
            let luz = document.getElementById(luces[i]);
            luz.classList.remove(luces[i]);
            luz.textContent = "";
        }
    }
});
