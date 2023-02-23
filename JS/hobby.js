const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const kat = urlParams.get("kat");
const url = `https://kreahobby-0fd9.restdb.io/rest/kreahobby/${id}`;
// const url = `https://omhyggeligt-4c12.restdb.io/rest/ny-database/${id}`;

document.querySelector(".breadcrumb .bread-kategori").textContent = kat;

console.log("visHobbySingleview");

// Det hemmelige kodeord
const options = {
  headers: {
    "x-apikey": "63ecb0af478852088da682ed",
  },
  // headers: {
  //   "x-apikey": "63f6152e478852088da68558",
  // },
};

// fetch - Hente data
async function hentData() {
  const resultat = await fetch(url, options);
  const json = await resultat.json();
  vis(json);
}

hentData();

// visdata
function vis(hobby) {
  console.log("hobby");
  document.querySelector(".breadcrumb .bread-hobby").textContent = hobby.navn;
  document.querySelector(".billedeurl img").src = "assets/" + hobby.billede;
  document.querySelector(".text h2").textContent = hobby.navn;
  document.querySelector(".text p").textContent = hobby.beskrivelse;
  document.querySelector("#form-container").innerHTML = hobby.redskaber;
}
