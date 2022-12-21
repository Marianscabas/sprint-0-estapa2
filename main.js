const $dias = document.getElementById('days'),
 $horas = document.getElementById('hours'),
 $minutos = document.getElementById('minutes'),
 $segundos = document.getElementById('seconds');



const countdownDate = new Date('12 25, 2022 10:28:00').getTime();

let interval = setInterval(function(){
   
    const now = new Date().getTime();

    
    let distance = countdownDate - now;

    
    let dias = Math.floor(distance / (1000 * 60 * 60 * 24));
    let horas = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    let minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((distance % (1000 * 60 )) / (1000));

   
    $dias.innerHTML = dias;
    $horas.innerHTML = horas;
    $minutos.innerHTML = minutos;
    $segundos.innerHTML = ('0' + segundos).slice(-2);

    
}, 1000);