import data from "./data/lol/lol.js";
const datos = Object.values(data.data);
let championsDiv = document.getElementById("root");


for (const champion of datos) {
    root.innerHTML += `
    <div>
      <h3>${champion.name}</h3>
      <img class = 'imgchampion' src = '${champion.splash}' />
    </div>
    `
  }
