AOS.init();

const dataDoEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(() => {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampDoEvento-timeStampAtual;

    const diasAteOEvento = Math.floor(distanciaAteEvento / (1000 * 60 * 60 * 24));
    const horasAteOEvento = Math.floor((distanciaAteEvento % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    const minutosAteOEvento = Math.floor((distanciaAteEvento%(1000 * 60 * 60))/(1000 * 60));
    const segundosAteOEvento = Math.floor((distanciaAteEvento%(1000 * 60))/1000);

    document.getElementById('contador').innerHTML=`${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if(distanciaAteEvento<0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML='O evento já começou!';
    }
}, 1000);