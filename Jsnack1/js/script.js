// alert("Hello world");

$(document).ready(function() {

  // 1)Jsnack1 - Creare un oggetto palla che abbia le seguenti proprietà.
  // Nome = palla
  // Peso = 10
  // Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.
  console.log('#### JSnack 1 ####');
  console.log('                  ');


  var palla = {
    nome: 'palla',
    peso: 10
  };

  console.log('↓ Peso Originale ↓');
  for (var key in palla) {
    console.log(key + ': ' + palla[key]);
  }

  console.log('                  ');
  console.log('-------------------');
  console.log('                  ');


  console.log('↓ Peso Modificato ↓');
  var modificaPeso = parseInt(prompt('Cambia il peso della palla'));

  palla.peso = modificaPeso;

  for (var key in palla) {
    console.log(key + ': ' + palla[key]);
  }



});





// console.log();
