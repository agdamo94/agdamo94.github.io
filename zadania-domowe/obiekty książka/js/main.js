'use strict';

class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
        this.wyswietlInfo = function opiszKsiazke() {
            if (przeczytana) {
                console.log('Książka ma tytuł ' + this.tytul + ',' + ' autorem jest ' + this.autor + ' i została przeczytana.');
            } else {
                console.log('Książka ma tytuł ' + this.tytul + ',' + ' autorem jest ' + this.autor + ' i nie została przeczytana.');
            }
        };
    }
}

var inferno = new Ksiazka('Inferno', 'Dan Brown', true);
var js = new Ksiazka('JavaScript i jQuery', 'Jon Duckett', false);
var black = new Ksiazka('Black Out', 'Marc Elsberg', false);

var tablica = [inferno, js, black];

function iloscPrzeczytanych(tablica) {
    var sumaPrzeczytanych = 0;

    for (var i = 0; i < tablica.length; i++) {
        if (tablica[i].przeczytana) {
            sumaPrzeczytanych += 1;
            tablica[i].wyswietlInfo();
        }
    }
    console.log(sumaPrzeczytanych);
}

iloscPrzeczytanych(tablica);
