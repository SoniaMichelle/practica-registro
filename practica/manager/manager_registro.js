$(document).ready(function(){
    let nombre;
    let paterno, materno, estatura, edad, peso;
    $('#btn_registro').click(function(){
        if ($('#nombre').val() == "") {
            Swal.fire({

                imageUrl: "./raw/img/error.png",

                title: "Upps!",

                text:'"Nombre esta vacio"',

                footer:"Powered by Mich"

              });
        }else if($('#paterno').val() == ""){
            Swal.fire({

                imageUrl: "./raw/img/error.png",

                title: "Upps!",

                text:'"Apellido Paterno esta vacio"',

                footer:"Powered by Mich"

              });
        }else if($('#materno').val() == ""){
            Swal.fire({

                imageUrl: "./raw/img/error.png",

                title: "Upps!",

                text:'"Materno esta vacio"',

                footer:"Powered by Mich"

              });
        }else if($('#estatura').val() == ""){
            Swal.fire({

                imageUrl: "./raw/img/error.png",

                title: "Upps!",

                text:'"Estatura esta vacio"',

                footer:"Powered by Mich"

              });
        }else if($('#edad').val() == ""){
            Swal.fire({

                imageUrl: "./raw/img/error.png",

                title: "Upps!",

                text:'"Edad esta vacio"',

                footer:"Powered by Mich"

              });
        }else if($('#peso').val() == ""){
            Swal.fire({

                imageUrl: "./raw/img/error.png",

                title: "Upps!",

                text:'"Peso esta vacio"',

                footer:"Powered by Mich"

              });
        }else{
            Swal.fire({

                imageUrl: "./raw/img/bien.png",

                title: "Registro existoso!",

                text:'"Bien"',

                footer:"Powered by Mich"

              });
        }
       recolector = "bandera_nombre=" +$('#nombre').val()+
                        "&bandera_paterno=" + $('#paterno').val()+
                        "&bandera_materno=" + $('#materno').val()+
                        "&bandera_estatura=" + $('#estatura').val()+
                        "&bandera_edad=" + $('#edad').val()+
                        "&bandera_peso=" + $('#peso').val();
        
        $.ajax({
            type: 'POST', 
            url: './control/control_registro.php',
            data: recolector,
            success: function(resultado){
                console.log(resultado);
            }
        });
    });
});
