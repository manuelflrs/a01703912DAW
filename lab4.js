//Problema 1 Resultado en Consola
let num1 = prompt("Dame un número mayor a 0");
document.write("pn")
var i;
var tablee = "<table><tbody>";
tablee+= "<tr>";
for (i=1;i<=num1;i++){
    tablee += "<td>";
    tablee += i;
    tablee += "</td>";
}
tablee+= "</tr>";
tablee+= "<tr>";
for (i=1;i<=num1;i++){
    tablee += "<td>";
    tablee += Math.pow(i, 2);
    tablee += "</td>";
}
tablee+= "</tr>";
tablee+= "<tr>";
for (i=1;i<=num1;i++){
    tablee += "<td>";
    tablee += Math.pow(i, 3);
    tablee += "</td>";
}
tablee+= "</tr>";
tablee = "</tbody></table>";
console.log(tablee)


//Problema 2 Resultado en Consola
var resultado = prompt("Dame un número del 0 al 40 para adivinar la suma");
    var x1 = Math.floor((Math.random()*20)+1);
    var x2 = Math.floor((Math.random() * 20) + 1);
var respuesta = x1 + x2;
    console.log("El resultado fue "+respuesta+" Tu nos diste "+ resultado);

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