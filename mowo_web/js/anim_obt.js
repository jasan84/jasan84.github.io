function Anim_paleta() {
	
	let paleta = document.getElementsByClassName("paleta_obt")
	/*let logo_obt_gris = document.getElementById("obt_gris")
	let logo_obt_naranja = document.getElementById("obt_naranja")*/
	let logo_obt_azul = document.getElementById("obt_azul")
	let imgs = ["img/logo_m_deg_azul.png","img/logo_m_deg_metal.png", "img/logo_m_deg_multicolor.png", "img/logo_m_deg_naranja.png", "img/logo_m_deg_rosa.png"]


	let indice = parseInt(logo_obt_azul.getAttribute('value')) +1

	if(indice>=imgs.length){
		indice = 0
	}

	logo_obt_azul.setAttribute('value', indice)


	function Estilo_paleta() {

		for(let i=0; i<paleta.length; i++){

			paleta[i].style="transform:rotate(none); transition:ease 0.5s"

			setTimeout(function(){
				paleta[i].style="rotate: -60deg; transition: 0.5s; transform-origin:center center;"
			}, 800)

			setTimeout(function(){
				logo_obt_azul.style="background-image: url(" + imgs[indice] + ")"
			}, 700)

				

		}
		
	}


	Estilo_paleta()

	/*

	setInterval(function(){

		Estilo_paleta()

		logo_obt_gris.style="background-image: url(" + imgs[indice] + ")"
		logo_obt_naranja.style="background-image: url(" + imgs[indice] + ")"
		logo_obt_azul.style="background-image: url(" + imgs[indice] + ")"


		setTimeout(function(){

			indice +=1;

			if(indice >= imgs.length){
				indice = 0;
			}

			logo_obt_gris.style="background-image: url(" + imgs[indice] + ")"
			logo_obt_naranja.style="background-image: url(" + imgs[indice] + ")"
			logo_obt_azul.style="background-image: url(" + imgs[indice] + ")"
			

		}, 1500)



	},2000)
*/

}