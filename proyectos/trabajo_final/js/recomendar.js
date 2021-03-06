var tuyos=document.getElementById('oculto');
var usuario=recomiendo.usuario;
var titulo=recomiendo.libro;
var texto=recomiendo.opinion;
var enviarLibro=document.getElementById('boton');
var recomendar=document.getElementById('recomendadosUsuario');
/* Variables recomendar libro */

var maxCaracteres=document.getElementById('max');
var caracteres=document.getElementById('contador');
var maxCar=500;
/* Variables contador */

var botonNombre=document.getElementById('nombre');
var formNombre=document.getElementById('formNombre');
var nombre=document.getElementById('nombreUsuario');
var parrafo=document.getElementsByClassName('oculto');
var user=form_nombre.user;
/* Variables para "registro" de usuario */


function recomendado(){
	
	if(usuario.value=='' && titulo.value=='' && texto.value==''){
		usuario.style.backgroundColor="red";
		usuario.placeholder="Campo requerido";
		titulo.style.backgroundColor="red";
		titulo.placeholder="Campo requerido";
		texto.style.backgroundColor="red";
		texto.placeholder="Campo requerido";
	}
	else if(usuario.value!='' && titulo.value=='' && texto.value==''){
		usuario.style.backgroundColor="white";
		titulo.style.backgroundColor="red";
		titulo.placeholder="Campo requerido";
		texto.style.backgroundColor="red";
		texto.placeholder="Campo requerido";
	}
	else if(usuario.value=='' && titulo.value!='' && texto.value==''){
		usuario.style.backgroundColor="red";
		usuario.placeholder="Campo requerido";
		titulo.style.backgroundColor="white";
		texto.style.backgroundColor="red";
		texto.placeholder="Campo requerido";
	}
	else if(usuario.value=='' && titulo.value=='' && texto.value!=''){
		usuario.style.backgroundColor="red";
		usuario.placeholder="Campo requerido";
		titulo.style.backgroundColor="red";
		titulo.placeholder="Campo requerido";
	}
	else if(usuario.value!='' && titulo.value!='' && texto.value==''){
		usuario.style.backgroundColor="white";
		titulo.style.backgroundColor="white";
		texto.style.backgroundColor="red";
	}
	else if(usuario.value!='' && titulo.value=='' && texto.value!=''){
		usuario.style.backgroundColor="white";
		titulo.style.backgroundColor="red";
		texto.style.backgroundColor="white";
	}
	else if(usuario.value=='' && titulo.value!='' && texto.value!=''){
		usuario.style.backgroundColor="red";
		texto.style.backgroundColor="white";
		titulo.style.backgroundColor="white";
	}
	else if(usuario.value==''){
		usuario.style.backgroundColor="red";
		usuario.placeholder="Campo requerido";
	}
	else if(titulo.value==''){
		titulo.style.backgroundColor="red";
		titulo.placeholder="Campo requerido";
	}
	else if(texto.value==''){
		texto.style.backgroundColor="red";
		texto.placeholder="Campo requerido";
	}
	else{
		tuyos.style.display="block";
		recomendar.innerHTML+='<img src="../media/img/usuario.png" alt="usuario"/><span>'+usuario.value+'</span><h3>Libro recomendado: '+titulo.value+'</h3><b>SINOPSIS:</b><p>'+texto.value+'</p>';
	}
	if(user.value==''){
		user.value=usuario.value;
	}
}

function mostrarNombre(){
	if(user.value!='' && usuario.value==''){
		formNombre.style.display="none";
		nombre.innerText=user.value;
		usuario.value=user.value;
		parrafo[0].style.display="inline";
	}
	else if(user.value=='' && usuario.value!=''){
		formNombre.style.display="none";
		nombre.innerText=usuario.value;
		parrafo[0].style.display="inline";
	}
	else if(usuario.value!='', user.value!=''){
		formNombre.style.display="none";
		nombre.innerText=user.value;
		parrafo[0].style.display="inline";
	}
	else{
		formNombre.style.display="inline";
		user.style.backgroundColor="red";
		user.placeholder="Campo requerido";
		usuario.style.backgroundColor="red";
		usuario.placeholder="Campo requerido";
	}
}
/* Funcion para mostrar el nombre */

botonNombre.addEventListener("click",mostrarNombre);

texto.addEventListener("keyup",function(){contador(this.value)});

texto.addEventListener("keydown",function(){contador(this.value)});

enviarLibro.addEventListener("click",recomendado);



