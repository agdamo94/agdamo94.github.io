'use strict';

var liczby = [1,2,3,4,5,6];

function dzialanie() {
    var suma = 0;
    for (var i = 0; i < liczby.length; i++) {
        suma = suma + liczby[i];

    }
    console.log('Suma elementów:' + suma);

    var iloczyn = 1;
    for (var j = 0; j < liczby.length; j++) {
        iloczyn = iloczyn * liczby[j];
    }
    console.log('Iloczyn elementów:' + iloczyn);
}
dzialanie();
