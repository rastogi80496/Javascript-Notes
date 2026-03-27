const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((buttons) => {
    console.log(buttons);   // <span class="button" id="grey"></span> <span class="button" id="white"></span> <span class="button" id="blue"></span> <span class="button" id ="green"></span> <span class="button" id="yellow"></span>
    buttons.addEventListener('click' , function(e){
        console.log(e); // MouseEvent {isTrusted: true, screenX: 0, screenY: 0, clientX: 0, clientY: 0, …}
        console.log(e.target); // <span class="button" id="grey"></span>

        if(e.target.id === 'grey'){
            body.style.backgroundColor = "grey";
        } else if(e.target.id === 'white'){
            body.style.backgroundColor = "white";       
        }
        else if(e.target.id === 'blue'){
            body.style.backgroundColor = "blue";
        }
        else if(e.target.id === 'green'){
            body.style.backgroundColor = "green";
        }
        else if(e.target.id === 'yellow'){
            body.style.backgroundColor = "yellow";
        }

    });

}) 
