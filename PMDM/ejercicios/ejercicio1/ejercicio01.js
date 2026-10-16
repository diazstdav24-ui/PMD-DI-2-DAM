$(document).ready(function () {

    $("#add").on("click", function () {
        $("tbody").append('<tr><th scope="row">2</th><td>Jacob</td><td>Thornton</td><td>@fat</td></tr>');
    })

    // Eliminar cualquier fila: haces clic en la fila y se borra
    $(document).on("click", "tbody tr", function () {
        $(this).remove();
    })

    $("#addCol").on("click", function () {
        $("thead tr").append('<th>Nueva</th>');
        $("tbody tr").append('<td>dato</td>');
    })

    $("#removeCol").on("click", function () {
        $("tr > :last-child").remove();
    })

    $("#removeTable").on("click", function () {
        $("table").remove();
    })

})