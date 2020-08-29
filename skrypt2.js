function ciekawostka()
 {
	var x = Math.floor((Math.random() * 10) + 1);

	 var ciekawostki=new Array();
    ciekawostki[0]="Najwięcej pizzy zjada się w sobotnie wieczory ";
	  ciekawostki[1]="Podobno jedzenie pizzy raz w tygodniu zmniejsza ryzyko raka przełyku.";
    ciekawostki[2]="Podobno to kobiety dają większe napiwki dostawcom!'?";
    ciekawostki[3]="Czy wiesz że: Ketchup i sos Marinara to nie to samo?";
    ciekawostki[4]="Neapolitańska Antica Pizzeria Port’Alba uważana jest za pierwszą pizzerię na świecie. Działa od 1830 roku!";
    ciekawostki[5]="…Pizza hawajska nie pochodzi z Hawajów. Wynaleźli ją Kanadyjczycy";
    ciekawostki[6]="Pierwsza transakcja, gdy za wirtualną walutę zwaną Bitcoin kupiono jakiś towar, była zapłata 10,000 BTC za pizzę… dziś to ponad $1 000 000!";
    ciekawostki[7]="Rekord w jedzeniu 30 cm pizzy to 41.31 sek. O dziwo nie należy do Amerykanina, tylko do Kanadyjczyka Petera Czerwinskiego.";
    ciekawostki[8]="Czy wiesz że: Pizza Diavolo z Tesco kosztuje 7,99 zł?";

	var rand = ciekawostki[Math.floor(Math.random() * ciekawostki.length)];

	alert(rand);

 }
