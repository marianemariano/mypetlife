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
            url: 'http://127.0.0.1/git1/medico',
            success: function (data) {
                var clientes = data;
                // Listando cada cliente encontrado na lista
                $.each(clientes, function (i, cliente) {
                    console.log(clientes);
                    var item = "<tr><td>" + cliente.nome + "</td> <td>" + cliente.local + "</td> <td>" + cliente.crmv + "</td> <td>" + cliente.email + "</td> <td>" + cliente.telefone + "</td> <td><button class='btn btn-danger btn-sm'>Deletar Médico</button></td></tr>";
                    $("#medico").append(item);
                });
            },
            error: function (data) {
                alert("error");
            }
        });
});