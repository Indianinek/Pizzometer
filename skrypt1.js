
var b=document.getElementById("b");


b.onclick=function MainScript()
{

	if(document.getElementById("srednica1").value=='')
	{
	alert("Proszę o wypełnienie pola ze średnicą pierwszej pizzy.");
	location.reload();
	}
	else if(document.getElementById("cena1").value=='')
	{
	alert("Proszę o wypełnienie pola z ceną pierwszej pizzy.");
	location.reload();
	}
	else if(document.getElementById("srednica2").value=='')
	{
	alert("Proszę o wypełnienie pola ze średnicą drugiej pizzy.");
	location.reload();
	}
	else if(document.getElementById("cena2").value=='')
	{
	alert("Proszę o wypełnienie pola z ceną drugiej pizzy.");
	location.reload();
	}


var s1=document.getElementById("srednica1").value/2;
	var c1=document.getElementById("cena1").value;
		var d1=document.getElementById("dzielic2");


var s2=document.getElementById("srednica2").value/2;
	var c2=document.getElementById("cena2").value;
		var d2=document.getElementById("dzielic2");

	var pi=Math.PI;
	var pows1=Math.pow(s1,2);
	var pows2=Math.pow(s2,2);

				var polepizza1= pi * pows1;
				var polepizza2= pi* pows2;

						var pizza1_afterComma=polepizza1.toFixed(2);
						var pizza2_afterComma=polepizza2.toFixed(2);


		var pizza1_afterDivide=pizza1_afterComma/2;
				var cena1_afterDivide=c1/2;
					var reszta1_1=pizza1_afterDivide/cena1_afterDivide;
						var reszta1=pizza1_afterComma/c1;

			var pizza2_afterDivide=pizza2_afterComma/2;
				var cena2_afterDivide=c2/2;
					var reszta2_1=pizza2_afterDivide/cena2_afterDivide;
							var reszta2=pizza2_afterComma/c2;

			var x = document.getElementById("pizza1_nazwa").value;
			var x2 = document.getElementById("pizza2_nazwa").value;

			var pizza6_1=polepizza1/6;
				var pizza6_2=polepizza2/6;

			var kawalek1=c1/6;
				var kawalek2=c2/6;


		if(document.getElementById('dzielic1').checked)
		{


			$(".srednica1pizzy").html('Po podzieleniu pola pierwszej pizzy dla jednej osoby:<div class="podkreslenie">'+pizza1_afterDivide+' &nbsp;cm<sup>2</sup> </div>');
			$(".cena1pizzy").html('Cena dla jednej osoby wynosi : <div class="podkreslenie">'+cena1_afterDivide+' PLN</div>');
			$(".pizza6_1div").html('Powierzchnia/cena jednego kawałka <div class="podkreslenie">'+pizza6_1.toFixed(2)+'&nbsp;cm<sup>2</sup> / '+kawalek1.toFixed(2)+' PLN </div>');


			$(".srednica2pizzy").html('Po podzieleniu pola powierzchni drugiej pizzy dla jednej osoby:<div class="podkreslenie">'+pizza2_afterDivide+' &nbsp;cm<sup>2</sup> </div>');
			$(".cena2pizzy").html('Cena dla jednej osoby wynosi : <div class="podkreslenie">'+cena2_afterDivide+' PLN</div>');
			$(".pizza6_2div").html('Powierzchnia/cena jednego kawałka <div class="podkreslenie">'+pizza6_2.toFixed(2)+'&nbsp;cm<sup>2</sup> / '+kawalek2.toFixed(2)+' PLN </div>');


			$(".plncm2_1").html('Za 1 PLN masz: <div class="podkreslenie">'+reszta1_1.toFixed(2)+' &nbsp;cm<sup>2</sup> </div> pierwszej pizzy.');

			$(".plncm2_2").html('Za 1PLN masz: <div class="podkreslenie">'+reszta2.toFixed(2)+' &nbsp;cm<sup>2</sup> </div> drugiej pizzy.');

			if(reszta1_1>reszta2)
			{
				$(".oplaca1").html('Pizza');
					$(".pizza1nazwa").html(''+x+'');
						$(".oplaca1_2").html(' oplaca sie bardziej.');

			}

		}
		else
		{

			$(".srednica1pizzy").html('Pole powierzchni pierwszej pizzy: <div class="podkreslenie">'+pizza1_afterComma+' &nbsp;cm<sup>2</sup></div>');
			$(".cena1pizzy").html('Cena wynosi : <div class="podkreslenie">'+c1+' PLN</div>');

			$(".pizza6_1div").html('Powierzchnia/cena jednego kawałka <div class="podkreslenie">'+pizza6_1.toFixed(2)+'&nbsp;cm<sup>2</sup> / '+kawalek1.toFixed(2)+' PLN </div>');


			$(".plncm2_1").html('Za 1 PLN masz: <div class="podkreslenie">'+reszta1.toFixed(2)+' &nbsp;cm<sup>2</sup> </div> pierwszej pizzy.');

		}



		if(document.getElementById('dzielic2').checked)
		{

			$(".srednica2pizzy").html('Po podzieleniu pola powierzchni drugiej pizzy dla jednej osoby:<div class="podkreslenie">'+pizza2_afterDivide+' &nbsp;cm<sup>2</sup> </div>');
			$(".cena2pizzy").html('Cena wynosi : <div class="podkreslenie">'+cena2_afterDivide+' PLN</div>');

			$(".pizza6_2div").html('Powierzchnia/cena jednego kawałka <div class="podkreslenie">'+pizza6_2.toFixed(2)+'&nbsp;cm<sup>2</sup> / '+kawalek2.toFixed(2)+' PLN </div>');

				if(document.getElementById('dzielic1').checked)
				{
					$(".plncm2_1").html('Za 1 PLN masz : <div class="podkreslenie">'+reszta1_1.toFixed(2)+' &nbsp;cm<sup>2</sup></div> pierwszej pizzy.');
				}
				else
				{
					$(".plncm2_1").html('Za 1 PLN masz : <div class="podkreslenie">'+reszta1.toFixed(2)+' &nbsp;cm<sup>2</sup> </div> pierwszej pizzy.');
				}

				$(".plncm2_2").html('Za 1 PLN masz: <div class="podkreslenie">'+reszta2_1.toFixed(2)+' &nbsp;cm<sup>2</sup> </div> drugiej pizzy.');

					if(reszta2_1>reszta1)
					{
						$(".oplaca2").html('Pizza');
							$(".pizza2nazwa").html(''+x2+'');
								$(".oplaca2_2").html(' oplaca sie bardziej.');
					}
					else if(reszta2_1==reszta1)
					{
						$(".oplaca1").html('Obie pizze warte sa tyle samo');
					}
					else if(reszta2_1<reszta1)
					{
						$(".oplaca1").html('Pizza');
							$(".pizza1nazwa").html(''+x+'');
								$(".oplaca1_2").html(' oplaca sie bardziej.');
					}
		}
		else
		{
		$(".srednica2pizzy").html('Pole powierzchni drugiej pizzy: <div class="podkreslenie">'+pizza2_afterComma+' &nbsp;cm<sup>2</sup></div>');
		$(".cena2pizzy").html('Cena wynosi : <div class="podkreslenie">'+c2+' PLN</div>');
		$(".pizza6_2div").html('Powierzchnia/cena jednego kawałka <div class="podkreslenie">'+pizza6_2.toFixed(2)+'&nbsp;cm<sup>2</sup> / '+kawalek2.toFixed(2)+' PLN </div>');

		$(".plncm2_2").html('Za 1 PLN masz: <div class="podkreslenie">'+reszta2.toFixed(2)+' &nbsp;cm<sup>2</sup> </div> drugiej pizzy.');

			if(reszta1>reszta2)
			{
				$(".oplaca1").html('Pizza');
					$(".pizza1nazwa").html(''+x+'');
						$(".oplaca1_2").html(' oplaca sie bardziej.');
			}
			if(reszta1<reszta2)
			{

				$(".oplaca2").html('Pizza');
					$(".pizza2nazwa").html(''+x2+'');
						$(".oplaca2_2").html(' oplaca sie bardziej.');

			}
			if(reszta1==reszta2)
			{
				$(".oplaca1").html('Obie pizze warte sa tyle samo');
			}
		}
}
