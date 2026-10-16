$(document).ready(function () {
  let editingNote = null;

    // Mostrar modal
    $(document).on("click", "#btn-add-element", function () {
    editingNote = null;
    $("#title").val("");
    $("#sizeCol").val("col-2");
    $("#colorNote").val("card text-bg-primary mb-3");
    $("#exampleModalLabel").text("Crear nueva nota");
        $("#elementModal").modal('show');
    });

    $(document).on("click", "#btn-save-element", function () {
        let title = $("#title").val();
        let sizeCard = $("#sizeCol").val();
        let colorNote = $("#colorNote").val();

    if (editingNote) {
      editingNote.find(".card-title").text(title);
      editingNote.attr("class", `${colorNote} ${sizeCard}`);
      editingNote = null;
      $("#exampleModalLabel").text("Crear nueva nota");
    } else {
      $("#notes-container").append(`<div class="${colorNote} ${sizeCard}">
        <div class="card-header d-flex align-items-center justify-content-between">
          <h5 class="card-title mb-0">${title}</h5>
          <div class="d-flex gap-2">
            <button type="button" class="btn btn-light btn-sm btn-edit-note">Editar</button>
            <button type="button" class="btn btn-danger btn-sm btn-delete-note">Borrar</button>
          </div>
        </div>
      </div>`);
    }

  });

    $(document).on("click", ".btn-delete-note", function () {
        $(this).closest(".card").remove();
    });


    $("#notes-container").on("click", ".btn-edit-note", function () {
      editingNote = $(this).closest(".card");
      $("#title").val(editingNote.find(".card-title").text());
      $("#sizeCol").val(editingNote.hasClass("col-6") ? "col-6" : editingNote.hasClass("col-4") ? "col-4" : "col-2");

      let colorClass = "text-bg-primary";
      if (editingNote.hasClass("text-bg-success")) colorClass = "text-bg-success";
      if (editingNote.hasClass("text-bg-warning")) colorClass = "text-bg-warning";
      if (editingNote.hasClass("text-bg-danger")) colorClass = "text-bg-danger";
      $("#colorNote").val(`card ${colorClass} mb-3`);

      $("#exampleModalLabel").text("Editar nota");
      $("#elementModal").modal('show');
    });


})