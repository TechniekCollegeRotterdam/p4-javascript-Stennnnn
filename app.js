//variabelen ophalen en sommige undefined houden.
let namePerson;
let country;
let p = document.getElementById("output");
let nameId = document.getElementById("nameChange");
let countryId = document.getElementById("countryChange");

nameId.addEventListener("change", nameChanged());
countryId.addEventListener("change", countryChange());

const nameChanged = function(){
    namePerson = nameId;
    changeInpu();
}
const countryChange = function(){
    country = countryId;
    changeInpu();
}
const changeInpu = function(){
    const text = `mijn naam is ${namePerson} en ik kom uit ${country}`;
    p.textContent = text;
}