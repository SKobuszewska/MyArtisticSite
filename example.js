
    
const nowinki = document.getElementById('newsy');
nowinki.onmouseover = function() {
    alert("..."); }; 
nowinki.onclick = alert("nowości");
nowinki.onclick = function () {
    alert("Oto one");
    };

const nowinki2 = document.getElementById('nowosci');
nowinki2.onmouseover = function () {
    alert("Przeczytaj uważnie");
};


function zmienKolor() {

    this.style.color = "red";
}

function zmienKolor2() {

    this.style.color = "black";
}


pierwszynews.onmouseover = zmienKolor;


function zwieksz() {
    pierwszynews.setAttribute('class', 'powiekszenie');
    pierwszynews.style.color = "blue";
};

function zmniejsz() {

    pierwszynews.setAttribute('class', 'pomniejszenie');
    this.style.fontSize = '10px';
};

const plusuj = document.getElementById('plusuje');
const minusuj = document.getElementById('minusuje');

plusuj.onclick = zwieksz;

minusuj.onclick = zmniejsz;


function powiekszCzcionke() 
{

    var fontSize = parseInt(window.getComputedStyle(this).fontSize);
    this.style.fontSize = (++fontSize) + "px";

};


window.onload = function() 
{
    var pierwszynews2 = document.getElementById('nagroda');
    var stop = document.getElementById('stop');

    pierwszynews2.addEventListener("mouseover", powiekszCzcionke);
    pierwszynews2.addEventListener("mouseover", zmienKolor);
    pierwszynews2.addEventListener("mouseout", zmniejsz);

    stop.addEventListener("mouseover", function()
    {
        pierwszynews2.removeEventListener("mouseover", powiekszCzcionke);
    })
};


