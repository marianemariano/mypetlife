//GET ALERGIA

$(document).ready(function () {
    $.ajax(
        {
            dataType: 'json',
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            type: 'GET',
            url: 'http://127.0.0.1/git1/pulgas',
            success: function (data) {
                var clientes = data;
                // Listando cada cliente encontrado na lista
                $.each(clientes, function (i, cliente) {
                    console.log(clientes);
                    var item = "<tr><td>" + cliente.nome + "</td> <td>" + cliente.tipo + "</td> <td>" + cliente.data_aplicacao + "</td> <td>" + cliente.data_reaplicacao + "</td> <td><button type='button' class='btn btn-primary btn-sm dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Observações</button> <div class='dropdown-menu p-4 text-muted' style='max-width: 200px;'><p> "+cliente.observacao+"</p></div></td><td><button class='btn btn-danger btn-sm'>Deletar pulgas</button></td></tr>";
                    $("#pulgas").append(item);
                });
            },
            error: function (data) {
                alert("error");
            }
        });
});