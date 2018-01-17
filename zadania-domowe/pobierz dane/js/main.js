'use strict';

$(function () {
    $('button').click(function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            $('#dane-programisty').html('<p>Imię: ' + data.imie + '</p>' + '<p>Nazwisko: ' + data.nazwisko + '</p>' + '<p>Zawód: ' + data.zawod + '</p>' + '<p>Firma: ' + data.firma + '</p>');
        });
    });
});
