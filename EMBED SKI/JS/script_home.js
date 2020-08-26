var citati = [
    "“Talk is cheap. Show me the code” ― Linus Torvalds",
    "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand” ― Martin Fowler",
    "“Simplicity is the soul of efficiency.” – Austin Freeman",
    "“Java is to JavaScript what car is to Carpet.” – Chris Heilmann",
    "“Fix the cause, not the symptom.” – Steve Maguire"
]

var timer = setInterval(prikaziCitat, 10000);

var paragraf = document.getElementById("citat");

var i=1;

function prikaziCitat()
{
    if(i==citati.length)
    {
        i=0;
    }
    paragraf.innerHTML=citati[i++];
}

function ucitajCitat()
{
    paragraf.innerHTML = citati[0];
}

function zatvoriReklamu()
{
    var reklama = document.getElementById("reklama");
    reklama.style.display="none";
    var navindex = document.getElementById("navindex");
    navindex.style.top="0";
    var omeni = document.getElementById("o-meni");
    omeni.style.marginTop="100px";
}