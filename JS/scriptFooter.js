var poseceniLinkovi = [];
var hrefNiz = [];
var brojPoseta = [];
var ulPopLinkovi = document.getElementById("ulPopularniLinkovi");
var brojPrikazanihLinkova=0;

function ucitajPodatke()
{
    poseceniLinkovi = JSON.parse(localStorage.getItem("popLinkovi"));
    brojPoseta = JSON.parse(localStorage.getItem("brPoseta"));
    hrefNiz = JSON.parse(localStorage.getItem("hrefovi"));

    if(poseceniLinkovi==null)
    {
        poseceniLinkovi = [];
        brojPoseta = [];
        hrefNiz = [];
    }

    for(var i=0;i<poseceniLinkovi.length;i++)
    {
        if(i==3)
        {
            break;
        }
        brojPrikazanihLinkova++;
        noviTag(poseceniLinkovi[i],brojPrikazanihLinkova, hrefNiz[i]);
        
    }
}

function dodajPosetu(poseceniLink)
{
    var linkVecPosecen=false;
    var indeksLinka;

    for(var i=0;i<poseceniLinkovi.length;i++)
    {
        if(poseceniLink.innerHTML == poseceniLinkovi[i])
        {
            linkVecPosecen=true;
            indeksLinka=i;
        }
    }

    if(linkVecPosecen==false)
    {
        poseceniLinkovi.push(poseceniLink.innerHTML);
        hrefNiz.push(poseceniLink.href);
        brojPoseta.push(1);
        if(ulPopLinkovi.childNodes.length<4)
        {
            brojPrikazanihLinkova++;
            noviTag(poseceniLink.innerHTML,brojPrikazanihLinkova, poseceniLink.href);
        }
    }
    else
    {
        brojPoseta[indeksLinka]++;
    }

    console.log(poseceniLinkovi);
    console.log(brojPoseta);

    sortirajLinkove();

}

function sortirajLinkove()
{
    for(var i=0;i<poseceniLinkovi.length;i++)
    {
        for(var j=0;j<poseceniLinkovi.length-1;j++)
        {
            if(brojPoseta[j]<brojPoseta[j+1])
            {
                var tmp;
                tmp=brojPoseta[j];
                brojPoseta[j]=brojPoseta[j+1];
                brojPoseta[j+1]=tmp;
                tmp=poseceniLinkovi[j];
                poseceniLinkovi[j]=poseceniLinkovi[j+1];
                poseceniLinkovi[j+1]=tmp;
                tmp=hrefNiz[j];
                hrefNiz[j]=hrefNiz[j+1];
                hrefNiz[j+1]=tmp;
            }
        }
    }

    localStorage.setItem("popLinkovi", JSON.stringify(poseceniLinkovi));
    localStorage.setItem("brPoseta", JSON.stringify(brojPoseta));
    localStorage.setItem("hrefovi", JSON.stringify(hrefNiz));

    for(var i=0;i<poseceniLinkovi.length;i++)
    {
        var _id = "pl"+(i+1);
        
        if(i==3)
        {
            break;
        }

        document.getElementById(_id).innerHTML=poseceniLinkovi[i];
        document.getElementById(_id).href=hrefNiz[i];

    }
}

function noviTag(imeLinka,id,_href)
{
    var noviLiTag = document.createElement("li");
    var noviLinkTag = document.createElement("a");
    noviLinkTag.id="pl"+id;
    noviLinkTag.innerHTML = imeLinka;
    noviLinkTag.href=_href;
    noviLinkTag.setAttribute('onclick','dodajPosetu(this);')
    noviLiTag.appendChild(noviLinkTag);
    document.getElementById("ulPopularniLinkovi").appendChild(noviLiTag);
}

function obrisiMemoriju()
{
    localStorage.clear();
}