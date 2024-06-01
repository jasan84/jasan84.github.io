
//INI ANIM HEADER

window.onscroll = function () {anim_item_nav(document.getElementsByClassName('item-nav'))};
window.onload = function () {anim_car1(), anim_tarjeta_galeria()};

function colapsa_header(){	
	

	let hdr = document.getElementById('hdr');
	//let estilo_hdr_orig = hdr.style;
	let estilo_hdr_orig = hdr.getAttribute('style');

	let cont_logo = document.getElementById('cont-logo');
	let estilo_cont_logo_orig = cont_logo.style;

	let logo = document.getElementById('logo');
	let estilo_logo_orig = logo.style;

	let nav = document.getElementById('nav');
	let estilo_nav_orig = nav.style;
	
	
	if (document.body.scrollTop > window.innerHeight /4 || document.documentElement.scrollTop > window.innerHeight/4){

		let to = 0;


		if(hdr.getAttribute('state')=='estirado'){to = 2000};

		setTimeout(function(){
			
			hdr.setAttribute('style','width:80px; height:50px;border-radius:0px 50% 50% 0px; transition:0.6s;');
			hdr.setAttribute('state','colapsado');
			cont_logo.setAttribute('style','margin:0px');			
			nav.setAttribute('onclick','revela_header()');			
		},to);

	} else {
		hdr.setAttribute('style',estilo_hdr_orig);
		hdr.setAttribute('style',"transition:0.2s");
		hdr.setAttribute('state','expandido');
		cont_logo.setAttribute('style',estilo_cont_logo_orig);
		nav.removeAttribute('onclick','revela_header()');
	}
}

function anim_item_nav(items_nav){

	let to = 0;
	let contador=0;

	if(document.getElementById('hdr').getAttribute('state') == 'colapsado' || document.getElementById('hdr').getAttribute('state') == 'estirado'){

		 to = 1500;
	}else{
		 to = 0;
	};

	
		
			
	setTimeout(function(){

		let lista_items_nav = items_nav;
		let lista_estilos_orig_items_nav = [];
		let lista_valor_item = [];

		for(let a=0;a<lista_items_nav.length;a++){
			//lista_estilos_orig_items_nav.push(lista_items_nav[a].style);
			lista_estilos_orig_items_nav.push(lista_items_nav[a].getAttribute('style'));
			lista_valor_item.push(lista_items_nav[a].getAttribute('value'));
		}


		let intervalo = setInterval(function(){

			//if( lista_valor_item[contador] == "1"){
			if ((document.body.scrollTop > window.innerHeight /4 || document.documentElement.scrollTop > window.innerHeight/4) && hdr.getAttribute('state')!='estirado') {
			
				lista_items_nav[contador].setAttribute('style', 'transition:0.5s;opacity:0; transform: translate(-150px,-150px);');
				lista_items_nav[contador].setAttribute('value', '0');

			}else{
				lista_items_nav[contador].setAttribute('value', '1');
				lista_items_nav[contador].setAttribute('style', 'transition:0.5s;'+lista_valor_item[contador]);

			}
			
			contador+=1;

			if(contador == lista_items_nav.length){
				clearInterval(intervalo);
			}
			
		},80)

	},to);

	setTimeout(function(){

		colapsa_header();
	},500);

}

