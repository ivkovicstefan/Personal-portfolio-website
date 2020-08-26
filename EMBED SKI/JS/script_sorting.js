var tabela = document.getElementById("tbl-sortiranje");
var smer_sortiranja=1;
var poslednjaSortirana;

function sortiraj(kolona)
{
    var redovi = tabela.rows;

    if(poslednjaSortirana==kolona)
    {
        if(smer_sortiranja==1)
        {
            smer_sortiranja=0;
        }
        else
        {
            smer_sortiranja=1;
        }
    }

    for(var i=1;i<redovi.length;i++)
    {
        for(var j=1;j<redovi.length-1;j++)
        {
            if(smer_sortiranja==1)
            {
                if(redovi[j].getElementsByTagName("td")[kolona].innerHTML.toLowerCase()>redovi[j+1].getElementsByTagName("td")[kolona].innerHTML.toLowerCase())
                {
                    redovi[j].parentNode.insertBefore(redovi[j+1],redovi[j]);
                }
            }
            else
            {
                if(redovi[j].getElementsByTagName("td")[kolona].innerHTML.toLowerCase()<redovi[j+1].getElementsByTagName("td")[kolona].innerHTML.toLowerCase())
                {
                    redovi[j].parentNode.insertBefore(redovi[j+1],redovi[j]);
                }
            }            
        }
    }

    poslednjaSortirana=kolona;
    
}
