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
            url: 'http://127.0.0.1/git1/cirurgia',
            success: function (data) {
                var clientes = data;
                // Listando cada cliente encontrado na lista
                $.each(clientes, function (i, cliente) {
                    console.log(clientes);
                    var item = "<tr><td>" + cliente.nome + "</td> <td>" + cliente.data + "</td> <td>" + cliente.complicacoes + "</td> <td>" + cliente.local + "</td> <td>" + cliente.medico + " </td> <td>" + cliente.valor + " </td> <td>" + cliente.cuidados + " </td> <td><button type='button' class='btn btn-primary btn-sm dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Observações</button> <div class='dropdown-menu p-4 text-muted' style='max-width: 200px;'><p> "+cliente.observacao+"</p></div></td></td><td><button class='btn btn-danger btn-sm'>Deletar alergia</button></td></tr>";
                    $("#cirurgia").append(item);
                });
            },
            error: function (data) {
                alert("error");
            }
        });
});