window.onscroll = function () {anim_header(), anim_seccion($('#cont-nosotros'), 0), anim_seccion($('#cont-servicios'), 1),anim_seccion($('#cont-proyectos'), 2)/*, anim_contador()*/};
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


}


function anim_seccion(contenedor, offset){

	let posicion_scroll = $(window).scrollTop()

	let $contenedor = contenedor
	let ancho_contenedor = parseFloat($contenedor.css('height').replaceAll('px'))


	if((posicion_scroll >= (offset_contenedores[offset] ) && posicion_scroll < ($contenedor.offset().top) + ancho_contenedor)){

		
		$contenedor.css({'visibility':"visible", 'transform':'translateX(0%)'})

	}else{
		$contenedor.css({'visibility':"hidden", 'transform':'translateX(-200%)'})		
	}

	if(contenedor.attr('id') == 'cont-nosotros'){
		//if(contenedor.attr('value') == '0'){window.scrollTo(0, contenedor.offset().top)}
		anim_contador()
	}

}


function anim_contador(){

	let $cont_contadores = $('.num-contador')

	let $elem_padre = $($cont_contadores[0]).parents('div')
	$elem_padre = $($elem_padre[$elem_padre.length-1])		

	for(let i=0; i<$cont_contadores.length;i++){

		let contador = 0
		let fin_contador = 0

		let signo_ini 
		let signo_fin 

		if($($cont_contadores[i]).text().includes('+')){
			signo_ini = '+'
		}else{
			signo_ini = ''
		}

		if($($cont_contadores[i]).text().includes('%')){
			signo_fin = '%'
		}else{
			signo_fin = ''
		}		

		fin_contador = parseFloat($($cont_contadores[i]).attr('value'))
		
		//if($elem_padre.offset().left == 0){			

		if($elem_padre.attr('value') == '0'){

			let sec = setInterval(function(){

				contador+=1

				if(contador <= fin_contador){
					$($cont_contadores[i]).text(signo_ini + (contador) + signo_fin)
				}else{				
					clearInterval(sec)
				}

			},30)
		}


		if(i==$cont_contadores.length-1){

			$elem_padre.attr('value', '1')
		}

		if($elem_padre.offset().left < 0){ //}else{

			$($cont_contadores[i]).text(signo_ini + '0' + signo_fin)
			$elem_padre.attr('value', '0')

		}else{

			$elem_padre.attr('value', '1')
		}

	}
}