const myListDiv = document.getElementById("list");
const myBooleans = [
    true,
    false,
    true,
    false,
    false,
    true,

];

function myName(name) {
    const h1 = document.createElement("h1");
    h1.innerText = name;
    h1.className = "name";
    myListDiv.appendChild(h1);
}

const trueFalse = myBooleans.map(bool => !bool )

trueFalse.forEach( number=> console.log(number));
