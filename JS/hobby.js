console.log("hobby.js");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// Variabler
const url = `https://kreahobby-0fd9.restdb.io/rest/kreahobby`;

// Det hemmelige kodeord
const options = {
  headers: {
    "x-apikey": "63ecb0af478852088da682ed",
  },
};

async function hentData() {
  const resspons = await fetch(url, options);
  const json = await resspons.json();
  vis(json);
}

function vis(json) {
  console.log(json);
  json.forEach((hobby) => {
    querySelector(".billedeurl").src = "assets/" + hobby.billede;
    querySelector(".text h2").textContent = hobby.navn;
    querySelector(".text p").textContent = hobby.beskrivelse;
  });
}

hentData();

// hentData();
// // Hent data
// async function hentData() {
//   const resultat = await fetch(url, options);
//   const json = await resultat.json();
//   console.log(data);
//   visData(json);
// }
// const main = document.querySelector("main");

// // visdata
// function visData(jsonFilData) {
//   jsonFilData.forEach((hobby) => {
//     // console.log(hobby);
//     if (hobby.kategori.includes("Stof")) {
//       console.log(hobby);
//     }
//   });

//   const klone = main.cloneNode(true);
//   klone.querySelector(".form-control").innerHTML = redskaber.redskaber;

//   // document.querySelector(
//   //   ".img_container img"
//   // ).src = `https://kreahobby-0fd9.restdb.io/rest/kreahobby/billede/${id}`;
//   document.querySelector(".text h2").textContent = jsonFilData.navn;
//   document.querySelector(".text p").textContent = jsonFilData.beskrivelse;
// }
