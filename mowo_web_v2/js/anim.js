var ult_pos_scroll = 0
var offset_contenedores = []
var anim_activa = false

var es_mobile = false
var dir_scrolly = true;
var tamanio_pantalla = window.innerWidth


/*
function limita_ejecuta(func, limite) {

	
	let en_ejec;
  
  	return function(...args) {
    
		console.log('lim')
    	if (!en_ejec) {

      		func.apply(this, args);
      		en_ejec = true;
      		setTimeout(() => (en_ejec = false), limite);
		}

		func(...args);
	};
}

*/

function anim_car1(){
	
	var cant_elem = 0
	var pos_act = 0
	var pos_manual = 0
	var posiciones_elementos = []

	var cant_elem = document.getElementsByClassName("contenido_carr1").length;
	var porc_elem_car1 = 100/cant_elem
	var ult_elem = (100 - porc_elem_car1) *-1

	//var tiempo_vuelta = (2000 * cant_elem) + 1000
	var tiempo_vuelta = 2000 * cant_elem;

	document.getElementsByClassName("grupo_elem_carr1")[0].style.width=100*cant_elem + "%"

	anim_vueltas_car1 = () =>{

		if(pos_act > ult_elem){

			pos_act = pos_act - porc_elem_car1;
		}

		else{
			pos_act = 0;
		};

		document.getElementsByClassName("grupo_elem_carr1")[0].style.transform="translateX(" + pos_act + "%)";

	};

var intervalo_anim_car1 = setInterval(anim_vueltas_car1, tiempo_vuelta);


};


$(document).ready(function(){

	let info_dispositivo = navigator.userAgent.toUpperCase()

	if(info_dispositivo.indexOf('ANDROID') != -1 || info_dispositivo.indexOf('MACINTOSH') != -1 || info_dispositivo.indexOf('IPAD') != -1 || info_dispositivo.indexOf('IPHONE') != -1 || tamanio_pantalla < 1024){
		
		es_mobile =true
	}


	let pos_scrolly_ini
	let pos_scrolly_fin

    $(document).on('touchstart', function(e) {
        //pos_scrollx_ini = e.originalEvent.touches[0].clientX;

		pos_scrolly_ini = e.changedTouches[0].clientY
	    
	    anim_logo_portada(event)

    })	

	$(document).on('touchend', function(event) {
        //pos_scrollx_ini = e.originalEvent.touches[0].clientX;
        pos_scrolly_fin = event.changedTouches[0].clientY
        //pos_scrolly_fin

	    if(pos_scrolly_ini > pos_scrolly_fin){
	    	dir_scrolly = true // scroll up
	    }else if(pos_scrolly_ini < pos_scrolly_fin){
	    	dir_scrolly = false // scrol down
	    
	    }

	    anim_logo_portada(event)
	})
    
	$(window).on('wheel', function(event){
		anim_logo_portada(event)
		anim_seccion($('#portfolio'), 1)
		anim_car1()
	})

	$(window).on('scroll', function(event){
		anim_logo_portada(event)
		anim_seccion($('#portfolio'), 1)
		anim_car1()
	})


	$('.controlador-desplegable-servicios').on('click', function(){
		toggle_tarjeta_servicios(this)
	})

	obtener_estilos()

	desplaza_banner_servicios()

 	$(document).on('mousemove', (e) => {
        
        $('#sigue-cursor').css('transform',`translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`);
    });

	window.onresize = function(){

		tamanio_pantalla = window.innerWidth

		if(tamanio_pantalla < 1024){
			
			es_mobile = true

			if(!$('#controlador-nav-mobile').length){

	    		$('nav').after('<span id="controlador-nav-mobile"><img src="assets/img/ico/ham_menu.png" style="height:80%; margin-left:auto;"/></span>')
			}

	    	$('#controlador-nav-mobile').on('click', despliega_nav_mobile)    	
    		$('nav a').on('click', despliega_nav_mobile)
		}else{
			es_mobile = false
			$('nav').css({'display':'flex', 'opacity':'1'})
	    	$('#controlador-nav-mobile').remove()
	    	$('nav a').off('click', despliega_nav_mobile)
	    	//$('#controlador-nav-mobile').on('click', despliega_nav_mobile)

		}
	}


    if(es_mobile){

		if(!$('#controlador-nav-mobile').length){

    		$('nav').after('<span id="controlador-nav-mobile"><img src="assets/img/ico/ham_menu.png" style="height:80%; margin-left:auto;"/></span>')
		}
    	$('#controlador-nav-mobile').on('click', despliega_nav_mobile)    	
    	$('nav a').on('click', despliega_nav_mobile)
    }

})

