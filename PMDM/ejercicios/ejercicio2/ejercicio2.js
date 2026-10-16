$(document).ready(function () {
  const boxText = $("#boxText");
  const contadorCaracteres = $("#contador");
  const contadorPalabras = $("#contador-palabras");
  const contadorSaltos = $("#contador-saltos");
  const contadorSinEspacios = $("#contador-sinEspacios");

  boxText.on("input", function () {
    const texto = $(this).val();

    // Caracteres
    contadorCaracteres.text(texto.length);

    // Palabras
    const textoLimpio = texto.trim();
    const numPalabras = textoLimpio.split(/\s+/).length;
    contadorPalabras.text(numPalabras);

    // Saltos de línea
    const numSaltos = texto.split("\n").length - 1;
    contadorSaltos.text(numSaltos);

    // Caracteres sin espacios
    const numSinEspacios = texto.replace(/\s/g, "").length;
    contadorSinEspacios.text(numSinEspacios);
  });
});
