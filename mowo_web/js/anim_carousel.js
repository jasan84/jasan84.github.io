<<<<<<< HEAD

// INI FUNCION CAR1

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

// FIN FUNCION CAR1


//------------------------------




//INI FUNCION CAR2

function anim_car2(fun){
	
	var cant_elem = 0
	var pos_act = 0
	var indice_indicador = 0

	var ini_reinicio;


	var pos_elem_car2 = 0
	var posiciones_elementos = []

	var cant_elem = document.getElementsByClassName("contenido_carr2").length;
	var porc_elem_car2 = 100/cant_elem
	var ult_elem = (100 - porc_elem_car2) *-1

	//var tiempo_vuelta = (1500 * cant_elem) + 1000
	var tiempo_vuelta = 2000 + 2500

	document.getElementsByClassName("grupo_elem_carr2")[0].style.width=100*cant_elem + "%"

	for(i=0;i<cant_elem;i++){

		var posiciones_car2 = document.getElementsByClassName("posiciones_car2")[0];

		var indicador_pos_car2 = document.createElement("div");
		indicador_pos_car2.className ="indicador_pos_car2";
		indicador_pos_car2.setAttribute("value", i);
		indicador_pos_car2.addEventListener("click", mov_manual);

		var valor_controles_car2 = document.getElementById("control_ant_car2");
		valor_controles_car2.addEventListener("click", retrocede_manual)
		
		var valor_controles_car2 = document.getElementById("control_sig_car2");
		valor_controles_car2.addEventListener("click", avanza_manual)


		valor_controles_car2 = null;



		posiciones_car2.appendChild(indicador_pos_car2,"");
		posiciones_car2.style.width=cant_elem*3 + "%";


		posiciones_elementos.push(pos_elem_car2);
		pos_elem_car2 = (pos_elem_car2 - porc_elem_car2);

	};	
	
	document.getElementsByClassName("indicador_pos_car2")[indice_indicador].style="background-color:black";	


	function vacia_indicadores(){

		for(i=0;i<cant_elem;i++){

			document.getElementsByClassName("indicador_pos_car2")[i].style="background-color:none";	
		};
	};

	function anim_vueltas_car2(){

		vacia_indicadores();
		
		if(indice_indicador < cant_elem-1){

			pos_act = pos_act - porc_elem_car2;
			indice_indicador++
		}

		else{
			pos_act = 0;
			indice_indicador=0;
		};

		//console.log(indice_indicador);

		document.getElementsByClassName("grupo_elem_carr2")[0].style.transform="translateX(" + posiciones_elementos[indice_indicador] + "%)";		
		document.getElementsByClassName("indicador_pos_car2")[indice_indicador].style="background-color:black";			

		var valor_controles_car2 = document.getElementsByClassName("controles_car2");
		valor_controles_car2[0].setAttribute("value",indice_indicador);
		valor_controles_car2[1].setAttribute("value",indice_indicador);

	};

	intervalo_anim_car2 = setInterval(anim_vueltas_car2, tiempo_vuelta);

	function avanza_manual(){		

		clearTimeout(ini_reinicio);
		vacia_indicadores();


		pausa();

		//prox_pos= 0;

		if (indice_indicador < cant_elem-1){
			prox_pos = indice_indicador+1;
		}
		else{
			prox_pos = 0;
		};

		indice_indicador = prox_pos;

		document.getElementsByClassName("grupo_elem_carr2")[0].style.transform="translateX(" + posiciones_elementos[prox_pos] + "%)";	
		document.getElementsByClassName("indicador_pos_car2")[prox_pos].style="background-color:black";
		//console.log("avanza");

	};

	function retrocede_manual(){		

		clearTimeout(ini_reinicio);
		vacia_indicadores();

		pausa();

		//prox_pos= 0;

		if (indice_indicador > 0){
			prox_pos = indice_indicador-1;
		}
		else{
			prox_pos = cant_elem-1;
		};

		indice_indicador = prox_pos;

		document.getElementsByClassName("grupo_elem_carr2")[0].style.transform="translateX(" + posiciones_elementos[prox_pos] + "%)";	
		document.getElementsByClassName("indicador_pos_car2")[prox_pos].style="background-color:black";

		//console.log("retrocede");

	};

	function mov_manual(){

		valor_pos_manual = Number(this.getAttribute("value"));	
		indice_indicador = valor_pos_manual;		

		clearTimeout(ini_reinicio);

		pausa();

		document.getElementsByClassName("grupo_elem_carr2")[0].style.transform="translateX(" + posiciones_elementos[valor_pos_manual] + "%)";
		document.getElementsByClassName("indicador_pos_car2")[valor_pos_manual].style="background-color:black";



	};

	
	function pausa(){

		clearInterval(intervalo_anim_car2);


		vacia_indicadores();

		//console.log("pausa");


		ini_reinicio = setTimeout(reinicio,3000);

	};

	function reinicio() {

		 intervalo_anim_car2 = setInterval(anim_vueltas_car2, tiempo_vuelta);
		
		 //console.log("reinicio");
	};

};

// FIN FUNCION CAR2


//------------------------------




//INI FUNCION CAR3

