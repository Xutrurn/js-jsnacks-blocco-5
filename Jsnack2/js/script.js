// alert("Hello world");

$(document).ready(function() {

  // 2) Jsnack2 - Creare un array che contiene 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

  console.log('#### JSnack 2 ####');
  console.log('                  ');

  var zucchine = [{
      varieta: 'nero',
      peso: 1,
      lunghezza: 1
    },
    {
      varieta: 'romanesco',
      peso: 2,
      lunghezza: 1
    },
    {
      varieta: 'faenza',
      peso: 3,
      lunghezza: 1
    },
    {
      varieta: 'fiorentina',
      peso: 4,
      lunghezza: 1
    },
    {
      varieta: 'siciliano',
      peso: 5,
      lunghezza: 1
    },
    {
      varieta: 'napoli',
      peso: 6,
      lunghezza: 1
    },
    {
      varieta: 'triestina',
      peso: 7,
      lunghezza: 1
    },
    {
      varieta: 'pugliese',
      peso: 8,
      lunghezza: 1
    },
    {
      varieta: 'piacenza',
      peso: 9,
      lunghezza: 1
    },
    {
      varieta: 'nizza',
      peso: 10,
      lunghezza: 1
    }

  ];

  var somma = 0;

  for (var i = 0; i < zucchine.length; i++) {
    var zucchina = zucchine[i].peso;
    somma += zucchina;
  }

  console.log('Il peso totale delle zucchine è : ' + somma);

});





// console.log();
