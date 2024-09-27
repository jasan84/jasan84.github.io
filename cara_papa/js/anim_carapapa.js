

function anim_cara(event){


    //let ceja_iz = document.getElementById('img-ceja-iz');
    let partes_cara = document.getElementsByClassName('partes-cara');
    

    for(let i=0;i<partes_cara.length; i++){


        let matrix_transform = JSON.parse(window.getComputedStyle(partes_cara[i]).getPropertyValue('transform').replace('matrix', '').replace('(', '[').replace(')', ']'))
        let pos_x = matrix_transform[4]
        let pos_y = matrix_transform[5]

        
        //console.log(JSON.parse(matrix_transform.replace('matrix', '').replace('(', '[').replace(')', ']')))
        //console.log(pos_x, pos_y)
        
        let mov_scroll = event.deltaY

        let random_x = Math.random()*100        
        let random_y = Math.random()*100

        if(mov_scroll == 100){

            if(pos_x < 50){pos_x = 0}
            if(pos_y < 50){pos_y = 0}


            partes_cara[i].setAttribute('style', 'transform:translate('+pos_x/2+'px,'+pos_y/2+'px)')
        }else{
            partes_cara[i].setAttribute('style', 'transform:translate('+random_x+'px,'+random_y+'px)')
        }

    }
    
    

}