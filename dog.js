var url = "";
var id = null;

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
    if (breed === 'mexicanhairless') { breed = 'mexican hairless'; }

    return "It's a" + (['a','e','i','o','u'].includes(breed[0]) ? "n " : " ") + breed + "!";
}
function ClickFetchButton() {
    Woof();
    AnimateFetchButton();
    const rand = Math.random();
	const x = Math.random();
	const y = Math.random();
    if (rand > 0.95) {
      confetti({
        particleCount: 3000*x,
        spread: 90,
        startVelocity: 100,
        origin: {x, y}
      });
    }
}
function AnimateFetchButton() {
    var btn = document.getElementById('fetchButton');
    var initBgColor = btn.style.backgroundColor;
    clearInterval(id);
    id = setInterval(frame, 1);
    var i = 0;
    function frame() {
        if (i == 360) {
            btn.style.backgroundColor = initBgColor;
            clearInterval(id);
        } else {
            i++;
            btn.style.backgroundColor = `hsl(${i}, 65%, 40%)`;
        }
    }
}
Woof();
