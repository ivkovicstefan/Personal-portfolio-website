var frmIme = document.getElementById("frmIme");
var frmPrezime = document.getElementById("frmPrezime");
var frmEmail = document.getElementById("frmEmail");
var frmPassword = document.getElementById("frmPassword");
var frmPassword2 = document.getElementById("frmPasswordAgain");
var frmNaslovPoruke = document.getElementById("frmEmailSubject");
var frmSadrzajPoruke = document.getElementById("PorukaEmail");

function unajmiMe(izvor)
{
    var opcija=izvor.parentElement.parentElement.getElementsByTagName("div")[0].getElementsByTagName("h1")[0].innerHTML;
    localStorage.setItem("trazenaUsluga",opcija);
}

function pronadjiUslugu()
{
    var usluga = localStorage.getItem("trazenaUsluga");
    if(usluga!=null)
    {
        frmNaslovPoruke.value=usluga;
        frmNaslovPoruke.style.borderBottom = "2px solid rgb(168, 0, 168)"
        frmNaslovPoruke.style.color = "rgb(168, 0, 168)";
    }
    localStorage.removeItem("trazenaUsluga");
}

function posaljiPoruku()
{
    if(validacija()==true)
    {
        window.open('mailto:ivkovics@outlook.com?subject='+frmNaslovPoruke.value+'&body='+frmSadrzajPoruke.value);
    }
}

function validacija()
{
    var unosJeValidan=true;

    var regExpr = new RegExp("^[A-Z]{1}[a-z,',A-Z]{1,}$");

    if(frmIme.value.match(regExpr)==null)
    {
        unosJeValidan=false;
        frmIme.classList.add("input-invalid");
        frmIme.value="";
        frmIme.classList.add("ph-red");
        frmIme.placeholder="Ime mora početi velikim slovom i biti minimum 2 slova dužine.";
    }
    else
    {
        frmIme.classList.remove("input-invalid");
        frmIme.classList.remove("ph-red");
    }

    if(frmPrezime.value.match(regExpr)==null)
    {
        unosJeValidan=false;
        frmPrezime.classList.add("input-invalid");
        frmPrezime.value="";
        frmPrezime.classList.add("ph-red");
        frmPrezime.placeholder="Prezime mora početi velikim slovom i biti minimum 2 slova dužine.";
    }
    else
    {
        frmPrezime.classList.remove("input-invalid");
        frmPrezime.classList.remove("ph-red");

    }

    regExpr = new RegExp("^[a-z,0-9]{1,}[@][a-z]{1,}[.][a-z.]{1,}[a-z]$");

    if(frmEmail.value.match(regExpr)==null)
    {
        unosJeValidan=false;
        frmEmail.classList.add("input-invalid");
        frmEmail.value="";
        frmEmail.classList.add("ph-red");
        frmEmail.placeholder="Unesite validnu email adresu";
    }
    else
    {
        frmEmail.classList.remove("input-invalid");
        frmEmail.classList.remove("ph-red");
    }

    regExpr = new RegExp(".{8,}");

    if(frmPassword.value.match(regExpr)==null)
    {
        unosJeValidan=false;
        frmPassword.classList.add("input-invalid");
        frmPassword.value="";
        frmPassword.classList.add("ph-red");
        frmPassword.placeholder="Lozinka mora da ima minimum 8 karaktera";
    }
    else
    {
        frmPassword.classList.remove("input-invalid");
        frmPassword.classList.remove("ph-red");
    }

    if(frmPassword2.value!=frmPassword.value)
    {
        unosJeValidan=false;
        frmPassword2.classList.add("input-invalid");
        frmPassword2.value="";
        frmPassword2.classList.add("ph-red");
        frmPassword2.placeholder="Lozinke se ne poklapaju";
    }
    else
    {
        frmPassword2.classList.remove("input-invalid");
        frmPassword2.classList.remove("ph-red");
    }

    regExpr = new RegExp(".{1,}");

    if(frmNaslovPoruke.value.match(regExpr)==null)
    {
        unosJeValidan=false;
        frmNaslovPoruke.classList.add("input-invalid");
        frmNaslovPoruke.value="";
        frmNaslovPoruke.classList.add("ph-red");
        frmNaslovPoruke.placeholder="Polje ne sme biti prazno";
    }
    else
    {
        frmNaslovPoruke.classList.remove("input-invalid");
        frmNaslovPoruke.classList.remove("ph-red");
    }

    return unosJeValidan;
}