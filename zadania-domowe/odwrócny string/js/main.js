'use strict';

function reverseString(str) {
    var splitString = str.split('');
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join('');
    console.log(joinArray);
    
}
 reverseString("Akademia 108");

