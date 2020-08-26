var nizBrojeva=[];
var kliknutiBrojevi=[];
var poljaTabele=document.getElementsByTagName("td");
var btnZapocni = document.getElementById("btn-zapocni");
var divTajmer = document.getElementById("linija-tajmer");
var progressTajmer = document.getElementById("linija-napredak");
var lblTajmer = document.getElementById("tajmer");
var tajmer;
var brojOtkucaja;
var divRezultat = document.getElementById("rezultat");
var lblRezultat = document.getElementById("lblrezultat");

function proveriBroj(polje)
{
    if(tajmer!=null)
    {
        var broj_polja=parseInt(polje.innerHTML);
        var brojJeManji=false;

        for(var i=0;i<kliknutiBrojevi.length;i++)
        {
            if(broj_polja<kliknutiBrojevi[i])
            {
                brojJeManji=true;
            }
        }

        if(brojJeManji==true)
        {
            polje.style.backgroundColor="red";
            polje.style.color="white";
            krajIgre(-1);
        }
        else
        {
            kliknutiBrojevi.push(broj_polja);
            polje.style.backgroundColor="green";
            polje.style.color="white";
            if(kliknutiBrojevi.length==16)
            {
                krajIgre(1);
            }
        }
    }
}

function zapocniIgru()
{
    divRezultat.style.display="none";
    nizBrojeva=[];
    kliknutiBrojevi=[];
    formirajMatricu();
    popuniTabelu();
    sakrijDugme();
    resetujPolja();
    brojOtkucaja=10;
    lblTajmer.innerHTML=10;
    progressTajmer.style.width="0";
    tajmer = setInterval(odbrojavanje, 1000);
    prikaziTajmer();
}

function formirajMatricu()
{
    var brojPostoji;
    var randomBroj;

    while(nizBrojeva.length<16)
    {
        randomBroj = Math.floor(Math.random()*(17-1)+1);
        brojPostoji=false;
        for(var i=0;i<nizBrojeva.length;i++)
        {
            if(randomBroj==nizBrojeva[i])
            {
                brojPostoji=true;
                break;
            }
        }

        if(brojPostoji==false)
        {
            nizBrojeva.push(randomBroj);
        }
    }
}

function resetujPolja()
{
    for(var i=0;i<poljaTabele.length;i++)
    {
        poljaTabele[i].style.backgroundColor="white";
        poljaTabele[i].style.color="black";
    }
}

function popuniTabelu()
{
    for(var i=0;i<nizBrojeva.length;i++)
    {
        poljaTabele[i].innerHTML=nizBrojeva[i];
    }
}

function sakrijDugme()
{
    btnZapocni.style.display="none";
}

function prikaziDugme()
{
    btnZapocni.style.display="block";
}

function odbrojavanje()
{
    if(brojOtkucaja==0)
    {
        krajIgre(0);
    }
    brojOtkucaja--;
    lblTajmer.innerHTML = brojOtkucaja;
    var progress = ((10-brojOtkucaja)*10).toString()+"%";
    if((10-brojOtkucaja)<5)
    {
        progressTajmer.style.backgroundColor="green";
    }
    else if((10-brojOtkucaja)<8)
    {
        progressTajmer.style.backgroundColor="orange";
    }
    else
    {
        progressTajmer.style.backgroundColor="red";
    }
    progressTajmer.style.width=progress;
    
    
}

function prikaziTajmer()
{
    divTajmer.style.display="block";
}

function sakrijTajmer()
{
    divTajmer.style.display="none";
}

function krajIgre(scenario)
{
    clearInterval(tajmer);
    prikaziDugme();
    sakrijTajmer();

    if(scenario==0)
    {
        divRezultat.style.backgroundColor = "red";
        lblRezultat.innerHTML = "Isteklo vam je vreme. Izgubili ste."
    }
    else if(scenario==1)
    {
        divRezultat.style.backgroundColor = "green";
        lblRezultat.innerHTML = "Čestitamo! Pobedili ste!";
    }
    else
    {
        divRezultat.style.backgroundColor = "red";
        lblRezultat.innerHTML = "Niz nije rastući. Izgubili ste."

    }

    divRezultat.style.display="block";
    btnZapocni.innerHTML="Pokušaj ponovo";
    tajmer=null;
}