function anim_car3(fun){
	
	var cant_elem = 0
	var pos_act = 0
	var indice_indicador = 0

	var ini_reinicio;


	var pos_elem_car3 = 0
	var posiciones_elementos = []

	var cant_elem = document.getElementsByClassName("contenido_carr3").length;
	var porc_elem_car3 = 100/cant_elem
	var ult_elem = (100 - porc_elem_car3) *-1

	//var tiempo_vuelta = (1500 * cant_elem) + 1000
	var tiempo_vuelta = 2000 + 2500

	var color_indicador_car3_vacio = "rgba(225, 225, 225, 0.8)"
	var color_indicador_car3 = ["rgba(255, 110, 51, 0.8)","rgba(200, 157, 13, 0.8)", "rgba(161, 219, 52, 0.8)"]

	document.getElementsByClassName("grupo_elem_carr3")[0].style.height=100*cant_elem + "%"

	for(i=0;i<cant_elem;i++){

		var posiciones_car3 = document.getElementsByClassName("posiciones_car3")[0];

		var indicador_pos_car3 = document.createElement("div");
		indicador_pos_car3.className ="indicador_pos_car3";
		indicador_pos_car3.setAttribute("value", i);
		indicador_pos_car3.addEventListener("click", mov_manual);
		indicador_pos_car3.style="background-color:" + color_indicador_car3_vacio +"; height:"+100/cant_elem+"%; width:100%";	

		var valor_controles_car3 = document.getElementById("control_ant_car3");
		valor_controles_car3.addEventListener("click", retrocede_manual)
		
		var valor_controles_car3 = document.getElementById("control_sig_car3");
		valor_controles_car3.addEventListener("click", avanza_manual);

		var texto_elem_car3 = document.getElementsByClassName("texto_contenido_carr3")[i].childNodes[1];
		texto_elem_car3.addEventListener("mouseover",stop_car3);
		texto_elem_car3.addEventListener("mouseout",start_car3);

		var caja_texto_elem_car3 = document.getElementsByClassName("texto_contenido_carr3")[i];


		valor_controles_car3 = null;

		posiciones_car3.appendChild(indicador_pos_car3,"");
		//posiciones_car3.style.width=cant_elem*3 + "%";


		posiciones_elementos.push(pos_elem_car3);
		pos_elem_car3 = (pos_elem_car3 - porc_elem_car3);
	};	
	
	anim_elem_car3(indice_indicador);

	function stop_car3 (){
		pausa(0);
		//console.log("stop")
	}
	function start_car3 (){
		pausa(1);
		//console.log("start")
	}

	function vacia_indicadores(){

		for(i=0;i<cant_elem;i++){			
		document.getElementsByClassName("indicador_pos_car3")[i].style="background-color:" + color_indicador_car3_vacio +"; height:"+100/cant_elem+"%; width:100%";	
		};
	};

	function anim_elem_car3(posicion){

		for(i=0;i<cant_elem;i++){
			document.getElementsByClassName("texto_contenido_carr3")[i].style="right:-20%;"
			document.getElementsByClassName("texto_contenido_carr3")[i].childNodes[1].style="right:-20%;"
		};

		document.getElementsByClassName("indicador_pos_car3")[posicion].style="background-color:" + color_indicador_car3[posicion] +"; height:"+100/cant_elem+"%; width:100%";
		document.getElementsByClassName("controles_car3")[0].style="background-color:" + color_indicador_car3[posicion] +";"
		document.getElementsByClassName("controles_car3")[1].style="background-color:" + color_indicador_car3[posicion] +";"
		document.getElementsByClassName("texto_contenido_carr3")[posicion].style="background-color:" + color_indicador_car3[posicion] +";"
		
		document.getElementsByClassName("grupo_elem_carr3")[0].style.transform="translateY(" + posiciones_elementos[posicion] + "%)";
		document.getElementsByClassName("texto_contenido_carr3")[posicion].style.transform="translateX(-20%)";
		document.getElementsByClassName("texto_contenido_carr3")[posicion].childNodes[1].style.transform="translateX(-23%)"


	};

	function anim_vueltas_car3(){

		vacia_indicadores();
		
		if(indice_indicador < cant_elem-1){

			pos_act = pos_act - porc_elem_car3;
			indice_indicador++
		}

		else{
			pos_act = 0;
			indice_indicador=0;
		};

		 anim_elem_car3(indice_indicador);

		var valor_controles_car3 = document.getElementsByClassName("controles_car3");
		valor_controles_car3[0].setAttribute("value",indice_indicador);
		valor_controles_car3[1].setAttribute("value",indice_indicador);

	};

	intervalo_anim_car3 = setInterval(anim_vueltas_car3, tiempo_vuelta);

	function avanza_manual(){		

		clearTimeout(ini_reinicio);
		vacia_indicadores();


		pausa(1);
		
		if (indice_indicador < cant_elem-1){
			indice_indicador = indice_indicador+1;
		}
		else{
			indice_indicador = 0;
		};

		anim_elem_car3(indice_indicador);
	};

	function retrocede_manual(){		

		clearTimeout(ini_reinicio);
		vacia_indicadores();

		pausa(1);

		if (indice_indicador > 0){
			indice_indicador = indice_indicador-1;
		}
		else{
			indice_indicador = cant_elem-1;
		};

		anim_elem_car3(indice_indicador);

	};

	function mov_manual(){

		valor_pos_manual = Number(this.getAttribute("value"));	
		indice_indicador = valor_pos_manual;		

		clearTimeout(ini_reinicio);
		vacia_indicadores();

		pausa(1);
		anim_elem_car3(indice_indicador);
	};

	
	function pausa(tipo){

		clearInterval(intervalo_anim_car3);

		//console.log("pausa");

		if(tipo==1){
			//vacia_indicadores();
			//ini_reinicio = setTimeout(reinicio,tiempo_vuelta);
			reinicio();
		};


	};

	function reinicio() {

		 intervalo_anim_car3 = setInterval(anim_vueltas_car3, tiempo_vuelta);
		
		 //console.log("reinicio");
	};

};

// FIN FUNCION CAR3


//------------------------------




