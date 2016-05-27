window.onload = function()
{
	//INICIO PRIMER EJERCICIO....
	var numeroAleatorio = 0;
	var NumeroMaximo = 10;
	var generoNumero=false;
	//Para obtener el número aleatorio...
	nom_div("nuevoNumero").addEventListener('click', function(event)
    {
        //console.log("Generar número aleatorio");
        //OBTENER UN NÚMERO ALEATORIO DE 1 - 10...
        //Esto puede realizarse a través de la función random()
        numeroAleatorio=Math.floor(Math.random() * NumeroMaximo) + 1;
        console.log(numeroAleatorio);
        //Recuerden que se adiciona 1 para que el valor de NumeroMaximo 
        //sea incluyente
        generoNumero=true;
    });

    //Para validar si el valor ingresado por el usuario es igual...
    nom_div("validaAdivina").addEventListener('click', function(event)
    {

    	if (generoNumero) 
    		{
    			var numeroUsuario = Number(nom_div("adivinaNumero").value);
        		
        		if (numeroUsuario>=1 && numeroUsuario<=10) 
        			{
	        			if (numeroUsuario===numeroAleatorio) 
	        				{
	        					nom_div("mensajeAdivina").innerHTML = "BUEN TRABAJO EL NÙMERO ES "+ numeroAleatorio;
	           				}
	           			else
	           				{
	           				nom_div("mensajeAdivina").innerHTML = "ESE NO ES E NÙMERO";
	           				}
        			}
        		else
        			{
        					nom_div("mensajeAdivina").innerHTML = "EL NUMERO NO ESTA ENTRE EL RANGO 1 - 10";
	           		}


        		
        		
    		}
    	else
    		{
   		 		nom_div("mensajeAdivina").innerHTML = "No a generado el numero aleatorio";
   
    		}

        
    });
	//FIN DEL PRIMER EJERCICIO...

	/* ------------------------------------------------------------ */
	/* ------------------------------------------------------------ */
	/* ------------------------------------------------------------ */

	//INICIO SEGUNDO EJERCICIO...
	var truncateString = function()
	{
		var texto 	  = nom_div("stringTruncate").value, 
		valMaximo = Number(nom_div("numberTruncate").value);
		
		//El div donde se mostrará el mensaje es: mensajeTruncate

		

/*
		if (texto.length>valMaximo) 
			{
				nom_div("mensajeTruncate").innerHTML = texto.substring(0,valMaximo) + "...";
			}
		else
			{
				nom_div("mensajeTruncate").innerHTML = texto;
			}		
*/

		nom_div("mensajeTruncate").innerHTML = ((texto.length>valMaximo) ? nom_div("mensajeTruncate").innerHTML = texto.substring(0,valMaximo) + "..." :nom_div("mensajeTruncate").innerHTML = texto);



	//ESTA

	};

	//Para capturar los eventos de teclado...
	nom_div("stringTruncate").addEventListener("keyup", function (event)
	{
		truncateString();
  	});
	//Para capturar el valor máximo del string...
	nom_div("numberTruncate").addEventListener("change", function (event)
	{
		truncateString();
  	});
	//FIN DEL SEGUNDO EJERCICIO....

	/* ------------------------------------------------------------ */
	/* ------------------------------------------------------------ */
	/* ------------------------------------------------------------ */

	//INICIO TERCER EJERCICIO...
	var estudiantes = [{
							nombre : "Juan", 
							nota   : 80
					   }, 
					   {
							nombre : "María", 
							nota   : 77
					   }, 
					   {
							nombre : "Carlos", 
							nota   : 88
					   }, 
					   {
							nombre : "Miriam", 
							nota   : 95
					   }, 
					   {
							nombre : "Pedro", 
							nota   : 68
					   }, 
					   {
							nombre : "Luis", 
							nota   : 95
					   }, 
					   {
							nombre : "Hector", 
							nota   : 68
					   }];
	
	var grados = [{
						rango : 60, 
						grado : "F", 
				  }, 
				  {
						rango : 70, 
						grado : "D", 
				  }, 
				  {
						rango : 80, 
						grado : "C", 
				  }, 
				  {
						rango : 90, 
						grado : "B", 
				  }, 
				  {
						rango : 100, 
						grado : "A", 
				  }];
	var imprimeDatos = (function()
	{
		var txtEstudiantes = txtGrados = ""; 
		for(var i = 0; i < estudiantes.length; i++)
		{
			txtEstudiantes += "<li>"+estudiantes[i].nombre + " = " + 
							  "<input type = 'number' value = '"+(estudiantes[i].nota)+"' class = 'notUser' id = 'nota_"+(i + 1)+"'>" + 
							  "</li>";
		}
		txtEstudiantes = "<ol>"+(txtEstudiantes)+"</ol>";
		nom_div("listadoUsuarios").innerHTML = txtEstudiantes;
		//Para loe eventos de escucha...
		var inputs = document.getElementsByClassName("notUser");
		for(var i = 1; i <= inputs.length; i++)
		{
			nom_div("nota_" + i).addEventListener('change', function(event)
			{
				var ind = Number(this.id.split("_")[1]) - 1;
				estudiantes[ind].nota = Number(this.value);
				calculaPromedioCurso();
			});
		}
		//Para imprimir los grados...
		for(var i = 0; i < grados.length; i++)
		{
			txtGrados += "<li> <= "+grados[i].rango + " = <b>"+grados[i].grado+"</b></li>";
		}
		txtGrados = "<ul>"+(txtGrados)+"</ul>";
		nom_div("listadoGrados").innerHTML = txtGrados;
	})();

var promedio=0;

	var calculaPromedioCurso = function()


	{	
			for (var i = 0; i < estudiantes.length; i++) 
	{
		promedio+=estudiantes[i].nota
	}

	promedio= Math.round(promedio/estudiantes.length);

		for (var i = 0; i < grados.length; i++) {
			if(promedio <= grados[i].rango)
			{
				nom_div("mensajePromedio").innerHTML = "EL PROMEDIO ES " + promedio+ " Y EL GRADO ES " + grados[i].grado;
				break;
			}
		};

		promedio=0;
	};

	nom_div("calculaPromedio").addEventListener('click', function(event)
	{
		calculaPromedioCurso();
		console.log(promedio);

	});
	//FIN DEL EJERCICIO TRES






	//Para imprir elementos en el HTML...
    function nom_div(div)
    {
        return document.getElementById(div);
    }
};
