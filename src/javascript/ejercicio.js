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
            $('#escribirLista').attr('data-midato', data);
            console.log(data);
        }).fail(function () {
            // Mensaje de error si falla
            $('#escribirLista').text('Error');
        });
    });

    // BOTON LISTAR UNO
    $('#botonListarUno').on('click', function () {
        $.get('https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes/1', function (data) {
            $('#escribirUnoGet').text('OK');
            console.log(data);
        }).fail(function () {
            // Mensaje de error si falla
            $('#escribirUnoGet').text('Error');
        });
    });

    // BOTON POST 
    $('#botonPost').on('click', function() {
        $.ajax({
            url: 'https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes',
            method: 'POST',
            data: {
                // Puedes pasar id:0 o no pasar el id
                id: 0,
                nombre: 'Juan',
                apellido: 'Otro mas',
            },
            success: function(data) {
                $('#escribirPost').text('OK');
            },
            error: function(data) {
                console.log(data);
                $('#escribirPost').text('Error');
             }
        });
    });

    // BOTON PUT
    $('#botonPut').on('click', function() {
        $.ajax({
            url: 'https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes/1',
            method: 'PUT',
            data: { nombre: 'nombre cambiado', apellido: 'apellido cambiado' },
            success: function(data) {
                $('#escribirPut').text('OK');
            },
            error: function(data) {
                console.log(data);
                $('#escribirPut').text('Error');
             }
        });
    });

    // BOTON DELETE
    $('#botonDelete').on('click', function() {
        $.ajax({
            url: 'https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes/1',
            method: 'DELETE',
            success: function(data) {
                $('#escribirDelete').text('OK');
            },
            error: function(data) {
                console.log(data);
                $('#escribirDelete').text('Error');
             }
        });
    });
});