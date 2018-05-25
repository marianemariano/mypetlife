//CARREGA OS ANIMAIS DO BANCO

$(document).ready(function () {
    $.ajax(
        {
            dataType: 'json',
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            type: 'GET',
            url: 'http://127.0.0.1/git1/animal',
            success: function (data) {
                var clientes = data;
                // Listando cada cliente encontrado na lista
                $.each(clientes, function (i, cliente) {
                    console.log(clientes);
                    var item = "<tr><td id='nomelista'>" + cliente.nome + "</td> <td>" + cliente.tipo + "</td> <td>" + cliente.sexo + "</td> <td><button class='btn btn-primary btn-sm'>selecionar animal</button></td><td><button class='btn btn-danger btn-sm' onclick='deleteanimal();'>Deletar animal</button></td></tr> ";
                    $("#test").append(item);
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
    var markers = { "cod_animal":"7","nome": nome,"sexo":sexo, "tipo": tipo, "nascimento": nascimento, "raca": raca, "cor": cor, "dono_cod_dono": "1" };
    $.ajax({
        type: "POST",
        url: 'http://127.0.0.1/git1/animal',
        data: JSON.stringify(markers),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) { alert("animal cadastrado com sucesso"); },
        failure: function (errMsg) {
            alert("Não foi possível cadastrar um novo animal!");
        }
    });

});


//DELETAR ANIMAIS NO BANCO
function deleteanimal() {
    var nome = $("#nomelista").val();
    $.ajax(
        {
            dataType: 'json',
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            type: 'DELETE',
            url: 'http://127.0.0.1/git1/animal/'+nome,
            success: function (data) {
                alert("animal deletado");
            },
            error: function (data) {
                alert("error");
            }
        });
}




