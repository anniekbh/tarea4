window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var soles = parseFloat(document.getElementById("soles").value);
		var tc = parseFloat(document.getElementById("tc").value);
		var resultado = document.getElementById("resultado");
		resultado.innerHTML = "<p>El resultado es " + division(soles,tc) + "</p>";
	});

	function division(soles, tc) {
		return (soles/tc).toFixed(2);
	}
});