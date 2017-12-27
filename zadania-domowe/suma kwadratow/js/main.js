'use strict';

var liczby = [0,1,2,3,4,5];

function dzialanie(pot) {
    var potega = 0;
    for (var i = 0; i < pot.length; i++) {
        potega = potega + Math.pow(pot[i], 2);
    }
    console.log(potega);
}
dzialanie(liczby);
