const exactMath = require('exact-math');

let operacion01 = exactMath.add(789, 34, 250443); 
console.log(operacion01);

let operacion02 = exactMath.sub('25.5', '.5');
console.log(operacion02);

let operacion03 = exactMath.mul(2, '2', 5, .1);
console.log(operacion03);

let operacion04 = exactMath.div('55', 2);
console.log(operacion04);

let operacion05 = exactMath.formula('4*(12/3)-7.77');
console.log(operacion05);

let operacion06 = exactMath.round(123456, 5);
console.log(operacion06);

let operacion07 = exactMath.ceil(0.123456789, -3);
console.log(operacion07);

let operacion08 = exactMath.floor(9.999, 1);
console.log(operacion08);

let operacion09 = exactMath.pow(2, 5);
console.log(operacion09);
