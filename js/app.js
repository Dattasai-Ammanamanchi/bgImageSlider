(function(){const pictures=[  "contBcg-0",
"contBcg-1",
"contBcg-2",
"contBcg-3",
"contBcg-4"];

const buttons=document.querySelectorAll('.btn');
const imagediv=document.querySelector('.img-container');
let counter=0;


buttons.forEach(function(button) {
    button.addEventListener('click', function(e){
        if(button.classList.contains('btn-left')){
            counter--
            if(counter<0)
            {
            counter=pictures.length-1;
            }
            imagediv.style.backgroundImage= `url('./img/${pictures[counter]}.jpeg')`
        }
        if (button.classList.contains('btn-right')){
           counter++
           if(counter>pictures.length-1)
           {
               counter=0
           }
           imagediv.style.backgroundImage=`url('./img/${pictures[counter]}.jpeg')`


        }
        })
    })
})();