function despliega_nav_mobile (){

	let $nav = $('nav')
	let displ = $nav.css('display')
	let delay = 500

	if($($nav).css('opacity')  ==  '0'){    			
		delay = 0
		
		setTimeout(function(){
			$($nav).css('opacity', '1')
		}, delay)
		
		$($nav).css('display', 'flex')

	}else{
		
		$($nav).css('opacity', '0')
		
		setTimeout(function(){
			$($nav).toggle()
		}, delay)
	}


}

function anim_logo_portada(event){

	let pos_ini = $(window).scrollTop() 


	//if(!es_mobile){
		var $logo_portada = $('#logo-portada')
		var $portada = $('#portada')
		var $tamanio_logo_portada = $($logo_portada).width() / $($logo_portada).parent().width() *100	
		
		var transition

		
		if($(window).scrollTop() <= $('#portada').height()){
			
			if(parseFloat($('#portada').css('opacity')) > 0) {$('body').addClass('desactiva_scroll')}

			anim_activa = false
			if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0 || dir_scrolly == false) {

		    // Scroll up
				$($logo_portada).css('display', 'block')
				anim_activa = false
				$tamanio_logo_portada = $tamanio_logo_portada / 3
				tamanio_fondo_portada = parseFloat($($portada).css('background-size').replace('%', '')) - 5

				let increm_opacidad

				if(!es_mobile){				
				
					if($tamanio_logo_portada < 50){$tamanio_logo_portada = 50}
					if(tamanio_fondo_portada < 50){tamanio_fondo_portada = 50}

					increm_opacidad = 0.05

				}else{

					if($tamanio_logo_portada < 90){$tamanio_logo_portada = 90}
					if(tamanio_fondo_portada < 100){tamanio_fondo_portada = 100}
					
					increm_opacidad = 0.3
				}
				
				$('body').removeClass('desactiva_scroll')
				$('#portada').css('opacity', parseFloat($('#portada').css('opacity')) + increm_opacidad)

				if(increm_opacidad > 1){increm_opacidad = 1}
				transition = 1
			}
			else {
			    // Scroll down


				let decrem_opacidad

				if(parseFloat($('#portada').css('opacity')) > 0){$('body').addClass('desactiva_scroll')}
				if(!es_mobile) {

					decrem_opacidad = 0.05
				}else{

					decrem_opacidad = 0.3
				}

				if(decrem_opacidad < 0){decrem_opacidad = 0}

				$tamanio_logo_portada = $tamanio_logo_portada * 2
				tamanio_fondo_portada = parseFloat($($portada).css('background-size').replace('%', '')) +5

				$('#portada').css('opacity', parseFloat($('#portada').css('opacity')) - decrem_opacidad)

				if(parseFloat($('#portada').css('opacity')) <= 0){
					//anim_activa = true
					$('body').removeClass('desactiva_scroll') 
					$($logo_portada).css('display', 'none')
					anim_activa = true
				}else{
					$($logo_portada).css('display', 'block')
				}

				transition = 1
			}
			if(!anim_activa){

				$logo_portada.css({'transition':'ease-out '+transition+'s', 'width': $tamanio_logo_portada+'%'})
				$portada.css('background-size', tamanio_fondo_portada + '%')
			}
		}else{

				$('body').removeClass('desactiva_scroll') 
		}
	//}

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
		
		$(elem).find('span').css({'transform':'rotate(0deg)'})

		$(elem).siblings('.cont-desplegado').css({'opacity':'0','transition':'0.5s'})
		
		setTimeout(function(){

			$(elem).siblings('.cont-desplegado').css({'margin-top':'-150%', 'transition':'2s', 'visibility':'hidden', 'height':'5%'})

		},100)

	}else{
		

		$(elem).find('span').css({'transform':'rotate(-270deg)'})

		$(elem).siblings('.cont-desplegado').css({'margin-top':'0%', 'transition':'0.5s ease-in-out', 'visibility':'visible', 'height':'fit-content'})
		
		setTimeout(function(){
			$(elem).siblings('.cont-desplegado').css({'opacity':'1','transition':'0.8s'})

		},200)
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
		}


	anim()

	
}