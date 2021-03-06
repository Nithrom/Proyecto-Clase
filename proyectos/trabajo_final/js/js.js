var botonNombre=document.getElementById('nombre');
var formNombre=document.getElementById('formNombre');
var nombre=document.getElementById('nombreUsuario');
var parrafo=document.getElementsByClassName('oculto');
var user=form_nombre.user;
/* Variables para "registro" de usuario */

var sinopsis=document.getElementsByClassName('sinopOculta sinopsis')
var verSinopsis=document.getElementsByClassName('leerSinopsis');
var closeSinopsis=document.getElementsByClassName('cerrarSinopsis')
var cortina=document.getElementsByClassName('cortina');
/* Variables para mostrar y ocultar la sinopsis */

var temas=color.colores
var cambioCss=document.getElementsByTagName('link');
var muestra=document.getElementsByClassName('muestraColor');
/* Variables para el cambio de tema */

function cambiarTema(css){
	cambioCss[1].href=css.toString();
}
/*Funcion para cambiar el tema */

function mostrarNombre(){
	if(user.value!=''){
		formNombre.style.display="none";
		nombre.innerText=user.value;
		parrafo[0].style.display="block";
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

function mostrarSinopsis(id){
	sinopsis[parseInt(id)].style.visibility="visible";
	sinopsis[parseInt(id)].style.opacity="1";
}
/* Funcion para mostrar sinopsis */

function cerrarSinopsis(num){
	sinopsis[parseInt(num)].style.visibility="hidden";
	sinopsis[parseInt(num)].style.opacity="0";
}
/* Funcion para ocultar la sinopsis */

/* Funcion de verificacion y recomendacion de un libro */

function contador(cadena){
	caracteres.innerText=cadena.length;
	if(cadena.length==maxCar){
		max.style.color="red";
	}
	else{
		max.style.color="black";
	}
}
/* Funcion para limite de caracteres */

botonNombre.addEventListener("click",mostrarNombre);

for(var i=0 ;i<temas.length ; i++){
	temas[i].addEventListener("click",function(){cambiarTema(this.value)});
}

for(var c=0 ; c<verSinopsis.length ; c++){
	verSinopsis[c].addEventListener("click",function(){mostrarSinopsis(this.id)});
}

for(var x=0 ; x<closeSinopsis.length ; x++){
	closeSinopsis[x].addEventListener("click",function(){cerrarSinopsis(this.value)});
}
/* Botones y controladores de eventos */