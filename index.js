let intervalo;
let tiempo = 0;
let vueltas = 0;
let tiempo_pomodoro = 25,tiempo_descanso_simple = 5, tiempo_descanso_largo = 15;
const mood = document.getElementById("mood");

function iniciar_timer(){
    const lugar_timer = document.getElementById("timer")
    const lugar_modo = document.getElementById("modo")
    lugar_modo.innerHTML = 'Modo concentración'
    lugar_timer.innerHTML = '';
    let minutos=0, segundos = 0;

    intervalo = setInterval(function(){
        minutos = Math.floor(tiempo/ 60); 
        segundos = tiempo % 60; 

        if(minutos <= tiempo_pomodoro){
            lugar_timer.innerHTML = `${minutos}:${segundos}`
            tiempo++;
        }
        if(minutos >= tiempo_pomodoro){
            ruido_timer_finalizado();
            vueltas++;
            tiempo = 897;
            if(vueltas < 3){
                detener_timer(intervalo)
                descanso_simple();
            }else{
                detener_timer(intervalo);
                descanso_largo()
            }
        }
    },1000)
}


function descanso_simple(){
    mood.classList.remove("mood-pomo");
    mood.classList.add("mood-descanso-simple");
    const lugar_timer = document.getElementById("timer")
    lugar_timer.innerHTML = '';
    const lugar_modo = document.getElementById("modo")
    lugar_modo.innerHTML = 'Modo chill 5 min'

    intervalo = setInterval(function(){
        minutos = Math.floor(tiempo/60);
        segundos = tiempo % 60;

        if(minutos <= tiempo_descanso_simple){
            lugar_timer.innerHTML = `${minutos}:${segundos}`;
            tiempo++;

        }
        if(minutos >= tiempo_descanso_simple){
            ruido_timer_finalizado();
            detener_timer(intervalo);
            iniciar_timer();
        }

    },1000)
}

function descanso_largo(){
    mood.classList.remove("mood-pomo");
    mood.classList.add("mood-descanso-largo");
    const lugar_timer = document.getElementById("timer")
    lugar_timer.innerHTML = '';
    const lugar_modo = document.getElementById("modo")
    lugar_modo.innerHTML = 'Modo chill 15 min'

    intervalo = setInterval(function(){
        minutos = Math.floor(tiempo/60);
        segundos = tiempo % 60;

        if(minutos <= tiempo_descanso_largo){
            lugar_timer.innerHTML = `${minutos}:${segundos}`;
            tiempo++;

        }
        if(minutos >= tiempo_descanso_largo){
            ruido_timer_finalizado();
            detener_timer(intervalo);
            iniciar_timer();
        }

    },1000)
}

function detener_timer(){
    clearInterval(intervalo);
    tiempo = 0;
}

function ruido_timer_finalizado(){
    const audio = new Audio("microwave-timer-117077.mp3");
    audio.play();
}