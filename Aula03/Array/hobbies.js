const hobbies = ['Series','Jogar','Namorar'];
console.log(hobbies[0]);
hobbies[0] = 'Ler';
console.log(hobbies);

// Passo 5: Contando hobbies
const hobbies = ["pintura", "correr", "cozinhar", "ler", "dançar"];

console.log("Quantidade de hobbies:", hobbies.length);

// Passo 6: Adicionando um novo hobby com .push()
hobbies.push("jogar xadrez");

console.log("Lista atualizada de hobbies:", hobbies);

// Passo 7: Removendo o último hobby com .pop()
hobbies.pop();

console.log("Lista atualizada após remover o último hobby:", hobbies);

// Passo 8: Removendo um hobby específico com .splice()
const hobbyRemovido = "cozinhar";
const posicao = hobbies.indexOf(hobbyRemovido);

if (posicao !== -1) {
    hobbies.splice(posicao, 1);
    console.log(`${hobbyRemovido} removido da lista de hobbies.`);
} else {
    console.log(`${hobbyRemovido} não encontrado na lista.`);
}

console.log("Lista atualizada após remover o hobby:", hobbies);

// Passo 9: Juntando hobbies com os de um amigo
const hobbiesDoAmigo = ["cantar", "tocar violão", "fotografia"];

const todosOsHobbies = hobbies.concat(hobbiesDoAmigo);

console.log("Lista de hobbies combinada:", todosOsHobbies);

// Passo 10: Criando um array aninhado
const hobbiesMusicais = ["tocar piano", "cantar", "tocar violino"];
const hobbiesEsportivos = ["correr", "jogar futebol", "nadar"];
const hobbiesCriativos = ["pintura", "escrita", "desenho"];

const categoriasDeHobbies = [hobbiesMusicais, hobbiesEsportivos, hobbiesCriativos];

console.log("Array aninhado de categorias:", categoriasDeHobbies);

// Passo 10.1: Acessando itens dentro de caixas aninhadas
console.log("Primeiro hobby musical:", categoriasDeHobbies[0][0]);
console.log("Terceiro hobby musical:", categoriasDeHobbies[0][2]);