function revela_header(){

	let hdr = document.getElementById('hdr');	
	hdr.setAttribute('state','estirado');
	hdr.setAttribute('style', "width:70%; height:90px; border-radius:20px; transition:1.2s; background-color:rgba(80, 7, 129,0.8)");
	anim_item_nav(document.getElementsByClassName('item-nav'));	
	
	/*setTimeout(function(){		
		colapsa_header();
	},3000)*/
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

//INI ANIM TARJETAS TECNICAS


//function anim_icono_tecnica(){
	
	let tarjetas = document.getElementsByClassName('tarjeta-tecnica');
	let titulos = document.getElementsByClassName('titulo-tarjeta-tecnica');
	let contenedor_iconos = document.getElementsByClassName('cont-icono-tarjeta-tecnica');
	let iconos = document.getElementsByClassName('icono-tarjeta-tecnica');
	let textos = document.getElementsByClassName('resumen-tarjeta-tecnica');
	
	let estilo_tarjetas_orig = [];
	let estilo_titulos_orig = [];
	let estilo_contenedor_iconos_orig = [];
	let estilo_iconos_orig = [];
	let estilo_textos_orig = [];
	
	
	let tiempo_intervalo = 80;
	let tiempo_intervalo2 = tiempo_intervalo*2;
	let vibracion2;
	let vibracion1;
	var traslado = '0.8';

	for(let a=0;a<tarjetas.length;a++){
		
		estilo_tarjetas_orig.push(window.getComputedStyle(tarjetas[a]));
		estilo_iconos_orig.push(window.getComputedStyle(iconos[a]));
		estilo_contenedor_iconos_orig.push(window.getComputedStyle(contenedor_iconos[a]));
		estilo_textos_orig.push(window.getComputedStyle(textos[a]));		
		estilo_titulos_orig.push(window.getComputedStyle(titulos[a]));

		tarjetas[a].addEventListener("mouseenter",(e) =>{

			
			vibracion1 = setInterval( function(){

				iconos[a].style.transform='translate('+traslado+'px, -'+traslado+'px)';	

			},tiempo_intervalo);

			vibracion2 = setInterval( function(){
	
				iconos[a].style.transform='translate(-'+traslado+'px, '+traslado+'px)';
	
			},tiempo_intervalo2);
		
			contenedor_iconos[a].style.transition='1s';
			tarjetas[a].style.transition='1s';
			textos[a].style.transition='2s';
			

			tarjetas[a].style.backgroundColor='white';
			contenedor_iconos[a].style.scale='3 3';
			contenedor_iconos[a].style.transformOrigin ='0 0';
			/*contenedor_iconos[a].style.transform='translateY(-200%)';*/		
			contenedor_iconos[a].style.opacity='0.1';
			textos[a].style.opacity='1';

			setTimeout(function (){
				
			clearInterval(vibracion1);
			clearInterval(vibracion2);
			},2000);

		});

		tarjetas[a].addEventListener("mouseleave",(e) =>{
		

			tarjetas[a].setAttribute('style',estilo_tarjetas_orig[a]);
			tarjetas[a].setAttribute('style','transition:1s');

			contenedor_iconos[a].setAttribute('style',estilo_contenedor_iconos_orig[a]);
			contenedor_iconos[a].setAttribute('style','transition:2s');

			textos[a].setAttribute('style',estilo_textos_orig[a]);
			textos[a].setAttribute('style','transition:2s');
		
			clearInterval(vibracion1);
			clearInterval(vibracion2);


		})
	}
//}

//FIN ANIM TARJETAS TECNICAS


//INI ANIM IMAGEN GALERIA

function anim_tarjeta_galeria(){

	let tarjetas = document.getElementsByClassName('tarjeta-galeria');
	let img_tarjetas = document.getElementsByClassName('img-galeria');

	let estilo_tarjetas_orig = [];
	let estilo_img_tarjetas_orig = [];
	let imgs =[]
;
	for(let a=0; a<tarjetas.length;a++){
		
		estilo_tarjetas_orig.push(window.getComputedStyle(tarjetas[a]));
		estilo_img_tarjetas_orig.push(window.getComputedStyle(img_tarjetas[a]));

		tarjetas[a].addEventListener("mouseenter",(e) =>{

			
			tarjetas[a].style.transition = "2s";
			img_tarjetas[a].style.transition = "1s";
			img_tarjetas[a].style.filter='none';

			tarjetas[a].style.borderRadius="0px";
			tarjetas[a].style.borderColor="transparent";

			/*img_tarjetas[a].style.width = "90vw";
			img_tarjetas[a].style.hight = "auto";*/


		

		});


		tarjetas[a].addEventListener("mouseleave",(e) =>{
			

			tarjetas[a].setAttribute('style',estilo_tarjetas_orig[a]);
			tarjetas[a].style.transition = "2s";
			img_tarjetas[a].setAttribute('style',estilo_img_tarjetas_orig[a]);
			img_tarjetas[a].style.transition = "2s";

		

		});


	}

}
//FIN ANIM IMAGEN GALERIA

