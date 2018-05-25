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
            url: 'http://127.0.0.1/git1/local',
            success: function (data) {
                var clientes = data;
                // Listando cada cliente encontrado na lista
                $.each(clientes, function (i, cliente) {
                    console.log(clientes);
                    var item = "<tr><td>" + cliente.nome + "</td> <td>" + cliente.endereco + "</td> <td>" + cliente.telefone + "</td> <td>" + cliente.email + "</td> <td>" + cliente.tipo + "</td><td><button class='btn btn-danger btn-sm'>Deletar alergia</button></td></tr>";
                    $("#local").append(item);
                });
            },
            error: function (data) {
                alert("error");
            }
        });
});