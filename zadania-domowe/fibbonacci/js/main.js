'use strict';

var a = 0;
var b = 1;
var c;
var fib =[];
var i;

fib[0]=0;
fib[1]=1;
for(i=2; i<= 20; i++) {
    fib[i]=fib[i-2]+fib[i-1];
    console.log(fib[i]);
}