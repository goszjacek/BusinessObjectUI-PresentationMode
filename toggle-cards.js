
// skrypt w JS, który, jeżeli dodasz go do wizytówki w html, symuluje zwijanie componentów `card`

document.addEventListener('DOMContentLoaded', function() {
    var ups = document.querySelectorAll('img[src="./icons/material-icons/baseline-arrow_up-24px.svg"]');
    for(var i = 0; i<ups.length; i++){
        ups[i].addEventListener('click',function(event){
            if(event.target.src.includes("baseline-arrow_down-24px.svg")){
                event.target.parentElement.parentElement.parentElement.children[1].style.display = 'block';                        
                event.target.src="./icons/material-icons/baseline-arrow_up-24px.svg";
            } else if(event.target.src.includes("baseline-arrow_up-24px.svg")){                    
                event.target.parentElement.parentElement.parentElement.children[1].style.display = 'none';
                event.target.src="./icons/material-icons/baseline-arrow_down-24px.svg";
            }
            
        });
    }
}, false);
