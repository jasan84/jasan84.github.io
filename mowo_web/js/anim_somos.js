

function anim_m1(){

	$('#m-somos').css({'rotate':'360deg', 'transition':'60s linear'})
	
	setInterval(function(){
	
		$('#m-somos').css({'rotate':'0deg', 'transition':'0s linear'})

		if($('#m-somos').css('rotate') == '360deg'){

			$('#m-somos').css({'rotate':'0deg', 'transition':'0s linear'})

		}else if($('#m-somos').css('rotate') == '0deg'){

			$('#m-somos').css({'rotate':'360deg', 'transition':'60s linear'})

		}

	},60000)


	let colores_trazo = ['red', 'green', 'blue', 'white']
	let colores_relleno= ['cyan', 'magenta', 'yellow', 'rgba(255,255,255,0.5)']

	let indice = 0

	setInterval(function(){
		
		if(indice == colores_trazo.length){indice = 0}		

		$('#m-logo-svg').css({'fill': colores_relleno[indice], 'stroke': colores_trazo[indice]})
		
		indice++


	},5000)
}


$(document).ready(function(){


	// INI ANIM NAV

	let $botones_nav = $('.boton-nav')

	$($botones_nav).mouseenter(Anim_paleta)

	let tiempo_transicion = parseFloat($botones_nav.css('transition').replace('s ease-in-out'))

	let valores_subida =[-50, -20, -45, -80]
	let valores_bajada =[0, 30, 50, 20]
	let grados_rotacion=[5, -3, 8, -1]


	let indice_subida = []
	let indice_bajada = []
	let indice_grados = []
	
	for(let i=0;i<$botones_nav.length;i++){
		indice_subida.push(Math.floor(Math.random() * ($botones_nav.length-1)))
		indice_bajada.push(Math.floor(Math.random() * ($botones_nav.length-1)))
		indice_grados.push(Math.floor(Math.random() * ($botones_nav.length-1)))
	}

	setInterval(function(){

		for(let i=0;i<$botones_nav.length;i++){

			$($botones_nav[i]).css({'transform':'translateY(' + valores_subida[indice_subida[i]] + '%) rotate(' + grados_rotacion[indice_grados[i]] + 'deg)'})
		}

		setTimeout(function(){

		for(let i=0;i<$botones_nav.length;i++){

			$($botones_nav[i]).css({'transform':'translateY(' + valores_bajada[indice_subida[i]] + '%) rotate(' + grados_rotacion[indice_grados[i]]*-1 + 'deg)'})
		}

		},tiempo_transicion*500)

	},tiempo_transicion*1000)




	// FIN ANIM NAV



	// INI ANIM SOMOS

	let letras_titulo_somos = $('.titulo-somos')

	$('#cont-texto-somos').mouseenter(function(){
		
		$('#cont-texto-somos').css({'background-color':'rgba(226,93,19,0.9)', 'text-shadow':'10px 10px 10px black'})

		let indice = 0

		let intervalo = setInterval(function (){

			setTimeout(function(){

				$(letras_titulo_somos[indice]).css({'transform':'translateY(-50px) rotate(360deg)','margin':'0px'})

				indice++

			},300)

			if(indice == $(letras_titulo_somos).length){clearInterval(intervalo)}

		},100)
	})


	$('#cont-texto-somos').mouseleave(function(){
		
		$('#cont-texto-somos').css({'background-color':'unset', 'text-shadow':'none'})
		
		for(let i=0;i<letras_titulo_somos.length;i++){

			if(i<6){
				$(letras_titulo_somos[i]).css({'transform':'translateY(0) rotate(0deg)'})
			}else{
				$(letras_titulo_somos[i]).css({'transform':'scale(1.8) translate(-100px, 20px)', 'margin':'1rem'})
			}
		}
	})

	// FIN ANIM SOMOS




	// INI ANIM HICIMOS

	let $titulos_contenido = $('.acceso-tarjeta-hicimos')

	$titulos_contenido.click(function(){


		if($(this).attr('value') == '0'){


			let arr_colores_base = ['rgb(0,255,255)', 'rgb(255,0,255)', 'rgb(255,255,0)', 'rgb(0,0,0)']

			$titulos_contenido.attr('value','0') 
			$titulos_contenido.css({'transform': 'translateY(0%)', 'border-radius':'0px 0px 20px 20px', 'background-color':'#b6cef2'})
			$('.cont-detalle-hicimos').css({'opacity':'0','display':'none'})
			$('.letra-svg-hicimos').css('fill','unset')

			let tiempo_transicion = parseFloat($('.cont-detalle-hicimos').css('transition').replace('s',''))*1000

			$(this).css({'transform':'translateY(100%)', 'border-radius':'20px 20px 0px 0px'/*,'background-color':'unset'*/})
			$(this).attr('value', '1')

			$(this).find('svg').css({'fill':arr_colores_base[$(this).index()]})


			$($('.cont-detalle-hicimos')[$(this).index()]).css('display', 'flex')

			let that = $(this)

			setTimeout(function(){

				$($('.cont-detalle-hicimos')[that.index()]).css('opacity', '1')
			},tiempo_transicion)


		}else{

			$(this).css({'transform':'translateY(0%)', 'border-radius':'0px 0px 20px 20px', 'background-color':'#b6cef2'})
			$(this).attr('value', '0')

			$(this).find('svg').css('fill', 'unset')

			$($('.cont-detalle-hicimos')[$(this).index()]).css('opacity', '0')

			let that = $(this)

			setTimeout(function(){

				$($('.cont-detalle-hicimos')[that.index()]).css({'display':'none'})
			},tiempo_transicion)

		}
	})


	// FIN ANIM HICIMOS

})
