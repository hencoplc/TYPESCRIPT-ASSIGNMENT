"use strict";
let outPut = [];
let sum = 0;
function getFib(n) {
    for (i = 0; i <= n; i++) {
        sum += sum + i;
        console.log(outPut.push(sum));
    }
}
getFib(5);
