function userCheck() {
    //Tarkistaa käyttäjä ID:een (user ID)
    let id = document.getElementById("idk").value;
    idlength = id.length;
    const note = document.querySelector('#idnote');

    if (idlength < 6){
        note.innerHTML = "Minimi 6 merkkiä.";
        return false
    }

    note.innerHTML = "Ok!";
    return true
}

function passwordCheck() {
    //Tarkastaa salasanan (password)
    let pw = document.getElementById("password").value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
    const note = document.querySelector('#pwnote');

    if(!pw.match(regex)) {
        note.innerHTML = "Salasanassa: 6 merkkiä, 1 numero, 1 isokirjain ja 1 erikoismerkki(!@£$€&%#).";
        return false
    }

    note.innerHTML = "Ok!";
    return true
}

function nameCheck() {
    //Tarkistaa nimen (name)
    let name = document.getElementById("name").value;
    name = name.length
    const note = document.querySelector('#namenote');


    if (name < 1){
        note.innerHTML = "Nimi ei voi olla tyhjä.";
        return false
    }

    note.innerHTML = "Ok!";
    return true
}

function addressCheck() {
    //Tarkistaa osoitteen (address)
    let address = document.getElementById("address").value;
    address = address.length
    const note = document.querySelector('#addressnote');
    
    if (address < 1){
        note.innerHTML = "Osoite ei voi olla tyhjä.";
        return false
    }

    note.innerHTML = "Ok!";
    return true
}

function zipcodeCheck() {
    //Tarkistaa postinumeron (zipcode)
    let zip = document.getElementById("zipcode").value;
    const regex = /^(?=(\D*\d){5}\D*$)/
    const note = document.querySelector('#zipcodenote');

    if (!zip.match(regex)){
        note.innerHTML = "Postinumerossa oltava 5 numeroa";
        return false
    }

    note.innerHTML = "Ok!";
    return true
}

function emailCheck() {
    //Tarkastaa sähköpostin (email)
    let email = document.getElementById("email").value;
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    const note = document.querySelector('#emailnote');

    if(!email.match(regex)) {
        note.innerHTML = "Virheellinen sähköposti";
        return false
    }

    note.innerHTML = "Ok!";
    return true
}

function countryCheck() {
    //Tarkastaa maan (country)
    let country = document.getElementById("country").value;
    const note = document.querySelector('#countrynote');

    if(country === "null") {
        note.innerHTML = "Valitse maa.";
        return false
    }

    note.innerHTML = "Ok!";
    return true
}

function genderCheck() {
    //Tarkastaa sukupuolen (gender)
    const note = document.querySelector('#gendernote');
    if(!document.getElementById('male').checked && !document.getElementById('female').checked){
        note.innerHTML = "Valitse sukupuoli.";
        return false
    }

    note.innerHTML = "Ok!"
    return true
}

function langCheck() {
    //Tarkastaa kielen (language)
    const note = document.querySelector('#langnote');
    if(!document.getElementById('suomi').checked && !document.getElementById('muuks').checked){
        note.innerHTML = "Valitse kieli.";
        return false
    }

    note.innerHTML = "Ok!"
    return true
}

function testAll () {
    //Tarkastaa koko lomakkeen (entire form)
    const note = document.querySelector('#sendnote');
    let ok = true

    switch(false){
        case userCheck():
            ok = false 
        case passwordCheck():
            ok = false
        case nameCheck():
            ok = false
        case addressCheck():
            ok = false
        case countryCheck():
            ok = false
        case zipcodeCheck():
            ok = false
        case emailCheck():
            ok = false
        case genderCheck():
            ok = false
        case langCheck():
            ok = false
    }

    if (ok === false){
        document.querySelector('#sendnote')
        note.innerHTML = "Täytä kaikki tähdellä(*) merkityt kohdat."
        return false
    }
    note.innerHTML = "Kiitos!"
}