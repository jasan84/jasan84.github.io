//INI ANIM HEADER

window.onscroll = function () {anim_item_nav(document.getElementsByClassName('item-nav'))};

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
	
	//if(hdr.getAttribute('state')!='estirado'){
	
		if (document.body.scrollTop > window.innerHeight /4 || document.documentElement.scrollTop > window.innerHeight/4){


			if(hdr.getAttribute('state')!='estirado'){
				
				hdr.setAttribute('style','width:80px; height:50px;border-radius:0px 50% 50% 0px; transition:2s;');
				hdr.setAttribute('state','colapsado');
				cont_logo.setAttribute('style','margin:0px');
				//logo.setAttribute('onclick','revela_header()');
				nav.setAttribute('onclick','revela_header()');
			}

		} else {
			hdr.setAttribute('style',estilo_hdr_orig);
			hdr.setAttribute('style',"transition:0.2s");
			hdr.setAttribute('state','expandido');
			cont_logo.setAttribute('style',estilo_cont_logo_orig);
			//logo.removeAttribute('onclick');
			nav.removeAttribute('onclick','revela_header()');
		}
	//}
}

function anim_item_nav(items_nav){

let lista_items_nav = items_nav;
let lista_estilos_orig_items_nav = [];
let lista_valor_item = [];

for(let a=0;a<lista_items_nav.length;a++){
	//lista_estilos_orig_items_nav.push(lista_items_nav[a].style);
	lista_estilos_orig_items_nav.push(lista_items_nav[a].getAttribute('style'));
	lista_valor_item.push(lista_items_nav[a].getAttribute('value'));
}


	let contador=0;
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

	colapsa_header();

}

function revela_header(){

	let hdr = document.getElementById('hdr');	
	hdr.setAttribute('state','estirado');
	hdr.setAttribute('style', "width:70%; height:50px; border-radius:20px; transition:1.2s; background-color:rgba(80, 7, 129,0.8)");
	anim_item_nav(document.getElementsByClassName('item-nav'));	
	
	setTimeout(function(){
		hdr.setAttribute('state','colapsado');ç
	},3000)
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








