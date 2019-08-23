//Problema 1 Resultado en Consola
let num1 = prompt("Dame un número mayor a 0");

var i;
document.write("<table><tbody>");
document.write("<tr>");
for (i=1;i<=num1;i++){
    document.write("<td>");
    document.write(i);
    document.write("</td>");
}
document.write("</tr>");
document.write("<tr>");
for (i=1;i<=num1;i++){
    document.write("<td>")
    document.write(Math.pow(i, 2));
    document.write("</td>")
}
document.write("</tr>");
document.write("<tr>");
for (i=1;i<=num1;i++){
    document.write("<td>");
    document.write(Math.pow(i, 3));
    document.write("</td>");
}
document.write("</tr>");
document.write("</tbody></table>");


//Problema 2 Resultado en Consola
startTime = new Date();
var resultado = prompt("Dame un número del 0 al 40 para adivinar la suma");
endTime = new Date();
    var x1 = Math.floor((Math.random()*20)+1);
    var x2 = Math.floor((Math.random() * 20) + 1);
var respuesta = x1 + x2;
var tiempo = (endTime - startTime)/1000;
    alert("El resultado fue "+respuesta+" Tu nos diste "+ resultado + " Tardaste: " + tiempo + "s");
//Problema 3 Resultado 
let prueba = [1,9,9,7];
let prueba2 = [-2,0,-3,0,2,3];
function contador(arrayNums) {
    var zero= 0;
    var pos = 0;
    var neg = 0;
    for (x=0;x<arrayNums.length;x++) {
        if (arrayNums[x] == 0) {
            zero ++;
        }
        if (arrayNums[x] <0) {
            neg ++;
        }
        if (arrayNums[x] >0) {
            pos ++;
        }
    }
    var message = "El array tuvo " + neg + " números negativos, " + zero + " zeros, y " + pos + " números positivos";
    document.write(message);
    document.write("<br>");
}
contador(prueba);
contador(prueba2);
//Problema 4
var prueban = [[1,3,4,5,7], [2,4,3,2,6], [3,4,6,7,2]];
var prueban2 = [[1,1,1,1,1], [2,5,3,2,6], [55,4,6,7,2]];
function promedio(matriz) {
    var resultados = [];
    for (y=0;y<matriz.length;y++) {
        var count = 0;
        for (x=0;x<matriz[y].length;x++) {
            count += matriz[y][x];
        }
        var ncount = count /matriz[y].length;
        
        resultados.push(ncount);
    }
    document.write("Los promedios son" + resultados);
    document.write("<br>");
}
promedio(prueban);
promedio(prueban2);

//Problema 5 Resultado 
function reverse_a_number(n)
{
	n = n + "";
	newNum =  n.split("").reverse().join("");
    document.write(newNum);
    document.write("<br>");
}
reverse_a_number(123);
reverse_a_number(23433);


//Problema 6
alert("¿Te alcanza para unas sabritas?");
var dinero = prompt("¿Cuánto dinero tienes?");

if (dinero <= 0) {
    alert("Tu dinero es negativo o no tienes, checa tu banco");
} else if (dinero > 12) {
    alert("Si te alcanza! Cuesta $10 y tienes $" + dinero + ".");
} else if (dinero <= 11) {
    alert("No te alcanza :( ");
}