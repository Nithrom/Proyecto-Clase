var list=document.getElementsByTagName('li');
var imgSpace=document.getElementById('img');
function showImg(img){
	if(img=='img1'){
		imgSpace.src='index_css/img/face.png';
	}
	else if(img=='img2'){
		imgSpace.src='index_css/img/cosmere.png';
	}
	else if(img=='img3'){
		imgSpace.src='index_css/img/taller.png';
	}
	else{
		imgSpace.src='index_css/img/libreria.png';
	}

}
function ocultImg(){
	imgSpace.src='';
}
for(var i=0;i<list.length;i++){
	list[i].addEventListener("mouseenter",function(){showImg(this.id)});
	list[i].addEventListener("mouseleave",ocultImg);
}