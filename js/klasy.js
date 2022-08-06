
/*let osoba = (
    imie: "Ten",
    nazwisko: "Drugi",
    poziomslodkości: "dużo powyżej normy",
    pobierzInformacje: function() 
    {
        return this.imie + " " + this.nazwisko;
    },

    toString: function() {
        return this.imie + " " + this.nazwisko;
    }
);
*/

var div = document.getElementById('test');
div.innerHTML = "nowa treść";

var osoba = new Object({
imie: "Ten",
nazwisko: "Drugi",
pobierzInformacje: function () {
    return this.imie + " " + this.nazwisko;
},
toString: function() {

    return this.imie + " " + this.nazwisko;
}

});


div.innerHTML = osoba;
osoba.imie = "Wiola";

const x = new osoba('Króliś', 'Kinderkowy');
div.innerHTML = x;

/*function osoba(imie, nazwisko) {
    this.name = imie;
    this.surname = nazwisko;
    this.toString = function() {
        return this.imie + " " + this.nazwisko;
    };
}
*/

//dziedziczenie, agregacja, kompozycja
