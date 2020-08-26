var body = document.getElementsByTagName("body")[0];
var divPrikazGlavni = document.getElementById("prikazSlika");
var imgPrikazanaSlika = document.getElementById("prikazanaSlika");
var imgTagovi = document.getElementsByTagName("img");
var nizSlika=[];
var indeksTrenutneSlike;
var primenjeniFilteri = [];

for(var i=0;i<imgTagovi.length-1;i++)
{
    var novi_src = imgTagovi[i].src;
    nizSlika.push(novi_src);
}

function prikaziSliku(izabranaSlika)
{
    if(body.clientWidth>768)
    {
        divPrikazGlavni.style.display="block";
        imgPrikazanaSlika.src=izabranaSlika.src;
        for(var i=0;i<nizSlika.length;i++)
        {
            if(izabranaSlika.src==nizSlika[i])
            {
                indeksTrenutneSlike=i;
            }
        }
    }
    
}

function ugasiPrikaz()
{
    divPrikazGlavni.style.display="none";
}

function sledecaSlika()
{
    indeksTrenutneSlike++;
    
    if(indeksTrenutneSlike==nizSlika.length)
    {
        indeksTrenutneSlike=0;
    }

    imgPrikazanaSlika.src=nizSlika[indeksTrenutneSlike];
}

function prethodnaSlika()
{
    indeksTrenutneSlike--;
    
    if(indeksTrenutneSlike==-1)
    {
        indeksTrenutneSlike=nizSlika.length-1;
    }

    imgPrikazanaSlika.src=nizSlika[indeksTrenutneSlike];
}

function filter(izabraniFilter)
{
    nizSlika=[];
    var filterPrimenjen = false;
    var indeksFiltera;
    for(var i=0; i<primenjeniFilteri.length;i++)
    {
        if(primenjeniFilteri[i]==izabraniFilter.innerHTML)
        {
            filterPrimenjen = true;
            indeksFiltera = i;
        }
    }

    if(filterPrimenjen==true)
    {
        primenjeniFilteri.splice(indeksFiltera,1);
        izabraniFilter.style.border="1px solid white";
        izabraniFilter.style.color="white";
    }
    else
    {
        primenjeniFilteri.push(izabraniFilter.innerHTML);
        izabraniFilter.style.border="1px solid rgb(89, 137, 226)";
        izabraniFilter.style.color="rgb(89, 137, 226)";
    }

    if(primenjeniFilteri.length==0)
    {
        for(var i=0;i<imgTagovi.length-1;i++)
        {
            imgTagovi[i].parentElement.parentElement.style.display="block";
            nizSlika.push(imgTagovi[i].src);
        }
    }
    else
    {
        for(var i=0;i<imgTagovi.length-1;i++)
        {
            var pripadaFilteru=false;

            for(var j=0;j<primenjeniFilteri.length;j++)
            {
                if(imgTagovi[i].alt==primenjeniFilteri[j])
                {
                    pripadaFilteru=true;
                }
            }

            if(pripadaFilteru==false)
            {
                imgTagovi[i].parentElement.parentElement.style.display="none";
            }
            else
            {
                imgTagovi[i].parentElement.parentElement.style.display="block";
                nizSlika.push(imgTagovi[i].src);
            }
        }
    }

    
}