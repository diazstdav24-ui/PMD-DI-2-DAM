$(document).ready(function () {
  const btnProcesar = $("#btnProcesar");

  btnProcesar.on("click", function () {
    const texto = $("#boxText").val();
    const desplazamiento = Number($("#desplazamiento").val());
    const operacion = Number($("#operacion").val());

    if (texto.trim().length === 0) {
      alert("¡Debe haber algo escrito para poder cifrar o descifrar!");
      return;
    }

    const desplazamientoFinal = desplazamiento * operacion;

    const resultado = texto
      .toUpperCase()
      .split("")
      .map(function (letra) {
        const codigo = letra.charCodeAt(0);

        if (codigo >= 65 && codigo <= 90) {
          let posicion = codigo - 65;
          posicion = (((posicion + desplazamientoFinal) % 26) + 26) % 26;
          return String.fromCharCode(posicion + 65);
        }

        return letra;
      })
      .join("");

    $("#textoSalida").val(resultado);
  });
});
