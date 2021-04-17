var url = "";

function Woof() {
    fetch("https://dog.ceo/api/breeds/image/random", { method: 'get' })
        .then(function (response) {
            response.json().then(function (resJson) {
                url = resJson.message;
                document.getElementById('dog').src = url;
                document.getElementById('dogCaption').innerText = GetBreedTextFromURL();
                document.getElementById('dogCaption').focus();
            });
        }).catch(function (error) {
            // Error :(
            console.log(error);
        });
}
function GetBreedTextFromURL() {
    let urlParts = url.split('/');
    let breed = urlParts[urlParts.indexOf('breeds')+1];
    if (breed.includes('-')) {
        let breedParts = breed.split('-');
        breedParts = breedParts.reverse();
        let testPart = breedParts[0];
        switch (testPart) {
            case 'shepherd':
                breedParts = breedParts.reverse();
                break;
            case 'lapphund':
                breedParts = breedParts.reverse();
                break;
        }
        breed = breedParts.join(' ');
    }
    if (breed === 'germanshepherd') { breed = 'german shepherd'; }
    if (breed === 'stbernard') { breed = 'st. bernard'; }

    return "It's a" + (['a','e','i','o','u'].includes(breed[0]) ? "n " : " ") + breed + "!";
}
Woof();