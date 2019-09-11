  $('.dropdown-trigger').dropdown();

  document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Dropdown.init(elems, options);
      }
  );
  
function reloj() {
    var hoy=new Date(); var h=hoy.getHours(); var m=hoy.getMinutes(); var s=hoy.getSeconds();
    m = actualizarHora(m);    s = actualizarHora(s);
    document.getElementById('displayReloj').innerHTML = h+":"+m+":"+s;
    var t = setTimeout(function(){reloj()},500);
}
 
function actualizarHora(i) {
    if (i<10) {i = "0" + i};  // Añadir el cero en números menores de 10
    return i;
}
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}