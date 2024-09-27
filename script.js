function moveButton() {
  const button = document.getElementById("myButton");

  // Obtener las dimensiones del botón, la ventana y los límites máximos para mover el botón en la ventana del navegador sin que se salga de la misma
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const maxTop = viewportHeight - buttonHeight;
  const maxLeft = viewportWidth - buttonWidth;

  // Generar nuevas coordenadas aleatorias para el botón
  const newTop = Math.random() * maxTop;
  const newLeft = Math.random() * maxLeft;

  // Mover el botón a las nuevas coordenadas
  button.style.transform = "none"; // Eliminar cualquier transformación previa
  button.style.top = newTop + "px";
  button.style.left = newLeft + "px";
}
