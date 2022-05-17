//variabelen ophalen en sommige undefined houden.
let namePerson;
let country;
let p = document.getElementById("output");
//stop de name van html in namePerson variabel en voer de function changeInput uit.
const nameChanged = function(event){
    //het event console loggen
    namePerson = event.target.value;
    changeInput(event);
}
//sla de input op in de variabel en voer de changeInput function uit.
const countryChange = function(event) {
    country = event.target.value;
    changeInput(event);
}
// pak de p element en stop de p variabel erin.
const changeInput = function(){
    const text = `Je heet ${namePerson} en je komt uit ${country}`;
    p.textContent = text;
}