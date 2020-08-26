var playPause = document.getElementById("playpause");
var forward = document.getElementById("forward");
var audioPlayer = document.getElementById("mp3player");
var duzinaPesme;
var pVreme = document.getElementById("vreme");
var pTrenutnoSePusta = document.getElementById("trenutnoSePusta");
var brojOtkucanihSekundi = 0;
var timer = setInterval(otkucavanje,1000);
var x_osa;
var listaPesama=document.getElementsByTagName("input");
var playerPesma=document.getElementById("playerPesma");
var trenutnaPesma = 0;
var pesmeInfo=document.getElementsByTagName("td");

function pauzirajIliPusti()
{
    if(audioPlayer.paused==false)
    {
        forward.style.opacity="0.7";
        audioPlayer.pause();
        playPause.style.backgroundImage = "url(../IMG/play.png)";
    }
    else
    {
        forward.style.opacity="1";
        pTrenutnoSePusta.innerHTML = pesmeInfo[trenutnaPesma*2].outerText + " - " + pesmeInfo[trenutnaPesma*2+1].outerText;
        audioPlayer.play();
        playPause.style.backgroundImage = "url(../IMG/pause.png)";
        duzinaPesme = audioPlayer.duration;
        duzinaPesme = formatirajVreme(duzinaPesme);
        prikaziProtekloVreme(brojOtkucanihSekundi);

    }
}

function formatirajVreme(sekunde)
{
    var min = Math.floor(sekunde/60);
    var sec = Math.floor(sekunde - min*60);
    var rezultat = min+":"+('0'+sec).slice(-2);
    return rezultat;
}

function prikaziProtekloVreme(trenutnoVreme)
{
    pVreme.innerHTML = formatirajVreme(trenutnoVreme)+" / "+duzinaPesme;
}

function otkucavanje()
{
    if(brojOtkucanihSekundi>=Math.floor(audioPlayer.duration))
    {
        zavrsiPesmu();
    }
    if(audioPlayer.paused==false)
    {
        brojOtkucanihSekundi++;
        prikaziProtekloVreme(brojOtkucanihSekundi);
        x_osa=(brojOtkucanihSekundi*99)/audioPlayer.duration;
        document.getElementById("krug").style.left=x_osa+"%";
        document.getElementById("progress").style.width=(x_osa+0.5)+"%";
        
    }
}

function premotajPesmu()
{
    if(audioPlayer.paused==false)
    {
        audioPlayer.currentTime +=10;
        brojOtkucanihSekundi = Math.floor(audioPlayer.currentTime);
        prikaziProtekloVreme(brojOtkucanihSekundi);
        x_osa=(brojOtkucanihSekundi*99)/audioPlayer.duration;
        document.getElementById("krug").style.left=x_osa+"%";
        document.getElementById("progress").style.width=(x_osa+0.5)+"%";
    }
}

function zavrsiPesmu()
{
    playPause.style.backgroundImage = "url(../IMG/play.png)";
    prikaziProtekloVreme(audioPlayer.currentTime);
    brojOtkucanihSekundi=0;
    //audioPlayer.pause();
    forward.style.opacity="0.7";
    sledecaPesma();
}

function ucitajPrvuPesmu()
{
    playerPesma.src = listaPesama[trenutnaPesma].value;
    audioPlayer.load();
}

function pustiPesmu(izbor)
{
    imePesme=izbor.childNodes[1].outerText;
    audioPlayer.pause();
    
    for(var i=0;i<listaPesama.length;i++)
    {
        if(imePesme==listaPesama[i].name)
        {
            playerPesma.src=listaPesama[i].value;
            trenutnaPesma = i;
        }
    }

    pTrenutnoSePusta.innerHTML = pesmeInfo[trenutnaPesma*2].outerText + " - " + pesmeInfo[trenutnaPesma*2+1].outerText;

    audioPlayer.load();
    pVreme.innerHTML="0:00 / 0:00";
    brojOtkucanihSekundi=0;
    audioPlayer.play();
    forward.style.opacity="1";
    playPause.style.backgroundImage = "url(../IMG/pause.png)";
}

function sledecaPesma()
{
    trenutnaPesma++;
    if(trenutnaPesma==listaPesama.length)
    {
        trenutnaPesma=0;
    }
    pTrenutnoSePusta.innerHTML = pesmeInfo[trenutnaPesma*2].outerText + " - " + pesmeInfo[trenutnaPesma*2+1].outerText;
    playerPesma.src=listaPesama[trenutnaPesma].value;
    audioPlayer.load();
    pVreme.innerHTML="0:00 / 0:00";
    brojOtkucanihSekundi=0;
    audioPlayer.play();
    forward.style.opacity="1";
    playPause.style.backgroundImage = "url(../IMG/pause.png)";

}

audioPlayer.addEventListener("loadeddata", function() {
    duzinaPesme=audioPlayer.duration;
    duzinaPesme = formatirajVreme(duzinaPesme);
    prikaziProtekloVreme(brojOtkucanihSekundi);
   });