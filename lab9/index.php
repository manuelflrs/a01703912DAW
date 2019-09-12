
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lab 9: PHP</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="..\bootstrap\bootstrap-4.0.0-beta.2-dist\js\jquery-3.2.1.js"></script>
    <script src="..\bootstrap\bootstrap-4.0.0-beta.2-dist\js\bootstrap.bundle.js"></script>
</head>
<body>

<div class="container">
<h1>Lab 9</h1>
    <p>
    The phpinfo() function can be used to output a large amount of information about your PHP installation and can be used to identify installation and configuration problems. To run the function, just create a new file called test.php and place it into the root directory of your web server.
    Se me hizo interesante que además de dar la info general se puede pedir info específica.
    </p>
    <p>
    Aunque XAMPP sirve muy bien como servidor de prueba local, se puede usar LAMPP y agregar ajustes de seguridad para usarse como apto para producción.
    </p>
    <p>
    Pues la manera en la que sirve es que el código de el lado del servidor toma inputs de el usuario para asi correr funcione de lado de servidor y desplegar una página html dinámica.
    </p>
</div>
<div class="container">
    <form method="post">
        Sube un arreglo de números, separados por comas:
        <br>
        <input type="text" name="st">
        <br>
        Dame un número:
        <br>
        <input type="number" name="n">
        <br>
        <button type="submit">Go!</button>
    </form>
</div>

<div class="container">
    <?php
        function promedio($arr)
        {
            $sum =0;
            $n = count($arr);
            $i = 0;
            for($i; $i < $n; $i++)
            {
                $sum = $sum + $arr[$i];
            }
            $promedio = $sum / $n;
            return $promedio;
        }
        function mediana($arr)
        {
            $n = count($arr);
            sort($arr);
            if($n%2==0)
            {
                return ($arr[$n/2 -1]+$arr[$n/2])/2;
            }
            else
            {
                return $arr[ceil($n / 2 - 1)];
            }
        }
        function sortSmalltoBig($arr)
        {
            $arraux = $arr;
            sort($arraux);
            return $arraux;
        }
        function sortBigtoSmall($arr)
        {
            $arraux = array_reverse(sortSmalltoBig($arr));
            return $arraux;
        }
        function printArray($arr)
        {
            $n = count($arr);
            for ($i = 0; $i < $n -1; $i++) {
                echo $arr[$i].", ";
            }
            echo $arr[$i].".";
        }
        function printAll($arr)
        {
            $n = count($arr);
            echo "<p>Arreglo: ".printArray($arr)."</p>";
            echo "<ul>";
            echo "<li>Promedio: ".promedio($arr)."</li>";
            echo "<li>Mediana: ".mediana($arr)."</li>";
            echo "<li>Pequeño a Grande: ".printArray(sortSmalltoBig($arr))."</li>";
            echo "<li>Grande a Pequeño: ".printArray(sortBigtoSmall($arr))."</li>";
            echo "</ul>";
        }
        function cubosCuadrados($n)
        {
            echo "<table border='2'><thead><tr><td>Número</td><td>Cuadrados</td><td>Cubos</td></tr></thead><tbody>";
            for($i=0;$i<=$n;$i++){
                echo "<tr><td>".$i."</td><td>".$i**2 ."</td><td>".$i**3 ."</td></tr>";
            }
            echo "</tbody></table>";
        }
        if(count($_POST)>0)
        {
            $arreglo = explode(",", str_replace(" ", "", $_POST["st"]));
            printAll($arreglo);
            $n=$_POST["n"];
            cubosCuadrados($n);
        }
    ?>
    </div>

    

</body>
</html>
