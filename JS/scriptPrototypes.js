var okvir = document.getElementById("okvir");
var liMusic = document.getElementById("music");
var liGame = document.getElementById("game");
var liSort = document.getElementById("sort");

function promeniPrototip(izbor)
{
    if(izbor.innerHTML=="Igrica")
    {
        okvir.src="../EMBED SKI/HTML/game10s.html";
        _resetujBG();
        izbor.classList.add("aktivan");
    }
    else if(izbor.innerHTML == "Music Player")
    {
        okvir.src="../EMBED SKI/HTML/music.html"
        _resetujBG();
        izbor.classList.add("aktivan");
    }
    else if(izbor.innerHTML == "Sortiranje tabele")
    {
        okvir.src="../EMBED SKI/HTML/sort.html";
        _resetujBG();
        izbor.classList.add("aktivan");
    }
}

function _resetujBG()
{
    liGame.classList.remove("aktivan");
    liMusic.classList.remove("aktivan");
    liSort.classList.remove("aktivan");
}