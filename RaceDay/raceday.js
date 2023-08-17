let numeroDoCorredor = Math.floor(Math.random() * 1000);

let registrouCedo = true; // Assume que o corredor se registrou cedo
let age = 20; // Idade do corredor (substitua pelo valor correto)

if (age > 18 && registrouCedo) {
  numeroDoCorredor += 1000;
}

if (age > 18 && registrouCedo) {
  console.log(`Corredor com número de corrida ${numeroDoCorredor} correrá às 9h30.`);
} else if (age > 18 && !registrouCedo) {
  console.log(`Corredor com número de corrida ${numeroDoCorredor} correrá às 11h00.`);
} else if (age < 18) {
  console.log(`Corredor jovem com número de corrida ${numeroDoCorredor} correrá às 12h30.`);
} else if (age === 18) {
  console.log("Por favor, consulte a mesa de registro.");
}
