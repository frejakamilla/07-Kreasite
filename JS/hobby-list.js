console.log("vi er i hobby-list.html");

const urlParams = new URLSearchParams(window.location.search);
const kat = urlParams.get("kat");
const url = `https://omhyggeligt-4c12.restdb.io/rest/ny-database?kategori=${kat}`;

// vælg overskrifter og brødkrummesti

const options = {
  headers: {
    "x-apikey": "63f6152e478852088da68558",
  },
};

async function hentData() {
  console.log(hentData);
  const response = await fetch(url, options);
  const data = await response.json();

  data.forEach(visHobby);
}

hentData();

function visHobby(hobby) {
  console.log(hobby);
  const template = document.querySelector("#hobby-card-template").content;
  const klon = template.cloneNode(true);
  //6. skifte data
  document.querySelector(".breadcrumb .bread-kategori").textContent = hobby.Kategori;

  klon.querySelector("a").href = "hobby.html?id=" + hobby._id;

  klon.querySelector("h2").textContent = hobby.navn;
  klon.querySelector("img").src = "assets/" + hobby.billede;
  klon.querySelector("h4").textContent = hobby.kategori;

  //7. appende
  document.querySelector(".card-grid").appendChild(klon);
}
