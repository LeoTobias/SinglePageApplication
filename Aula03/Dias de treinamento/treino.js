const nome = "leonardo";

function getEventoAleatorio() {
    const numeroAleatorio = Math.floor(Math.random() * 3);

    let evento;
    if (numeroAleatorio === 0) {
        evento = "Maratona";
    } else if (numeroAleatorio === 1) {
        evento = "Triathlon";
    } else {
        evento = "Pentathlon";
    }

    return evento;
}


function getDiasTreino(evento) {
    if (evento === "Maratona") {
        return 50;
    } else if (evento === "Triathlon") {
        return 100;
    } else if (evento === "Pentathlon") {
        return 200;
    } else {
        return "Evento inválido";
    }
}



function logEvento(nome, evento) {
    console.log(`${nome} vai participar do evento de ${evento}.`);
}

function logTempo(nome, dias) {
    console.log(`${nome} vai treinar por ${dias} dias.`);
}

const eventoAleatorio = getEventoAleatorio();
const diasTreino = getDiasTreino(eventoAleatorio);

console.log("Evento selecionado:", eventoAleatorio);
console.log("Dias de treino:", diasTreino);

logEvento(nome, eventoAleatorio);
logTempo(nome, diasTreino);

