const btn = document.getElementById('btn-total');
const input = document.getElementById('input');
const answer = document.getElementById('title-text__h2');


btn.addEventListener('click', () => {
    const num = parseInt(input.value);
    if (input.value === '' || isNaN(num)) {
        alert('Por favor ingrese un número');
    } else {
        const sqrt = Math.sqrt(num);
        /**
         * Verifica si el resultado de una raíz cuadrada es un número entero.
         * Si es un número entero, devuelve el valor de la raíz cuadrada.
         * Si no es un número entero, devuelve el valor de la raíz cuadrada con dos decimales.
         *
         * @param {number} sqrt - El valor de la raíz cuadrada a verificar.
         * @returns {number|string} - El valor de la raíz cuadrada como número entero o como cadena con dos decimales.
         */
        const result = Number.isInteger(sqrt) ? sqrt : sqrt.toFixed(2);
        answer.textContent = result;
    }
});