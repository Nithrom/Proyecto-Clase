var list=document.getElementsByTagName('li');
var imgSpace=document.getElementById('img');

function showImg(img){
	if(img=='img1'){
		imgSpace.src='index_css/img/face.png';
		imgSpace.className='aparece';
	}
	else if(img=='img2'){
		imgSpace.src='index_css/img/cosmere.png';
		imgSpace.className='aparece';
	}
	else if(img=='img3'){
		imgSpace.src='index_css/img/taller.png';
		imgSpace.className='aparece';
	}
	else{
		imgSpace.src='index_css/img/libreria.png';
		imgSpace.className='aparece';
	}
}

function ocultImg(){
	imgSpace.className='desaparece';
}
for(var i=0;i<list.length;i++){
	list[i].addEventListener("mouseenter",function(){showImg(this.id)});
	list[i].addEventListener("mouseleave",function(){ocultImg(this.id)});
}