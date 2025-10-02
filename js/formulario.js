function validarNombre(){
    var n = /^[a-zA-Z]+$/;
    if (!n.test(formulario.nombre.value))
    {
    alert('Sólo podrá contener letras y tendrá una longitud máxima de 15 caracteres.');
    formulario.nombre.focus();
    return true;
    }
    }


function validarApellidos(){
    var a = /^[a-zA-Z]+$/;
    if (!a.test(formulario.apellidos.value))
    {alert('Sólo podrá contener letras y tendrá una longitud máxima de 40 caracteres.');
    formulario.apellidos.focus();
    return true;
}
}


function validarTelefono(){
    var t = /^[0-9]+$/;
    if (!t.test(formulario.telefono.value))
    {alert('Sólo podrá contener números y tendrá una longitud máxima de 9 dígitos.')
    formulario.telefono.focus();
    return true;
}
}

function validarCorreo(){
    var c = /^(.+\@.+\..+)$/;
    if(!c.test(formulario.correo.value)) {
    alert ('Formato de correo no valido');
    }
}





function calcularPresupuesto(){
  var producto = document.getElementById("producto");
  var plazo= document.getElementById("plazo");
  var extra1= document.getElementById("extra1");
  var extra2 = document.getElementById("extra2");
  var extra3 = document.getElementById("extra3");
  var presupuesto = document.getElementById("presupuesto");
  var precioProducto = parseFloat(producto.options[producto.selectedIndex].dataset.precio);
  var plazoValor = parseInt(plazo.value);
  var descuento = plazoValor > 2 ? 0.1 : 0;
  var extras = 
  (extra1.checked ? 2: 0) +
  (extra2.checked ? 4 : 0) +
  (extra3.checked ? 6: 0);
  var presupuestoFinal = precioProducto * (1- descuento) + extras;
  presupuesto.textContent = "€" + presupuestoFinal.toFixed(2);
}


function validarFormulario(){
  var nombre = document.getElementById('nombre').value;
  var apellidos = document.getElementById('apellidos').value;
  var telefono = document.getElementById('telefono').value;
    var correo = document.getElementById('correo').value;
    var producto = document.getElementById('producto').value;
    var plazo = document.getElementById('plazo').value;
    var aceptar = document.getElementById('aceptar').checked;


    if (nombre === '' || apellidos === '' || telefono === '' || correo === ''|| producto === ''|| plazo === '') {
        alert('Campos vacíos');
        return false;
    }
    var formatoNombre = /^[a-zA-Z]+$/;
    if (!formatoNombre.test(nombre)) {
        alert('Formato no válido');
        return false;}
    var formatoApellidos = /^[a-zA-Z]+$/;
    if (!formatoApellidos.test(apellidos)) {
            alert('Formato no válido');
            return false;}
   var formatoTelefono = /^[0-9]+$/;
   if (!formatoTelefono.test(telefono)) {
            alert('Formato no válido');
            return false;}
   var formatoCorreo = /^(.+\@.+\..+)$/;
   if (!formatoCorreo.test(correo)) {
            alert('Formato no válido');
            return false;}
   if (!aceptar) {
            alert('Debes aceptar la política de privacidad');
            return false;}
    return true;
}

