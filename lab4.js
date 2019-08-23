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
var tiempo = endTime - startTime
    alert("El resultado fue "+respuesta+" Tu nos diste "+ resultado + " Tardaste: " + tiempo);

//Problema 5 Resultado en consola
var inverso = [1,9,9,7];
console.log('inverso: ', inverso);

var reversed = inverso.reverse();
console.log('reversed: ', reversed);

//Problema 6
alert("¿Te alcanza para un gansito del oxxo?")
var dinero = prompt("¿Cuánto dinero tienes?");

if (dinero <= 0) {
    alert("Tu dinero es negativo checa tu banco, que tengas un buen día");
} else if (dinero > 12) {
    alert("Si te alcanza! :D Cuesta $12 y tienes $" + dinero + ".");
} else if (dinero <= 11) {
    alert("No te alcanza :( ")
}