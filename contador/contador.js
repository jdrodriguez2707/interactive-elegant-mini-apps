let contador = 0;

const botonIncrementar = document.getElementById('incrementar');
const botonReiniciar = document.getElementById('reiniciar');
const valorContador = document.getElementById('valor-contador');

botonIncrementar.addEventListener('click', () => {
    contador++;
    valorContador.textContent = contador;
});

botonReiniciar.addEventListener('click', () => {
    if (contador > 0) {
        contador = 0;
        valorContador.textContent = contador;
    }
});

