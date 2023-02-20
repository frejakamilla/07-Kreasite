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
