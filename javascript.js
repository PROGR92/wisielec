//global vars
var haslo ="Kinga idzie do sklepu";
haslo = haslo.toUpperCase();

var dlugosc=haslo.length;
var haslo2 = "";
var licznik=0;

var alfabet="aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż"
alfabet=alfabet.toUpperCase();

for (i=0; i<dlugosc; i++)
{
	if (haslo.charAt(i)==" ") haslo2 = haslo2 + " ";
	else haslo2 = haslo2 + "-";
}
//for (i=0; i<dlugosc; i++)
//{
//	if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
//	else haslo1 = haslo1 + "-";
//}

function wypisz_haslo() 
{
    document.getElementById("plansza").innerHTML=haslo2;
}

window.onload = start;

function start()
{
    var dl_al=alfabet.length;
    tresc_alfabetu="";

    for (i=0; i<dl_al; i++)
    {
        var nazwa = 'lit'+i;
        tresc_alfabetu = tresc_alfabetu + '<div class="litera" onclick="sprawdz('+i+')" id="'+ nazwa +'">'+alfabet.charAt(i)+'</div>';
        if((i+1)%7==0) tresc_alfabetu = tresc_alfabetu + '<div style="clear: both;"></div>';
    }
    document.getElementById("alfabet").innerHTML=tresc_alfabetu;
    wypisz_haslo();
}

String.prototype.poDmiana=function(numer_znaku,znak)
{
    if (numer_znaku>this.length-1) return this.toString();
    else return this.substr(0,numer_znaku)+znak+this.substr(numer_znaku+1);
}
    
function sprawdz(nr)
{
    //czy trafiono
    var trafiona=false;


    for (i=0; i<dlugosc; i++)
    {
        if (haslo.charAt(i) == alfabet.charAt(nr)) 
        {
            haslo2 = haslo2.poDmiana(i,haslo.charAt(i));
            trafiona=true;
        }
    }

        if (trafiona==true) 
        { 
            var nazwa = 'lit'+nr;
            document.getElementById(nazwa).style.background="#003300";
            document.getElementById(nazwa).style.border="3px solid #00C000";
            document.getElementById(nazwa).style.color="#00C000";
            document.getElementById(nazwa).style.cursor="default";
            wypisz_haslo();
        }
        else{
            var nazwa = 'lit'+nr;
            document.getElementById(nazwa).style.background="#cc0000";
            document.getElementById(nazwa).style.border="3px solid red";
            document.getElementById(nazwa).style.color="red";
            document.getElementById(nazwa).style.cursor="default";
            //wyłączenie ONCLICA
            document.getElementById(nazwa).setAttribute("onclick",";")
            licznik++;
            if (licznik<10)
            {
                document.getElementById("wisielec").innerHTML='<img src="img/s'+licznik+'.jpg"  alt=""/>';
            }
            if (licznik>=9)
            {
                document.getElementById("tytul").innerHTML='PRZEGRANA';
            }
        }
 
        
   
 
}

