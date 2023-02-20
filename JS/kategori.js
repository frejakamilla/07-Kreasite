console.log("Vi er i produktlisten");

const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get("kat");
const url = `https://kreahobby-0fd9.restdb.io/rest/kreahobby?kategori=${kat}`;

document.querySelector("h2").textContent = kat;