//INI FUNCION CAR4

function anim_car4(fun){
	
	var cant_elem = 0
	var pos_act = 0
	var indice_indicador = 0

	var ini_reinicio;


	var pos_elem_car4 = 0
	var posiciones_elementos = []


//		---------------- CONTROLES REPRODUCTOR
	var car4 = document.getElementById("carousel4");

	var controles_reproductor_car4 = document.createElement("div");	
	controles_reproductor_car4.className="controles_reproductor_car4";
	car4.appendChild(controles_reproductor_car4, "")

	var ctrl_play_pausa = document.createElement("div");
	ctrl_play_pausa.className ="controles_car4"
	ctrl_play_pausa.id= "control_play_pausa_car4";
	ctrl_play_pausa.setAttribute("value", 1);

	var img = document.createElement("img");
	img.setAttribute("src", "img/pausa.png");
	img.id="ctrl_play_pausa";

	ctrl_play_pausa.appendChild(img, "")

	ctrl_play_pausa.addEventListener("click", play_pause_car4);


	var ctrl_repetir_aleatorio = document.createElement("div");
	ctrl_repetir_aleatorio.className ="controles_car4"
	ctrl_repetir_aleatorio.id= "control_repetir_aleatorio_car4";
	ctrl_repetir_aleatorio.setAttribute("value", 0);
	ctrl_repetir_aleatorio.addEventListener("click", aleatorio);

	var img = document.createElement("img");
	img.setAttribute("src", "img/aleatorio.png");
	img.id="ctrl_aleatorio";

	ctrl_repetir_aleatorio.appendChild(img, "")

	controles_reproductor_car4.appendChild(ctrl_play_pausa, "control_play_pausa_car4");
	controles_reproductor_car4.appendChild(ctrl_repetir_aleatorio, "control_repetir_aleatorio_car4");


//		---------------- 




	var cant_elem = document.getElementsByClassName("contenido_carr4").length;
	var porc_elem_car4 = 100/cant_elem
	var ult_elem = (100 - porc_elem_car4) *-1

	//var tiempo_vuelta = (1500 * cant_elem) + 1000
	var tiempo_vuelta = 2000 + 2500

	//var color_indicador_car4_vacio = "rgba(225, 225, 225, 0.8)"
	//var color_indicador_car4 = ["rgba(255, 110, 51, 0.8)","rgba(200, 157, 13, 0.8)", "rgba(161, 219, 52, 0.8)"]

	document.getElementsByClassName("grupo_elem_carr4")[0].style.height=100*cant_elem + "%"

	for(i=0;i<cant_elem;i++){

		var posiciones_car4 = document.getElementsByClassName("posiciones_car4")[0];

		var indicador_pos_car4 = document.createElement("div");
		indicador_pos_car4.className ="indicador_pos_car4";
		indicador_pos_car4.setAttribute("value", i);
		indicador_pos_car4.addEventListener("click", mov_manual);
		indicador_pos_car4.style="height:10%; width:" + 100/cant_elem + "%";	

		var valor_controles_car4 = document.getElementById("control_ant_car4");
		valor_controles_car4.addEventListener("click", retrocede_manual)
		
		var valor_controles_car4 = document.getElementById("control_sig_car4");
		valor_controles_car4.addEventListener("click", avanza_manual);

		var texto_elem_car4 = document.getElementsByClassName("texto_contenido_carr4")[i].childNodes[1];
		//texto_elem_car4.addEventListener("mouseover",stop_car4);
		//texto_elem_car4.addEventListener("mouseout",start_car4);


		valor_controles_car4 = null;

		posiciones_car4.appendChild(indicador_pos_car4,"");
		//posiciones_car3.style.width=cant_elem*3 + "%";


		posiciones_elementos.push(pos_elem_car4);
		pos_elem_car4 = (pos_elem_car4 - porc_elem_car4);
	};	
	
	anim_elem_car4(indice_indicador);

	function play_pause_car4(){

		if (Number(this.getAttribute("value")) == 0){

			document.getElementById("ctrl_play_pausa").setAttribute("src", "img/pausa.png");
			this.setAttribute("value", "1");

			start_car4()
			//console.log("play");
		}else{		

			document.getElementById("ctrl_play_pausa").setAttribute("src", "img/play.png");
			this.setAttribute("value", "0");
			stop_car4();
			//console.log("pausa");
		};


	}

	function stop_car4 (){
		pausa(0);
		//console.log("stop")
	}
	function start_car4 (){
		pausa(1);
		//console.log("start")
	}

	function vacia_indicadores(){

		for(i=0;i<cant_elem;i++){			
		document.getElementsByClassName("indicador_pos_car4")[i].style="height:10%; width:" + 100/cant_elem + "%";	
		};
	};

	function anim_elem_car4(posicion){

		for(i=0;i<cant_elem;i++){
			document.getElementsByClassName("texto_contenido_carr4")[i].style="left:12%; top:10%"
			document.getElementsByClassName("texto_contenido_carr4")[i].childNodes[1].style="left:0%;"
			
			var img_contenido_carr4 = document.getElementsByClassName("contenido_carr4")[i].getAttribute("style");
			document.getElementsByClassName("contenido_carr4")[i].style= img_contenido_carr4.replace("opacity: 1; opacity: 0") +"; opacity:0"
		};

		document.getElementsByClassName("indicador_pos_car4")[posicion].style="height:90%; width:" + 100/cant_elem + "%";
		//document.getElementsByClassName("controles_car4")[0].style="background-color:" + color_indicador_car4[posicion] +";"
		//document.getElementsByClassName("controles_car4")[1].style="background-color:" + color_indicador_car4[posicion] +";"
		//document.getElementsByClassName("texto_contenido_carr4")[posicion].style="background-color:" + color_indicador_car4[posicion] +";"
		
		document.getElementsByClassName("grupo_elem_carr4")[0].style.transform="translateY(" + posiciones_elementos[posicion] + "%)";
		//document.getElementsByClassName("grupo_elem_carr4")[0].style.animation="alternate;";

		//document.getElementsByClassName("texto_contenido_carr4")[posicion].style.transform="translateX(0%)";
		//document.getElementsByClassName("texto_contenido_carr4")[posicion].childNodes[1].style.transform="translateX(0%)"
		var img_contenido_carr4 = document.getElementsByClassName("contenido_carr4")[posicion].getAttribute("style");
		document.getElementsByClassName("contenido_carr4")[posicion].style=	"opacity:1; width:100% ;	height: 100%;	position: relative; 	background-size: cover; 	overflow: hidden; " + img_contenido_carr4.replace("opacity: 0", "opacity: 1") +";"


	};

	function aleatorio(){

		var valor_aleatorio = this.getAttribute("value");
		var img_aleatorio = document.getElementById("ctrl_aleatorio");

		if(valor_aleatorio == 0){

			this.setAttribute("value", "1");
			img_aleatorio.setAttribute("src", "img/repetir.png")

			//indice_indicador = Math.floor(Math.random() * cant_elem);
		
		} else{

			this.setAttribute("value", "0");
			img_aleatorio.setAttribute("src", "img/aleatorio.png")

			};
	
		//console.log (indice_indicador);
		pausa(1);
	};

	function anim_vueltas_car4(){

		vacia_indicadores();

		var valor_aleatorio = document.getElementById("control_repetir_aleatorio_car4").getAttribute("value")

		if (valor_aleatorio == 0){
		
			if(indice_indicador < cant_elem-1){

				pos_act = pos_act - porc_elem_car4;
				indice_indicador++
			}

			else{
				pos_act = 0;
				indice_indicador=0;
			};

		}else{
			
			indice_indicador_random = Math.floor(Math.random() * cant_elem);
			
			if(indice_indicador != indice_indicador_random){
			
				indice_indicador = indice_indicador_random;
		
			}else{

				 if(indice_indicador < cant_elem-1){

				pos_act = pos_act - porc_elem_car4;
				indice_indicador++
				}

				else{
					pos_act = 0;
					indice_indicador=0;
				};
			};
		};

	 	anim_elem_car4(indice_indicador);

		var valor_controles_car4 = document.getElementsByClassName("controles_car4");
		valor_controles_car4[0].setAttribute("value",indice_indicador);
		valor_controles_car4[1].setAttribute("value",indice_indicador);
		//console.log(indice_indicador);
	};


	intervalo_anim_car4 = setInterval(anim_vueltas_car4, tiempo_vuelta);

	function avanza_manual(){		

		clearTimeout(ini_reinicio);
		vacia_indicadores();


		pausa(1);

		var valor_aleatorio = document.getElementById("control_repetir_aleatorio_car4").getAttribute("value")

		if (valor_aleatorio == 0){
		
			if (indice_indicador < cant_elem-1){
				indice_indicador = indice_indicador+1;
			}
			else{
				indice_indicador = 0;
			};
		}else{
			
			indice_indicador_random = Math.floor(Math.random() * cant_elem);
			
			if(indice_indicador != indice_indicador_random){
			
				indice_indicador = indice_indicador_random;
		
			}else{

				 if(indice_indicador < cant_elem-1){

				pos_act = pos_act - porc_elem_car4;
				indice_indicador++
				}

				else{
					pos_act = 0;
					indice_indicador=0;
				};
			};
		};

		anim_elem_car4(indice_indicador);
	};

	function retrocede_manual(){		

		clearTimeout(ini_reinicio);
		vacia_indicadores();

		pausa(1);

		var valor_aleatorio = document.getElementById("control_repetir_aleatorio_car4").getAttribute("value")

		if (valor_aleatorio == 0){

			if (indice_indicador > 0){
				indice_indicador = indice_indicador-1;
			} else{
				indice_indicador = cant_elem-1;
			};
		}else{
			
			indice_indicador_random = Math.floor(Math.random() * cant_elem);
			
			if(indice_indicador != indice_indicador_random){
			
				indice_indicador = indice_indicador_random;
		
			}else{

				 if(indice_indicador > 0){

				pos_act = pos_act - porc_elem_car4;
				indice_indicador--
				}

				else{
					pos_act = 0;
					indice_indicador=0;
				};
			};
		};

		




		anim_elem_car4(indice_indicador);

	};

	function mov_manual(){

		valor_pos_manual = Number(this.getAttribute("value"));	
		indice_indicador = valor_pos_manual;		

		clearTimeout(ini_reinicio);
		vacia_indicadores();

		pausa(1);
		anim_elem_car4(indice_indicador);
	};

	
	function pausa(tipo){

		clearInterval(intervalo_anim_car4);

		//console.log("pausa");

		if(tipo==1){

			var boton_play_pausa = document.getElementById("control_play_pausa_car4");
			var img_boton_play_pausa = document.getElementById("ctrl_play_pausa");

			img_boton_play_pausa.setAttribute("src", "img/pausa.png");
			boton_play_pausa.setAttribute("value", 1);
			
			//vacia_indicadores();
			//ini_reinicio = setTimeout(reinicio,tiempo_vuelta);
			reinicio();	
		};


	};

	function reinicio() {

		 intervalo_anim_car4 = setInterval(anim_vueltas_car4, tiempo_vuelta);
		
		 //console.log("reinicio");
	};

};




