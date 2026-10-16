$(document).ready(function () {
  //tachar
  $(".list-group").on("click", ".texto-tarea", function () {
    $(this).toggleClass("text-decoration-line-through");
  });

  //add li
  $("#button-addon1").on("click", function () {
    if ($("#input-text").val() != "") {
      let text = $("#input-text").val();

      $("#list-group").append(`        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span class="texto-tarea">${text}</span>
          <button type="button" class="btn btn-sm btn-danger btn-eliminar">
            Eliminar
          </button>
        </li>`);

      $("#input-text").val("");
    } else {
      alert("No hay nada escrito");
    }
  });

  // delete li
  $("#list-group").on("click", ".btn-eliminar", function () {
    $(this).closest("li").remove();
  });
});
