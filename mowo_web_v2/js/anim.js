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
	
	if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
    // Scroll up
		anim_activa = false
		$tamanio_logo_portada = $tamanio_logo_portada / 2
		$('body').removeClass('desactiva_scroll')
		$('#portada').css('opacity', parseFloat($('#portada').css('opacity')) + 0.008)
		transition = 1
	}
	else {
	    // Scroll down
		$tamanio_logo_portada = $tamanio_logo_portada * 2
		$('body').addClass('desactiva_scroll')
		$('#portada').css('opacity', parseFloat($('#portada').css('opacity')) - 0.01)
		transition = 1
	}

	if($tamanio_logo_portada < 50){$tamanio_logo_portada = 50}

	if($($logo_portada).width() >= $('body').width()*3){
		anim_activa = true
		$('body').removeClass('desactiva_scroll') 
		$($logo_portada).css('display', 'none')
	}else{
		$($logo_portada).css('display', 'block')
	}

	if(!anim_activa){

		$logo_portada.css({'transition':'ease-out '+transition+'s', 'width': $tamanio_logo_portada+'%'})
	}

}


async function anim_seccion(contenedor, offset){

	let posicion_scroll = $(window).scrollTop()

	let $contenedor = contenedor
	let alto_contenedor = parseFloat($contenedor.css('height').replaceAll('px'))
	let $elems = $('.titulo-portfolio')

	//console.log(posicion_scroll,offset_contenedores[offset], $contenedor.offset().top,  alto_contenedor)

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

	let indice = 0

	let $titulos = [$('.cont-titulo-servicios')[0], $('.cont-titulo-servicios')[1]]


	tiempo = 20000

	setInterval(function(){

		let pos_final = parseFloat($('.cont-titulo-servicios').css('width').replace('px', ''))
		let pos_vuelta = 100

		/*if(indice == 1){
			pos_final = pos_final *2
			pos_vuelta = pos_vuelta *2
		}*/

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
	}, 10)


		/*

		$('.cont-titulo-servicios').css({'left':'0','transition':'linear ' + tiempo / 1000 + 's'})

		let pos_actual = parseFloat($($('.cont-titulo-servicios')).css('left').replace('px', ''))		
		let pos_final = 0

		let ancho_titulos = parseFloat('-' + $($('.cont-titulo-servicios')).css('width'))

		let pos_vuelta = ancho_titulos *-2

		if(indice==0){pos_final = ancho_titulos/2}else{pos_final = ancho_titulos *2;pos_vuelta=pos_vuelta*2}

		
		$($('.cont-titulo-servicios')).css('left', pos_final)
		let pos_titulos = parseFloat($($('.cont-titulo-servicios')).css('left').replace('px', ''))
		
		
		console.log(parseFloat($($('.cont-titulo-servicios')).css('left').replace('px', '')), pos_final)
		if(pos_titulos <= pos_final){
			$($('.cont-titulo-servicios')[indice]).css('left', pos_vuelta)
		}

		if(indice==0){indice=1}else{indice=0}

	},tiempo)

	*/

	/*
	let $titulos = $('.cont-titulo-servicios')

	$($titulos).css('left', '0')

	$('.cont-titulo-servicios').css('transition', '5s linear')


	let indice = 0

		setInterval(function(){

			let pos_actual = parseFloat($($titulos).css('left').replace('px', ''))
			let ancho_titulos = parseFloat('-' + $($titulos).css('width'))
			$($titulos).css('left', ancho_titulos*2)
			
			console.log(pos_titulos,ancho_titulos)
			if(pos_titulos <= ancho_titulos){
				console.log($($('.cont-titulo-servicios')[indice]), $($('.cont-titulo-servicios')[indice]).css('left'))
			}

			
		}, 5000)


		if(indice==0){indice=1}else{indice=0}

	*/
}