=======

// INI FUNCION CAR1

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

// FIN FUNCION CAR1


//------------------------------




//INI FUNCION CAR2

function anim_car2(fun){
	
	var cant_elem = 0
	var pos_act = 0
	var indice_indicador = 0

	var ini_reinicio;


	var pos_elem_car2 = 0
	var posiciones_elementos = []

	var cant_elem = document.getElementsByClassName("contenido_carr2").length;
	var porc_elem_car2 = 100/cant_elem
	var ult_elem = (100 - porc_elem_car2) *-1

	//var tiempo_vuelta = (1500 * cant_elem) + 1000
	var tiempo_vuelta = 2000 + 2500

	document.getElementsByClassName("grupo_elem_carr2")[0].style.width=100*cant_elem + "%"

	for(i=0;i<cant_elem;i++){

		var posiciones_car2 = document.getElementsByClassName("posiciones_car2")[0];

		var indicador_pos_car2 = document.createElement("div");
		indicador_pos_car2.className ="indicador_pos_car2";
		indicador_pos_car2.setAttribute("value", i);
		indicador_pos_car2.addEventListener("click", mov_manual);

		var valor_controles_car2 = document.getElementById("control_ant_car2");
		valor_controles_car2.addEventListener("click", retrocede_manual)
		
		var valor_controles_car2 = document.getElementById("control_sig_car2");
		valor_controles_car2.addEventListener("click", avanza_manual)


		valor_controles_car2 = null;



		posiciones_car2.appendChild(indicador_pos_car2,"");
		posiciones_car2.style.width=cant_elem*3 + "%";


		posiciones_elementos.push(pos_elem_car2);
		pos_elem_car2 = (pos_elem_car2 - porc_elem_car2);

	};	
	
	document.getElementsByClassName("indicador_pos_car2")[indice_indicador].style="background-color:black";	


	function vacia_indicadores(){

		for(i=0;i<cant_elem;i++){

			document.getElementsByClassName("indicador_pos_car2")[i].style="background-color:none";	
		};
	};

	function anim_vueltas_car2(){

		vacia_indicadores();
		
		if(indice_indicador < cant_elem-1){

			pos_act = pos_act - porc_elem_car2;
			indice_indicador++
		}

		else{
			pos_act = 0;
			indice_indicador=0;
		};

		//console.log(indice_indicador);

		document.getElementsByClassName("grupo_elem_carr2")[0].style.transform="translateX(" + posiciones_elementos[indice_indicador] + "%)";		
		document.getElementsByClassName("indicador_pos_car2")[indice_indicador].style="background-color:black";			

		var valor_controles_car2 = document.getElementsByClassName("controles_car2");
		valor_controles_car2[0].setAttribute("value",indice_indicador);
		valor_controles_car2[1].setAttribute("value",indice_indicador);

	};

	intervalo_anim_car2 = setInterval(anim_vueltas_car2, tiempo_vuelta);

	function avanza_manual(){		

		clearTimeout(ini_reinicio);
		vacia_indicadores();


		pausa();

		//prox_pos= 0;

		if (indice_indicador < cant_elem-1){
			prox_pos = indice_indicador+1;
		}
		else{
			prox_pos = 0;
		};

		indice_indicador = prox_pos;

		document.getElementsByClassName("grupo_elem_carr2")[0].style.transform="translateX(" + posiciones_elementos[prox_pos] + "%)";	
		document.getElementsByClassName("indicador_pos_car2")[prox_pos].style="background-color:black";
		//console.log("avanza");

	};

	function retrocede_manual(){		

		clearTimeout(ini_reinicio);
		vacia_indicadores();

		pausa();

		//prox_pos= 0;

		if (indice_indicador > 0){
			prox_pos = indice_indicador-1;
		}
		else{
			prox_pos = cant_elem-1;
		};

		indice_indicador = prox_pos;

		document.getElementsByClassName("grupo_elem_carr2")[0].style.transform="translateX(" + posiciones_elementos[prox_pos] + "%)";	
		document.getElementsByClassName("indicador_pos_car2")[prox_pos].style="background-color:black";

		//console.log("retrocede");

	};

	function mov_manual(){

		valor_pos_manual = Number(this.getAttribute("value"));	
		indice_indicador = valor_pos_manual;		

		clearTimeout(ini_reinicio);

		pausa();

		document.getElementsByClassName("grupo_elem_carr2")[0].style.transform="translateX(" + posiciones_elementos[valor_pos_manual] + "%)";
		document.getElementsByClassName("indicador_pos_car2")[valor_pos_manual].style="background-color:black";



	};

	
	function pausa(){

		clearInterval(intervalo_anim_car2);


		vacia_indicadores();

		//console.log("pausa");


		ini_reinicio = setTimeout(reinicio,3000);

	};

	function reinicio() {

		 intervalo_anim_car2 = setInterval(anim_vueltas_car2, tiempo_vuelta);
		
		 //console.log("reinicio");
	};

};

