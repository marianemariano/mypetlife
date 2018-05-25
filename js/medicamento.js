//GET HIGIENE

$(document).ready(function () {
    $.ajax(
        {
            dataType: 'json',
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            type: 'GET',
            url: 'http://127.0.0.1/git1/higiene',
            success: function (data) {
                var clientes = data;
                // Listando cada cliente encontrado na lista
                $.each(clientes, function (i, cliente) {
                    console.log(clientes);
                    var item = "<tr><td>" + cliente.nome + "</td> <td>" + cliente.dosagem + "</td> <td>" + cliente.data_inicio + "</td> <td>" + cliente.data_fim + "</td> <td>" + cliente.repeticoes + "</td> <td>" + cliente.instrucao + "</td> <td>" + cliente.condicao + "</td> <td><button type='button' class='btn btn-primary btn-sm dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Observações</button> <div class='dropdown-menu p-4 text-muted' style='max-width: 200px;'><p> "+cliente.observacao+"</p></div></td></td><td><button class='btn btn-danger btn-sm'>Deletar animal</button></td></tr>";
                    $("#medicamento").append(item);
                });
            },
            error: function (data) {
                alert("error");
            }
        });
});