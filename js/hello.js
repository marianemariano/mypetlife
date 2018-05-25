
//METODO GET - CARREGA AUTOMATICAMENTE NA PÁGINA
$(document).ready(function () {
    $.ajax({
        dataType: 'json',
        headers: {
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        type: 'GET',
        url: "http://localhost/git1/pessoas/1"
    }).then(function (data) {
        $('.greeting-id').append(data.nome);
        $('.greeting-content').append(data.email);
    });
});


//METODO GET PARA LISTAR VÁRIOS RESULTADOS AUTOMATICO
$(document).ready(function () {
    $.ajax(
        {
            dataType: 'json',
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            type: 'GET',
            url: 'http://localhost/git1/animal',
            success: function (data) {
                var clientes = data;
                // Listando cada cliente encontrado na lista
                $.each(clientes, function (i, cliente) {
                    var item = "<li><h2>" + cliente.nome + "</h2><p><b>Nome.:</b> " + cliente.nome + "</p><p><b>Email:</b> " + cliente.email + "</p></li>";
                    $("#listaClientes").append(item);
                });
                //Limpar Status de Carregando 
            },
            error: function (data) {
                alert("error");
            }
        });
});

//METODO GET - PARA QUESTÃO COM CLICK EM ALGUM BOTÃO
function testService() {
    $.ajax(
        {
            dataType: 'json',
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            type: 'GET',
            url: 'http://localhost/git1/pessoas/1',
            success: function (data) {
                $('.test').append(data.nome);
            },
            error: function (data) {
                alert("error");
            }
        });
}

//METODO POST


$("#login-button").click(function (e) {
    alert("hiii");

    var username = $("#username-field").val();
    var password = $("#username-field").val();
    var nome = $("#nome").val();

    alert(username);
    alert("password" + password);

    var markers = { "cod_dono": "3", "nome": nome };
    $.ajax({
        type: "POST",
        url: 'http://localhost/git1/pessoas',
        // The key needs to match your method's input parameter (case-sensitive).
        data: JSON.stringify(markers),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) { alert("got the data" + data); },
        failure: function (errMsg) {
            alert(errMsg);
        }
    });

});