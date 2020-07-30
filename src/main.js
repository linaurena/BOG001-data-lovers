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

document.getElementById("bot").addEventListener("click",NewElement);
  


  // const difficult = datos.map((dato) => dato.lenght > 6);//
  //console.log(difficult);

//function classify () {
  //const tags = ['Tank', 'Mage', 'Assasin', 'Controller', 'Fighter', 'Slayer', 'Marksman'];
  //const roles = classify.length;
  //const mago= datos.filter(tags == 'Mage');
//}

  //const nombres = datos.map((dato) => dato.name); //map va dato por dato y ejecuta una función y lo pone en un arreglo nuevo//
  //console.log(nombres);
  
  //const difficult = datos.filter((dato) => dato.info.difficulty > 6);
  //console.log(difficult);

  /*
  const tags = ['Tank', 'Mage', 'Assasin', 'Controller', 'Fighter', 'Slayer', 'Marksman'];

  const result = datos.filter(tags == 'Mage');
*/
//console.log(classify);

/*
let role = ['Tank', 'Mage', 'Assasin', 'Controller', 'Fighter', 'Slayer', 'Marksman'];
role.sort();
console.log(role);

/*

newProductArray => []
{id: 1, tag = 'mage'}
{id: 2, tag = 'tank'}[]
newProductArray = productArray.filter((champion, tag) => tag => 1)
/*
  const role = newArray (7);

  fighter[0];
  tank [1];
  mage [2];
  support [3];
  assasin [4];
  specialist [5];
  controller [6];

   const role = datos.map((dato) => dato.role[0]);

/*
  const role = datos.filter((dato) => dato.tags[0]);
  console.log(role);
*/

  /*
  const difficult = datos.filter((dato) => dato.info.difficulty > 6);
  console.log(difficult);
*/

  
  //1. //Aplicar Filtro//