//TAREFA 1
function mostrarLembrete() {
    console.log("Lembrete: Não se esqueça da reunião às 14h!");
}
//TAREFA 2
function mostrarLembrete() {
    console.log("Lembrete: Não se esqueça da reunião às 14h!");
    console.log("Water the plants."); // Adicionando a nova linha
}
//TAREFA 3
function saudacaoEmEspanhol() {
    console.log("¡Hola! ¿Cómo estás?");
}
//TAREFA 4
function saudacaoEmEspanhol() {
    console.log("¡Hola! ¿Cómo estás?");
    console.log("Buenas tardes."); // Adicionando a nova linha
}
//TAREFA 5
function agradecerCliente() {
    console.log("Thank you for your purchase! We appreciate your business.");
}
//TAREFA 6
function agradecerCliente() {
    console.log("Thank you for your purchase! We appreciate your business.");
}

// Chamar a função para exibir a mensagem de agradecimento
agradecerCliente();
//TAREFA 7
function agradecerCliente() {
    console.log("Thank you for your purchase! We appreciate your business.");
}

// Agradecer ao primeiro cliente
agradecerCliente();

// Agradecer ao segundo cliente
agradecerCliente();

// Agradecer ao terceiro cliente
agradecerCliente();
//TAREFA 8
function agradecerCliente(nome) {
    console.log(`Thank you for your purchase, ${nome}! We appreciate your business.`);
}
agradecerCliente("Alice");
agradecerCliente("Bob");
agradecerCliente("Charlie");
//TAREFA 9
function agradecerCliente(nome) {
    console.log('Thank you for your purchase ' + nome + '! We appreciate your business.');
}
//TAREFA 10
function agradecerCliente(nome) {
    console.log('Thank you for your purchase ' + nome + '! We appreciate your business.');
}

agradecerCliente('Cole');
//TAREFA 11
function criarListaDeCompras(item1 = 'leite', item2 = 'pão', item3 = 'ovos') {
    console.log('Lista de Compras:');
    console.log(`1. ${item1}`);
    console.log(`2. ${item2}`);
    console.log(`3. ${item3}`);
}

// Chamando a função sem argumentos
criarListaDeCompras();
//TAREFA 12
// Tarefa 1 - Criar Função para Contar Monitores
function contarMonitores(linhas, colunas) {
    return linhas * colunas;
}

// Tarefa 2 - Calcular Número de Monitores
const numeroDeMonitores = contarMonitores(5, 4);
console.log("Número de Monitores:", numeroDeMonitores);

// Tarefa 3 - Calcular o Custo dos Monitores
function custoDosMonitores(linhas, colunas) {
    return contarMonitores(linhas, colunas) * 200;
}

const custoTotal = custoDosMonitores(5, 4);
console.log("Custo Total dos Monitores:", custoTotal);
//TAREFA 13

// Tarefa 1 - Criar Função para Verificar a Necessidade de Água
const plantaPrecisaDeAgua = function(dia) {
    // Tarefa 2 - Adicionar Condicional para Verificar o Dia
    if (dia === 'Wednesday') {
        return true;
    } else {
        // Tarefa 3 - Adicionar Condição para Outros Dias
        return false;
    }
};

// Tarefa 4 - Testar a Função
const diaTeste = 'Tuesday';
console.log(plantaPrecisaDeAgua(diaTeste)); // Deverá imprimir "false"
//TAREFA 14
const plantaPrecisaDeAguaSeta = (dia) => {
    if (dia === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};

const diaTeste2 = 'Tuesday';
console.log(plantaPrecisaDeAgua(diaTeste)); // Deverá imprimir "false"
