var ult_pos_scroll = 0

$(document).ready(function(){

	$(window).on('wheel', function(event){
		anim_logo_portada(event)
	})

	$(window).on('scroll', function(event){
		anim_logo_portada(event)
	})

	$(document).on('touchmove', function() { //touchmove works for iOS, I don't know if Android supports it
  $(document).trigger('wheel');
});
})

function anim_logo_portada(event){


	var $logo_portada = $('#logo-portada')
	var $tamanio_logo_portada = $($logo_portada).width() / $($logo_portada).parent().width() *100	
	
	
	console.log(event.deltaY)
	if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
    // Scroll up
		$tamanio_logo_portada = $tamanio_logo_portada / 2
		$('body').removeClass('desactiva_scroll')
		$('#portada').css('opacity', parseFloat($('#portada').css('opacity')) + 0.03)
	}
	else {
	    // Scroll down
		$tamanio_logo_portada = $tamanio_logo_portada * 2
		$('body').addClass('desactiva_scroll')
		$('#portada').css('opacity', parseFloat($('#portada').css('opacity')) - 0.05)
	}

	if($tamanio_logo_portada < 50){$tamanio_logo_portada = 50}

	if($($logo_portada).width() >= $('body').width()*3){
		$('body').removeClass('desactiva_scroll') 
		$($logo_portada).css('display', 'none')
	}else{
		$($logo_portada).css('display', 'block')
	}

	$logo_portada.css({'transition':'ease-out 1s', 'width': $tamanio_logo_portada+'%'})

}