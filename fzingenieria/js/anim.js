window.onscroll = function () {anim_header()};
window.onload = function(){obtener_estilos()}


var tamanio_header_orig
var tamanio_logo_orig
var offset_contenedores = []


function obtener_estilos(){

	tamanio_header_orig = parseFloat($('#header').css('height').replaceAll('px'))
	tamanio_logo_orig = $('#cont-logo-nav').css('width')

	contenedores = document.getElementsByClassName('secciones')

	let ancho = parseFloat($('#'+contenedores[0].getAttribute('id')).css('height').replaceAll('px'))

	 for(let i=0; i<contenedores.length; i++){

	 	offset_contenedores.push(ancho)

	 	ancho += parseFloat($('#'+contenedores[i].getAttribute('id')).css('height').replaceAll('px'))

	 }

}


function anim_header(){


	
	let $header = $('#header')
	let $logo = $('#cont-logo-nav')

	let posicion_scroll = $(window).scrollTop()	

	//////INI ANIM HEADER

	if(posicion_scroll > 250){
		
		$logo.css('width', '50px')

		//setTimeout(function(){

			$header.css('height',(tamanio_header_orig /3) + 'px')			

		//},1000)
		
		
	}else {
		
		$header.css('height',tamanio_header_orig + 'px')

		//setTimeout(function(){
		
			$logo.css('width', tamanio_logo_orig)

		//},1000)


	//////FIN ANIM HEADER
		

	}


	/////////// INI ANIM NOSOTROS

	let $contenedor = $('#cont-nosotros')
	let ancho_contenedor = parseFloat($contenedor.css('height').replaceAll('px'))


	if((posicion_scroll >= (offset_contenedores[0] ) && posicion_scroll < ($contenedor.offset().top) + ancho_contenedor)){

		
		$contenedor.css({'visibility':"visible", 'transform':'translateX(0%)'})

	}else{
		$contenedor.css({'visibility':"hidden", 'transform':'translateX(-200%)'})		
	}


	////////// FIN ANIM NOSOTROS


	/////////// INI ANIM SERVICIOS

	$contenedor = $('#cont-servicios')
	ancho_contenedor = parseFloat($contenedor.css('height').replaceAll('px'))


	if((posicion_scroll >= (offset_contenedores[1] ) && posicion_scroll < ($contenedor.offset().top) + ancho_contenedor)){

		$contenedor.css({'visibility':"visible", 'transform':'translateX(0%)'})

	}else{
		$contenedor.css({'visibility':"hidden", 'transform':'translateX(-200%)'})
	}


	////////// FIN ANIM SERVICIOS


	/////////// INI ANIM PROYECTOS

	

	$contenedor = $('#cont-proyectos')
	ancho_contenedor = parseFloat($contenedor.css('height').replaceAll('px'))


	if((posicion_scroll >= (offset_contenedores[2] + ancho_contenedor/2) )){


		$contenedor.css({'visibility':"visible", 'transform':'translateX(0%)'})

	}else{

		$contenedor.css({'visibility':"hidden", 'transform':'translateX(-200%)'})		
	}

	////////// FIN ANIM PROYECTOS


	


}