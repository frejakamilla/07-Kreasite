// Variabler
const url = "https://kreahobby-0fd9.restdb.io/rest/kreahobby";

// Det hemmelige kodeord
const options = {
  headers: {
    "x-apikey": "63ecb0af478852088da682ed",
  },
};

// fetch - Hente data
async function hentData() {
  const resultat = await fetch(url, options);
  const json = await resultat.json();
  visData(json);

  json.forEach(visHobby);
}

hentData();

// visdata
function visData(jsonFilData) {
  jsonFilData.forEach((hobby) => {
    // console.log(hobby);
    if (hobby.kategori.includes("Stof")) {
      console.log(hobby);
    }
  });
}
// -------------------------------------------------------------------------------------

console.log("produktliste.js");
//https://kea-alt-del.dk/t7/api/products

const urlParams = new URLSearchParams(window.location.search);
const kat = urlParams.get("kat");

document.querySelector(".breadcrumb hobby-kategori").textContent = kat;
document.querySelector(".hobby-card h4").textContent = kat;

function visHobby(hobby) {
  console.log(hobby);
  //4. fange vores template
  const template = document.querySelector("#hobby-card-template").content;
  //5. clone
  const klon = template.cloneNode(true);
  //6. skifte data
  klon.querySelector("a").href = "hobby.html?id=" + hobby._id;

  klon.querySelector("h2").textContent = hobby.navn;
  klon.querySelector("img").src = "assets/" + hobby.billede;

  //7. appende
  document.querySelector(".card-grid").appendChild(klon);
}
