const lugaresQueVisitarei = ["Paris", "Nova York", "Tóquio", "Roma", "Londres"];
const amigoVisitou = ["Tóquio", "Roma", "Berlim", "Lisboa", "Londres"];

const lugaresEmComum = [];

for (let i = 0; i < lugaresQueVisitarei.length; i++) {
    for (let j = 0; j < amigoVisitou.length; j++) {
        if (lugaresQueVisitarei[i] === amigoVisitou[j]) {
            lugaresEmComum.push(lugaresQueVisitarei[i]);
        }
    }
}

console.log("Lugares em comum:", lugaresEmComum);

const amigosDoFace = ["Maria", "Pedro", "João", "Ana", "Rafael"];
const amigosDoFaceDoKaian = ["Rafael", "Maria", "Carlos", "Lúcia", "João"];

const amigosEmComum = [];

for (let i = 0; i < amigosDoFace.length; i++) {
    for (let j = 0; j < amigosDoFaceDoKaian.length; j++) {
        if (amigosDoFace[i] === amigosDoFaceDoKaian[j]) {
            amigosEmComum.push(amigosDoFace[i]);
        }
    }
}

console.log("Amigos em comum:", amigosEmComum);

const numeroSecreto = 42;
let tentativas = 0;

for (let i = 1; i <= 10; i++) {
    const palpiteAtual = Number(prompt("Tente adivinhar o número secreto:"));

    if (palpiteAtual === numeroSecreto) {
        console.log("Parabéns, você acertou!");
        break;
    } else {
        tentativas++;
        if (tentativas >= 5) {
            console.log("Fim do jogo! Tentativas esgotadas.");
            break;
        } else {
            console.log(`Tentativa ${i}: Palpite errado.`);
        }
    }
}
