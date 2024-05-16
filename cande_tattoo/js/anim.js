//INI ANIM HEADER

window.onscroll = function () {anim_header()};

function anim_header(){
	
	var logo = document.getElementsByClassName('cont-logo')[0];
	var estilo_logo_orig = logo.style;

	var nav = document.getElementsByClassName('nav')[0];
	var estilo_nav_orig = nav.style;

	var hdr = document.getElementsByTagName('header')[0];
	var estilo_hdr_orig = hdr.style;
	
	//if(hdr.style.display != ''){
	
		if (document.body.scrollTop > window.innerHeight /4 || document.documentElement.scrollTop > window.innerHeight/4) {
			
			hdr.setAttribute('style','transform:scale(0.4) translate(160vw, -50%);flex-direction:row;opacity:0.8; top:0; border-radius:0px 00px 40px 0px;background-color:rgba(0,0, 0, 0.9);');
			nav.setAttribute('style','transform:scale(1.7);')
			//logo.setAttribute('style', 'transform:translateX(-150%);');
			logo.setAttribute('style','margin-left:0px')
		} else {
			hdr.setAttribute('style',estilo_hdr_orig);
			nav.setAttribute('style', estilo_nav_orig);
			logo.setAttribute('style',estilo_logo_orig);
		}
	//}
  }


//FIN ANIM HEADER



// INI FUNCION CARROUSEL

function anim_car1(){
	
	var cant_elem = 0
	var pos_act = 0
	var pos_manual = 0
	var posiciones_elementos = []

	var cant_elem = document.getElementsByClassName("contenido_carr1").length;
	var porc_elem_car1 = 100/cant_elem
	var ult_elem = (100 - porc_elem_car1) *-1

	//var tiempo_vuelta = (2000 * cant_elem) + 1000
	var tiempo_vuelta = 2000 + 3000;

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

// FIN FUNCION CARROUSEL








