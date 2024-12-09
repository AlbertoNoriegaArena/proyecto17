// {
//     "solicitudes": [
//       {
//         "id": 1,
//         "nombre": "Fernando",
//         "apellido": "Alguno"
//       },
//       {
//         "id": 2,
//         "nombre": "Nico",
//         "apellido": "Otro"
//       }
//     ]
//   }

$(function () {

    // BOTON LISTAR 
    $('#botonListar').on('click', function () {
        $.get('https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes', function (data) {

            $('#escribirLista').text('OK');
        }).fail(function () {

            // Mensaje de error si falla
            $('#escribirLista').text('Error');
        });
    });

    // BOTON LISTAR UNO
    $('#botonListarUno').on('click', function () {
        $.get('https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes/1', function (data) {

            $('#escribirUnoGet').text('OK');
        }).fail(function () {

            // Mensaje de error si falla
            $('#escribirUnoGet').text('Error');
        });
    });

    // BOTON POST 
    $('#botonPost').on('click', function () {
        $.post('https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes', function (data) {

            $('#escribirPost').text('OK');
        }).fail(function () {

            // Mensaje de error si falla
            $('#escribirPost').text('Error');
        });
    });
});