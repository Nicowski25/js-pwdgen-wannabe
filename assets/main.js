//fisso il 23 come costante
const number = 23;
//chiedo, salvo su variabile e stampo il nome
let userName = prompt('qual\'è il tuo nome');
console.log(userName);
//chiedo, salvo su variabile e stampo il cognome
let userCognome = prompt('qual\'è il tuo cognome');
console.log(userCognome);
//chiedo, salvo su variabile e stampo il colore preferito
let userFavColor = prompt('qual\'è il tuo colore preferito');
console.log(userFavColor);
//creo la nuova password
let newPassword = userName + userCognome + userFavColor + number;
console.log(newPassword);
//selezionp l'id nell'index a cui attribuire la variabile
let element = document.getElementById('password');
element.innerHTML = newPassword;