// FIN FUNCION CAR2


//------------------------------




//INI FUNCION CAR3

function anim_car3(fun){
	
	var cant_elem = 0
	var pos_act = 0
	var indice_indicador = 0

	var ini_reinicio;


	var pos_elem_car3 = 0
	var posiciones_elementos = []

	var cant_elem = document.getElementsByClassName("contenido_carr3").length;
	var porc_elem_car3 = 100/cant_elem
	var ult_elem = (100 - porc_elem_car3) *-1

	//var tiempo_vuelta = (1500 * cant_elem) + 1000
	var tiempo_vuelta = 2000 + 2500

	var color_indicador_car3_vacio = "rgba(225, 225, 225, 0.8)"
	var color_indicador_car3 = ["rgba(255, 110, 51, 0.8)","rgba(200, 157, 13, 0.8)", "rgba(161, 219, 52, 0.8)"]

	document.getElementsByClassName("grupo_elem_carr3")[0].style.height=100*cant_elem + "%"

	for(i=0;i<cant_elem;i++){

		var posiciones_car3 = document.getElementsByClassName("posiciones_car3")[0];

		var indicador_pos_car3 = document.createElement("div");
		indicador_pos_car3.className ="indicador_pos_car3";
		indicador_pos_car3.setAttribute("value", i);
		indicador_pos_car3.addEventListener("click", mov_manual);
		indicador_pos_car3.style="background-color:" + color_indicador_car3_vacio +"; height:"+100/cant_elem+"%; width:100%";	

		var valor_controles_car3 = document.getElementById("control_ant_car3");
		valor_controles_car3.addEventListener("click", retrocede_manual)
		
		var valor_controles_car3 = document.getElementById("control_sig_car3");
		valor_controles_car3.addEventListener("click", avanza_manual);

		var texto_elem_car3 = document.getElementsByClassName("texto_contenido_carr3")[i].childNodes[1];
		texto_elem_car3.addEventListener("mouseover",stop_car3);
		texto_elem_car3.addEventListener("mouseout",start_car3);

		var caja_texto_elem_car3 = document.getElementsByClassName("texto_contenido_carr3")[i];


		valor_controles_car3 = null;

		posiciones_car3.appendChild(indicador_pos_car3,"");
		//posiciones_car3.style.width=cant_elem*3 + "%";


		posiciones_elementos.push(pos_elem_car3);
		pos_elem_car3 = (pos_elem_car3 - porc_elem_car3);
	};	
	
	anim_elem_car3(indice_indicador);

	function stop_car3 (){
		pausa(0);
		//console.log("stop")
	}
	function start_car3 (){
		pausa(1);
		//console.log("start")
	}

	function vacia_indicadores(){

		for(i=0;i<cant_elem;i++){			
		document.getElementsByClassName("indicador_pos_car3")[i].style="background-color:" + color_indicador_car3_vacio +"; height:"+100/cant_elem+"%; width:100%";	
		};
	};

	function anim_elem_car3(posicion){

		for(i=0;i<cant_elem;i++){
			document.getElementsByClassName("texto_contenido_carr3")[i].style="right:-20%;"
			document.getElementsByClassName("texto_contenido_carr3")[i].childNodes[1].style="right:-20%;"
		};

		document.getElementsByClassName("indicador_pos_car3")[posicion].style="background-color:" + color_indicador_car3[posicion] +"; height:"+100/cant_elem+"%; width:100%";
		document.getElementsByClassName("controles_car3")[0].style="background-color:" + color_indicador_car3[posicion] +";"
		document.getElementsByClassName("controles_car3")[1].style="background-color:" + color_indicador_car3[posicion] +";"
		document.getElementsByClassName("texto_contenido_carr3")[posicion].style="background-color:" + color_indicador_car3[posicion] +";"
		
		document.getElementsByClassName("grupo_elem_carr3")[0].style.transform="translateY(" + posiciones_elementos[posicion] + "%)";
		document.getElementsByClassName("texto_contenido_carr3")[posicion].style.transform="translateX(-20%)";
		document.getElementsByClassName("texto_contenido_carr3")[posicion].childNodes[1].style.transform="translateX(-23%)"


	};

	function anim_vueltas_car3(){

		vacia_indicadores();
		
		if(indice_indicador < cant_elem-1){

			pos_act = pos_act - porc_elem_car3;
			indice_indicador++
		}

		else{
			pos_act = 0;
			indice_indicador=0;
		};

		 anim_elem_car3(indice_indicador);

		var valor_controles_car3 = document.getElementsByClassName("controles_car3");
		valor_controles_car3[0].setAttribute("value",indice_indicador);
		valor_controles_car3[1].setAttribute("value",indice_indicador);

	};

	intervalo_anim_car3 = setInterval(anim_vueltas_car3, tiempo_vuelta);

	function avanza_manual(){		

		clearTimeout(ini_reinicio);
		vacia_indicadores();


		pausa(1);
		
		if (indice_indicador < cant_elem-1){
			indice_indicador = indice_indicador+1;
		}
		else{
			indice_indicador = 0;
		};

		anim_elem_car3(indice_indicador);
	};

	function retrocede_manual(){		

		clearTimeout(ini_reinicio);
		vacia_indicadores();

		pausa(1);

		if (indice_indicador > 0){
			indice_indicador = indice_indicador-1;
		}
		else{
			indice_indicador = cant_elem-1;
		};

		anim_elem_car3(indice_indicador);

	};

	function mov_manual(){

		valor_pos_manual = Number(this.getAttribute("value"));	
		indice_indicador = valor_pos_manual;		

		clearTimeout(ini_reinicio);
		vacia_indicadores();

		pausa(1);
		anim_elem_car3(indice_indicador);
	};

	
	function pausa(tipo){

		clearInterval(intervalo_anim_car3);

		//console.log("pausa");

		if(tipo==1){
			//vacia_indicadores();
			//ini_reinicio = setTimeout(reinicio,tiempo_vuelta);
			reinicio();
		};


	};

	function reinicio() {

		 intervalo_anim_car3 = setInterval(anim_vueltas_car3, tiempo_vuelta);
		
		 //console.log("reinicio");
	};

};

