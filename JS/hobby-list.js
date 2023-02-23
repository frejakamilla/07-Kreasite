console.log("vi er i hobby-list.html");

const urlParams = new URLSearchParams(window.location.search);
const kat = urlParams.get("kat");
const url = `https://kreahobby-0fd9.restdb.io/rest/kreahobby`;
// const url = `https://omhyggeligt-4c12.restdb.io/rest/ny-database`;

// vælg overskrifter og brødkrummesti
document.querySelector(".breadcrumb .bread-kategori").textContent = kat;

const options = {
  headers: {
    "x-apikey": "63ecb0af478852088da682ed",
  },
  // headers: {
  //   "x-apikey": "63f6152e478852088da68558",
  // },
};

async function hentData() {
  console.log("hentData");
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
  data.forEach(visHobby);
}

hentData();

function visHobby(hobby) {
  if (hobby.kategori == kat) {
    console.log("hobby");
    const template = document.querySelector("#hobby-card-template").content;
    const klon = template.cloneNode(true);
    //6. skifte data

    klon.querySelector("#card-link").href = "hobby.html?id=" + hobby._id + "&kat=" + hobby.kategori;

    klon.querySelector("h2").textContent = hobby.navn;
    klon.querySelector("img").src = "assets/" + hobby.billede;
    klon.querySelector("h4").textContent = hobby.kategori;

    //7. appende
    document.querySelector(".card-grid").appendChild(klon);
  }
}
