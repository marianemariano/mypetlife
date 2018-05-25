//TODOS OS GET///////////////////////////////////////////////////////////////////////

//GET CONSULTAS
$(document).ready(function () {
    $.ajax(
        {
            dataType: 'json',
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            type: 'GET',
            url: 'http://127.0.0.1/git1/consulta',
            success: function (data) {
                var clientes = data;
                // Listando cada cliente encontrado na lista
                $.each(clientes, function (i, cliente) {
                    console.log(clientes);
                    var item = "<tr><td>" + cliente.motivo + "</td> <td>" + cliente.data_ida + "</td> <td>" + cliente.data_volta + "</td> <td>" + cliente.local + "</td> <td>" + cliente.medico + "</td> <td>" + cliente.valor + "<td><button type='button' class='btn btn-primary dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Observações</button> <div class='dropdown-menu p-4 text-muted' style='max-width: 200px;'><p> "+cliente.observacao+"</p></div></td></tr>";
                    $("#informacoes").append(item);
                });
            },
            error: function (data) {
                alert("error");
            }
        });
});

//GET VACINAS
$(document).ready(function () {
    $.ajax(
        {
            dataType: 'json',
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            type: 'GET',
            url: 'http://127.0.0.1/git1/vacina',
            success: function (data) {
                var clientes = data;
                // Listando cada cliente encontrado na lista
                $.each(clientes, function (i, cliente) {
                    console.log(clientes);
                    var item = "<tr><td>" + cliente.nome + "</td> <td>" + cliente.data_aplicacao + "</td> <td>" + cliente.data_reaplicacao + "</td> </td> <td><button type='button' class='btn btn-primary btn-sm dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Observações</button> <div class='dropdown-menu p-4 text-muted' style='max-width: 200px;'><p> "+cliente.observacao+"</p></div></td> </td><td><button class='btn btn-danger btn-sm'>Deletar animal</button></td></tr>";
                    $("#vacina").append(item);
                });
            },
            error: function (data) {
                alert("error");
            }
        });
});

//GET EXAMES
$(document).ready(function () {
    $.ajax(
        {
            dataType: 'json',
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            type: 'GET',
            url: 'http://127.0.0.1/git1/exames',
            success: function (data) {
                var clientes = data;
                // Listando cada cliente encontrado na lista
                $.each(clientes, function (i, cliente) {
                    console.log(clientes);
                    var item = "<tr><td>" + cliente.nome + "</td> <td>" + cliente.data + "</td> <td>" + cliente.local + "</td> <td>" + cliente.medico + "</td> <td><button type='button' class='btn btn-primary btn-sm dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Diagnostico</button> <div class='dropdown-menu p-4 text-muted' style='max-width: 200px;'><p> "+cliente.diagnostico+"</p></div></td> <td><button type='button' class='btn btn-primary btn-sm dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Observações</button> <div class='dropdown-menu p-4 text-muted' style='max-width: 200px;'><p> "+cliente.observacao+"</p></div></td><td><button class='btn btn-danger btn-sm'>Deletar animal</button></td></tr>";
                    $("#exames").append(item);
                });
            },
            error: function (data) {
                alert("error");
            }
        });
});



//INSERIR OS ANIMAIS NO BANCO DE DADOS
$("#cadastraranimal").click(function (e) {
    
    var nome = $("#nome").val();
    var tipo = $("#tipo").val();
    var sexo = $("#sexo").val();
    var nascimento = $("#nascimento").val();
    var raca = $("#raca").val();
    var cor = $("#cor").val();

    //cod animal não pode ser igual - dono cod dono tem que ser enviado
    var markers = { "cod_animal":"11","nome": nome,"sexo":sexo, "tipo": tipo, "nascimento": nascimento, "raca": raca, "cor": cor, "dono_cod_dono": "1" };
    $.ajax({
        type: "POST",
        url: 'http://localhost:8080/git1/animal',
        data: JSON.stringify(markers),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) { alert("animal cadastrado com sucesso"); },
        failure: function (errMsg) {
            alert("Não foi possível cadastrar um novo animal!");
        }
    });

});