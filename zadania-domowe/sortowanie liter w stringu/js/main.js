'use strict';

function sortString(str) {
    var splitString = str.split('');
    var sortArray = splitString.sort();
    var joinArray = sortArray.join('');
    console.log(joinArray);
    
}
 sortString("Akademia 108");

