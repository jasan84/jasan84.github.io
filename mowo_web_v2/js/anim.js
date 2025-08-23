var ult_pos_scroll = 0
var offset_contenedores = []
var anim_activa = false

$(document).ready(function(){

	$(window).on('wheel', function(event){
		anim_logo_portada(event)
		anim_seccion($('#portfolio'), 1)
	})

	$(window).on('scroll', function(event){
		anim_logo_portada(event)
		anim_seccion($('#portfolio'), 1)
	})

	$(window).on('touchmove', function() { 
  		$(window).trigger('wheel');
		anim_seccion($('#portfolio'), 1)
	});

	$(window).on('touchmove', function() { 
  		$(window).trigger('scroll');
		anim_seccion($('#portfolio'), 1)
	});

	$('.controlador-desplegable-servicios').on('click', function(){
		toggle_tarjeta_servicios(this)
	})

	obtener_estilos()

	desplaza_banner_servicios()
})

function anim_logo_portada(event){


	var $logo_portada = $('#logo-portada')
	var $tamanio_logo_portada = $($logo_portada).width() / $($logo_portada).parent().width() *100	
	var transition
	
	if($(window).scrollTop() <= $('#portada').height()){

	
		if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
	    // Scroll up
			anim_activa = false
			$tamanio_logo_portada = $tamanio_logo_portada / 3
			
			if($tamanio_logo_portada < 50){$tamanio_logo_portada = 50}
			
			$('body').removeClass('desactiva_scroll')
			$('#portada').css('opacity', parseFloat($('#portada').css('opacity')) + 0.008)
			transition = 1
		}
		else {
		    // Scroll down

			$('body').addClass('desactiva_scroll')
			$tamanio_logo_portada = $tamanio_logo_portada * 2

			$('#portada').css('opacity', parseFloat($('#portada').css('opacity')) - 0.01)

			if($($logo_portada).width() >= $('body').width()*3){
				anim_activa = true
				$('body').removeClass('desactiva_scroll') 
				$($logo_portada).css('display', 'none')
			}else{
				$($logo_portada).css('display', 'block')
			}
			/*$('body').addClass('desactiva_scroll')
			$('#portada').css('opacity', parseFloat($('#portada').css('opacity')) - 0.01)*/
			transition = 1
		}

		/*
		if($tamanio_logo_portada < 50){$tamanio_logo_portada = 50}

		if($($logo_portada).width() >= $('body').width()*3){
			anim_activa = true
			$('body').removeClass('desactiva_scroll') 
			$($logo_portada).css('display', 'none')
		}else{
			$($logo_portada).css('display', 'block')
		}
		*/

		if(!anim_activa){

			$logo_portada.css({'transition':'ease-out '+transition+'s', 'width': $tamanio_logo_portada+'%'})
		}
	}else{

			$('body').removeClass('desactiva_scroll') 
	}

}


async function anim_seccion(contenedor, offset){

	let posicion_scroll = $(window).scrollTop()

	let $contenedor = contenedor
	let alto_contenedor = parseFloat($contenedor.css('height').replaceAll('px'))
	let $elems = $('.titulo-portfolio')

	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	if(posicion_scroll >= (offset_contenedores[offset]/2 ) && posicion_scroll <= ($contenedor.offset().top) + alto_contenedor){

		for(let a=0; a<$elems.length;a++){

			$($elems[a]).css({'transform':'translateX(0)', 'transition':'ease-in-out 1.5s'})
			await sleep(300)

		}
		

	}else{

		for(let a=0; a<$elems.length;a++){

			$($elems[a]).css({'transform':'translateX(-150%)', 'transition':'ease-in-out 0.5s'})
			await sleep(300)

		}
	}

}

function obtener_estilos(){

	$contenedores = $('section')

	let ancho = parseFloat($('#'+$contenedores[0].getAttribute('id')).css('height').replaceAll('px'))

	 for(let i=0; i<$contenedores.length; i++){

	 	offset_contenedores.push(ancho)

	 	ancho += parseFloat($('#'+$contenedores[i].getAttribute('id')).css('height').replaceAll('px'))

	 }

}


function toggle_tarjeta_servicios(elem){

	//$(elem).siblings('.cont-desplegado').css({'margin-top':'-50%'})
	if($(elem).siblings('.cont-desplegado').css('margin-top') == '0px'){
		
		$(elem).css({'transform':'rotate(0deg)'})

		$(elem).siblings('.cont-desplegado').css({'opacity':'0','transition':'0.5s'})
		
		setTimeout(function(){

			$(elem).siblings('.cont-desplegado').css({'margin-top':'-50%', 'transition':'2s', 'visibility':'hidden'})

		},100)

	}else{
		

		$(elem).css({'transform':'rotate(-270deg)'})

		$(elem).siblings('.cont-desplegado').css({'margin-top':'0%', 'transition':'0.3s', 'visibility':'visible'})
		
		setTimeout(function(){
			$(elem).siblings('.cont-desplegado').css({'opacity':'1','transition':'0.8s'})


		},100)
	}

}


function desplaza_banner_servicios(){

	let velocidad = 1.5
	let $elementos_desplaza = $('.cont-titulo-servicios')
	let ancho_elem_desplaza = parseFloat($($elementos_desplaza).css('width').replace('px','')) 
	let posicion_desplaza1 = (ancho_elem_desplaza)
	let posicion_desplaza2 = posicion_desplaza1

	function anim() {

				
			posicion_desplaza1-= velocidad
			posicion_desplaza2-= velocidad

			$($elementos_desplaza[0]).css({'opacity':'1','transform':`translateX(${posicion_desplaza1}px`})
			$($elementos_desplaza[1]).css({'opacity':'1','transform':`translateX(${posicion_desplaza2}px`})


			if($($elementos_desplaza[0]).offset().left <= ancho_elem_desplaza*(-1)){

				$($elementos_desplaza[0]).css({'opacity':'0', 'transform':`translateX(${0}px`})

				posicion_desplaza1 = ancho_elem_desplaza
			}

			if($($elementos_desplaza[1]).offset().left <= ancho_elem_desplaza*(-1)){

				$($elementos_desplaza[1]).css({'opacity':'0', 'transform':`translateX(${ancho_elem_desplaza*(-1)}px)`})

				posicion_desplaza2 = 0
			}

			requestAnimationFrame(anim)

			/*
			let indice = 0

			let $titulos = [$('.cont-titulo-servicios')[0], $('.cont-titulo-servicios')[1]]


			tiempo = 2000

			setInterval(function(){

				let pos_final = parseFloat($('.cont-titulo-servicios').css('width').replace('px', ''))
				let pos_vuelta = 100


				$($('.cont-titulo-servicios')[0]).css({'transition':'linear ' + tiempo/1000 + 's', 'left':'-100%'})

				setTimeout(function(){
					$($('.cont-titulo-servicios')[1]).css({'transition':'linear ' + (tiempo/1000) + 's', 'left':'-200%'})
				}, tiempo/2 )
				
					
					if(parseFloat($($('.cont-titulo-servicios')[0]).css('left').replace('px')) <= pos_final*(-1)){

						$($('.cont-titulo-servicios')[0]).css({'left': pos_vuelta + '%','transition':'linear 0s'})
					}
					if(parseFloat($($('.cont-titulo-servicios')[1]).css('left').replace('px')) <= pos_final*(-2)){

						$($('.cont-titulo-servicios')[1]).css({'left': '0%','transition':'linear 0s'})
					}

			
				if(indice==0){indice=1}else{indice=0}
				
			}, 0)
			*/
			
		}


	anim()

	
}