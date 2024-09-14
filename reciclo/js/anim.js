function hora_actual(){
    
    let fecha = new Date()
    let hs = fecha.getHours()
    let min= fecha.getMinutes()
    if(min<10){min = '0'+min}

    let fecha_actual =  hs + ':' + min

    document.getElementById('hora-celular').innerHTML=fecha_actual

}


function anim_logo_bienvenida(){
    
    let cubre_logo_fondo = document.getElementById('cubre-logo-fondo')
    let cubre_logo_img= document.getElementById('cubre-logo-img')
    let ancho_cubre_logo = parseInt(getComputedStyle(cubre_logo_fondo).width.replace('px', ''));


/* 
    cubre_logo_img.style.transition="ease-in-out 7s"
    cubre_logo_img.style.transform="rotate(2160deg)"
 */

    cubre_logo_img.setAttribute('style', 'transition:ease-in-out 7s; transform:rotate(2520deg)')
    let opacity= 1

    setTimeout(function(){

        console.log(opacity+=1)

        cubre_logo_fondo.setAttribute("style", "transition:4s; transform:translateX(76%);")

        
    },1500)
/* 
    setTimeout(function(){
    
        cubre_logo_fondo.setAttribute("style", "transition:0.1s; opacitY:0;")
    },9000)
 */
}