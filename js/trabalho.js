
    $("#ordenar").click(function () {

        var x = parseInt($("#X").val());
        var y = parseInt($("#Y").val());
        var z = parseInt($("#Z").val());
    
if (isNaN(x) || isNaN(y) || isNaN(z)) {
    alert("Digite números válidos");
    return;
}

// X menor 
if (x <= y && x <= z && y <= z) {
    $("#txtresultado").html("Resultado: <br>x = " + x + "<br> y = " + y + "<br> z = " + z);
}
else if (x <= y && x <= z && y >= z) {
    $("#txtresultado").html("Resultado:<br> x = " + x + "<br> z = " + z + "<br> y = " + y);
}

// Y menor
else if (y <= x && y <= z && z >= x) {
    $("#txtresultado").html("Resultado: <br>y = " + y + "<br> x = " + x + "<br> z = " + z);
}
else if (y <= x && y <= z && z <= x) {
    $("#txtresultado").html("Resultado:<br> y = " + y + "<br> z = " + z + "<br> x = " + x);
}

// Z menor 
else if (z <= x && z <= y && y >= x) {
    $("#txtresultado").html("Resultado:<br> z = " + z + "<br> x = " + x + "<br> y = " + y);
}
else if (z <= x && z <= y && y <= x) { 
    $("#txtresultado").html("Resultado:<br> z = " + z + "<br> y = " + y + "<br> x = " + x);
}
else {
    alert("Digite números válidos");
}
     });


      