// FIN FUNCION CAR3


//------------------------------




//INI FUNCION CAR4

function anim_car4(fun){
	
	var cant_elem = 0
	var pos_act = 0
	var indice_indicador = 0

	var ini_reinicio;


	var pos_elem_car4 = 0
	var posiciones_elementos = []


//		---------------- CONTROLES REPRODUCTOR
	var car4 = document.getElementById("carousel4");

	var controles_reproductor_car4 = document.createElement("div");	
	controles_reproductor_car4.className="controles_reproductor_car4";
	car4.appendChild(controles_reproductor_car4, "")

	var ctrl_play_pausa = document.createElement("div");
	ctrl_play_pausa.className ="controles_car4"
	ctrl_play_pausa.id= "control_play_pausa_car4";
	ctrl_play_pausa.setAttribute("value", 1);

	var img = document.createElement("img");
	img.setAttribute("src", "img/pausa.png");
	img.id="ctrl_play_pausa";

	ctrl_play_pausa.appendChild(img, "")

	ctrl_play_pausa.addEventListener("click", play_pause_car4);


	var ctrl_repetir_aleatorio = document.createElement("div");
	ctrl_repetir_aleatorio.className ="controles_car4"
	ctrl_repetir_aleatorio.id= "control_repetir_aleatorio_car4";
	ctrl_repetir_aleatorio.setAttribute("value", 0);
	ctrl_repetir_aleatorio.addEventListener("click", aleatorio);

	var img = document.createElement("img");
	img.setAttribute("src", "img/aleatorio.png");
	img.id="ctrl_aleatorio";

	ctrl_repetir_aleatorio.appendChild(img, "")

	controles_reproductor_car4.appendChild(ctrl_play_pausa, "control_play_pausa_car4");
	controles_reproductor_car4.appendChild(ctrl_repetir_aleatorio, "control_repetir_aleatorio_car4");


//		---------------- 




	var cant_elem = document.getElementsByClassName("contenido_carr4").length;
	var porc_elem_car4 = 100/cant_elem
	var ult_elem = (100 - porc_elem_car4) *-1

	//var tiempo_vuelta = (1500 * cant_elem) + 1000
	var tiempo_vuelta = 2000 + 2500

	//var color_indicador_car4_vacio = "rgba(225, 225, 225, 0.8)"
	//var color_indicador_car4 = ["rgba(255, 110, 51, 0.8)","rgba(200, 157, 13, 0.8)", "rgba(161, 219, 52, 0.8)"]

	document.getElementsByClassName("grupo_elem_carr4")[0].style.height=100*cant_elem + "%"

	for(i=0;i<cant_elem;i++){

		var posiciones_car4 = document.getElementsByClassName("posiciones_car4")[0];

		var indicador_pos_car4 = document.createElement("div");
		indicador_pos_car4.className ="indicador_pos_car4";
		indicador_pos_car4.setAttribute("value", i);
		indicador_pos_car4.addEventListener("click", mov_manual);
		indicador_pos_car4.style="height:10%; width:" + 100/cant_elem + "%";	

		var valor_controles_car4 = document.getElementById("control_ant_car4");
		valor_controles_car4.addEventListener("click", retrocede_manual)
		
		var valor_controles_car4 = document.getElementById("control_sig_car4");
		valor_controles_car4.addEventListener("click", avanza_manual);

		var texto_elem_car4 = document.getElementsByClassName("texto_contenido_carr4")[i].childNodes[1];
		//texto_elem_car4.addEventListener("mouseover",stop_car4);
		//texto_elem_car4.addEventListener("mouseout",start_car4);


		valor_controles_car4 = null;

		posiciones_car4.appendChild(indicador_pos_car4,"");
		//posiciones_car3.style.width=cant_elem*3 + "%";


		posiciones_elementos.push(pos_elem_car4);
		pos_elem_car4 = (pos_elem_car4 - porc_elem_car4);
	};	
	
	anim_elem_car4(indice_indicador);

	function play_pause_car4(){

		if (Number(this.getAttribute("value")) == 0){

			document.getElementById("ctrl_play_pausa").setAttribute("src", "img/pausa.png");
			this.setAttribute("value", "1");

			start_car4()
			//console.log("play");
		}else{		

			document.getElementById("ctrl_play_pausa").setAttribute("src", "img/play.png");
			this.setAttribute("value", "0");
			stop_car4();
			//console.log("pausa");
		};


	}

	function stop_car4 (){
		pausa(0);
		//console.log("stop")
	}
	function start_car4 (){
		pausa(1);
		//console.log("start")
	}

	function vacia_indicadores(){

		for(i=0;i<cant_elem;i++){			
		document.getElementsByClassName("indicador_pos_car4")[i].style="height:10%; width:" + 100/cant_elem + "%";	
		};
	};

	function anim_elem_car4(posicion){

		for(i=0;i<cant_elem;i++){
			document.getElementsByClassName("texto_contenido_carr4")[i].style="left:12%; top:10%"
			document.getElementsByClassName("texto_contenido_carr4")[i].childNodes[1].style="left:0%;"
			
			var img_contenido_carr4 = document.getElementsByClassName("contenido_carr4")[i].getAttribute("style");
			document.getElementsByClassName("contenido_carr4")[i].style= img_contenido_carr4.replace("opacity: 1; opacity: 0") +"; opacity:0"
		};

		document.getElementsByClassName("indicador_pos_car4")[posicion].style="height:90%; width:" + 100/cant_elem + "%";
		//document.getElementsByClassName("controles_car4")[0].style="background-color:" + color_indicador_car4[posicion] +";"
		//document.getElementsByClassName("controles_car4")[1].style="background-color:" + color_indicador_car4[posicion] +";"
		//document.getElementsByClassName("texto_contenido_carr4")[posicion].style="background-color:" + color_indicador_car4[posicion] +";"
		
		document.getElementsByClassName("grupo_elem_carr4")[0].style.transform="translateY(" + posiciones_elementos[posicion] + "%)";
		//document.getElementsByClassName("grupo_elem_carr4")[0].style.animation="alternate;";

		//document.getElementsByClassName("texto_contenido_carr4")[posicion].style.transform="translateX(0%)";
		//document.getElementsByClassName("texto_contenido_carr4")[posicion].childNodes[1].style.transform="translateX(0%)"
		var img_contenido_carr4 = document.getElementsByClassName("contenido_carr4")[posicion].getAttribute("style");
		document.getElementsByClassName("contenido_carr4")[posicion].style=	"opacity:1; width:100% ;	height: 100%;	position: relative; 	background-size: cover; 	overflow: hidden; " + img_contenido_carr4.replace("opacity: 0", "opacity: 1") +";"


	};

	function aleatorio(){

		var valor_aleatorio = this.getAttribute("value");
		var img_aleatorio = document.getElementById("ctrl_aleatorio");

		if(valor_aleatorio == 0){

			this.setAttribute("value", "1");
			img_aleatorio.setAttribute("src", "img/repetir.png")

			//indice_indicador = Math.floor(Math.random() * cant_elem);
		
		} else{

			this.setAttribute("value", "0");
			img_aleatorio.setAttribute("src", "img/aleatorio.png")

			};
	
		//console.log (indice_indicador);
		pausa(1);
	};

	function anim_vueltas_car4(){

		vacia_indicadores();

		var valor_aleatorio = document.getElementById("control_repetir_aleatorio_car4").getAttribute("value")

		if (valor_aleatorio == 0){
		
			if(indice_indicador < cant_elem-1){

				pos_act = pos_act - porc_elem_car4;
				indice_indicador++
			}

			else{
				pos_act = 0;
				indice_indicador=0;
			};

		}else{
			
			indice_indicador_random = Math.floor(Math.random() * cant_elem);
			
			if(indice_indicador != indice_indicador_random){
			
				indice_indicador = indice_indicador_random;
		
			}else{

				 if(indice_indicador < cant_elem-1){

				pos_act = pos_act - porc_elem_car4;
				indice_indicador++
				}

				else{
					pos_act = 0;
					indice_indicador=0;
				};
			};
		};

	 	anim_elem_car4(indice_indicador);

		var valor_controles_car4 = document.getElementsByClassName("controles_car4");
		valor_controles_car4[0].setAttribute("value",indice_indicador);
		valor_controles_car4[1].setAttribute("value",indice_indicador);
		//console.log(indice_indicador);
	};


	intervalo_anim_car4 = setInterval(anim_vueltas_car4, tiempo_vuelta);

	function avanza_manual(){		

		clearTimeout(ini_reinicio);
		vacia_indicadores();


		pausa(1);

		var valor_aleatorio = document.getElementById("control_repetir_aleatorio_car4").getAttribute("value")

		if (valor_aleatorio == 0){
		
			if (indice_indicador < cant_elem-1){
				indice_indicador = indice_indicador+1;
			}
			else{
				indice_indicador = 0;
			};
		}else{
			
			indice_indicador_random = Math.floor(Math.random() * cant_elem);
			
			if(indice_indicador != indice_indicador_random){
			
				indice_indicador = indice_indicador_random;
		
			}else{

				 if(indice_indicador < cant_elem-1){

				pos_act = pos_act - porc_elem_car4;
				indice_indicador++
				}

				else{
					pos_act = 0;
					indice_indicador=0;
				};
			};
		};

		anim_elem_car4(indice_indicador);
	};

	function retrocede_manual(){		

		clearTimeout(ini_reinicio);
		vacia_indicadores();

		pausa(1);

		var valor_aleatorio = document.getElementById("control_repetir_aleatorio_car4").getAttribute("value")

		if (valor_aleatorio == 0){

			if (indice_indicador > 0){
				indice_indicador = indice_indicador-1;
			} else{
				indice_indicador = cant_elem-1;
			};
		}else{
			
			indice_indicador_random = Math.floor(Math.random() * cant_elem);
			
			if(indice_indicador != indice_indicador_random){
			
				indice_indicador = indice_indicador_random;
		
			}else{

				 if(indice_indicador > 0){

				pos_act = pos_act - porc_elem_car4;
				indice_indicador--
				}

				else{
					pos_act = 0;
					indice_indicador=0;
				};
			};
		};

		




		anim_elem_car4(indice_indicador);

	};

	function mov_manual(){

		valor_pos_manual = Number(this.getAttribute("value"));	
		indice_indicador = valor_pos_manual;		

		clearTimeout(ini_reinicio);
		vacia_indicadores();

		pausa(1);
		anim_elem_car4(indice_indicador);
	};

	
	function pausa(tipo){

		clearInterval(intervalo_anim_car4);

		//console.log("pausa");

		if(tipo==1){

			var boton_play_pausa = document.getElementById("control_play_pausa_car4");
			var img_boton_play_pausa = document.getElementById("ctrl_play_pausa");

			img_boton_play_pausa.setAttribute("src", "img/pausa.png");
			boton_play_pausa.setAttribute("value", 1);
			
			//vacia_indicadores();
			//ini_reinicio = setTimeout(reinicio,tiempo_vuelta);
			reinicio();	
		};


	};

	function reinicio() {

		 intervalo_anim_car4 = setInterval(anim_vueltas_car4, tiempo_vuelta);
		
		 //console.log("reinicio");
	};

};




>>>>>>> a92d9f521d2afc83be77ad0970a147e4fc909dec
