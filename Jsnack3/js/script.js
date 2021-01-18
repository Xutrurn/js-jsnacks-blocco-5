// alert("Hello world");

$(document).ready(function() {

  // 2)Jsnack3 - Creare un array che contiene 10 oggetti che rappresentano una zucchina.
  // Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.


  console.log('#### JSnack 3 ####');
  console.log('                  ');


  var zucchine = [{
      varieta: 'nero',
      peso: 1,
      lunghezza: 11
    },
    {
      varieta: 'romanesco',
      peso: 2,
      lunghezza: 12
    },
    {
      varieta: 'faenza',
      peso: 3,
      lunghezza: 13
    },
    {
      varieta: 'fiorentina',
      peso: 4,
      lunghezza: 14
    },
    {
      varieta: 'siciliano',
      peso: 5,
      lunghezza: 15
    },
    {
      varieta: 'napoli',
      peso: 6,
      lunghezza: 16
    },
    {
      varieta: 'triestina',
      peso: 7,
      lunghezza: 17
    },
    {
      varieta: 'pugliese',
      peso: 8,
      lunghezza: 18
    },
    {
      varieta: 'piacenza',
      peso: 9,
      lunghezza: 19
    },
    {
      varieta: 'nizza',
      peso: 10,
      lunghezza: 20
    }

  ];

  var zucchineLunghe = [];
  var zucchineCorte = [];
  var sommaPesoLunghe = 0;
  var sommaPesoCorte = 0;

  for (var i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza >= 15) {
      zucchineLunghe.push(zucchine[i]);
      sommaPesoLunghe += zucchine[i].peso;
    } else {
      zucchineCorte.push([i]);
      sommaPesoCorte += zucchine[i].peso;
    }
  }

  console.log('Il gruppo delle zucchine corte pesa : ' + sommaPesoCorte);
  console.log('Il gruppo delle zucchine lunghe pesa : ' + sommaPesoLunghe);







});





// console.log();
