import data from "./data/lol/lol.js";
//Para importar múltiples miembros de un módulo se utiliza , dentro de {}
import {filterData, allData, organize, nameChamp} from "./data.js"
const datos = Object.values(data.data);
//console.log(datos)
const root = document.getElementById("root"); //Default
//console.log(root)


// Creamos una función para que se ejecute la data tan pronto se carguen todos los elementos de la data

const getData = (data) => {
  const view = data
    .map(
      (champion) => `
        <div id= "${champion.name}" class="cardChampion" data-name="${champion.name}" data-title="${champion.title}" data-splash="${champion.splash}">
          <h3 class="name-root">${champion.name}</h3>
          <img class = 'imgchampion' src = '${champion.splash}' />
        </div>
      `
    )
    .join("");
  root.innerHTML = view;
}

// Filtro rol - Mobile (falta esconder el popup para ver mejor los cambios)

const filterRole = () =>{
  let cath = allData();
  let subcath = event.target.childNodes[0].data;
  let callCath = filterData(Object.values(cath), subcath);
  getData(callCath);
/*
  overlayFilter.classList.add("hide");
  popupFilter.classList.add("hide");
  overlayFilterRole.classList.add("hide");
  popupFilterRole.classList.add("hide");
*/
}

// Esto se ejecuta luego de finalizar el renderizado

window.onload = function () {
  getData(datos);
  showModal();  //Esta función no necesita parámetros
  //printModal();
  let roleList = document.querySelectorAll('.btn-select-role');
  for (const roleItem of roleList){
    roleItem.addEventListener('click', filterRole);
  };
};

// Función para ver modales de campeones

function showModal (){
  const cardChampions = document.getElementsByClassName('cardChampion');
  //console.log(cardChampions)
  //cardModal.addEventListener('click', (e) => {

  //let sizeCard = cardChampions.length      (Conocer la longitud del array)
  //console.log(sizeCard)

  for (const cardChampion of cardChampions){
    //console.log(cardChampion)
    cardChampion.addEventListener('click', showingModal);
  }
  }

// Función para que tome los datos del root

function showingModal (event){
   let idChamp = event.currentTarget.id
   //console.log(idChamp)
   let infoChamp = data.data[idChamp]
  // console.log(infoChamp)
   const modal = document.getElementById("modal");
  modal.innerHTML = `
  <div class="modal-overlay">
    <div class="modal-popup">
    <button class="btn-close-card"><img src="img/row.svg"></button>
      <div class="modal-head">
        <img class="modal-splash" src='${infoChamp.splash}'>
      </div>
      <div class="modal-main">
        <h5 class="modal-title">${infoChamp.title}</h5>
        <h3 class="modal-name">${infoChamp.name}</h3>
        <p class="modal-blurb">${infoChamp.blurb}</p>
      </div>
    </div>
  </div>
  `
  modal.classList.add('active');
  const overlayCard = document.querySelector('.modal-overlay'),
  popupCard = document.querySelector('.modal-popup'),
  btnCloseCard = document.querySelector('.btn-close-card');
  overlayCard.classList.add("active");
  popupCard.classList.add("active");

  btnCloseCard.addEventListener("click", function(){
    modal.classList.remove('active');
    overlayCard.classList.remove("active");
    popupCard.classList.remove("active");
    console.log(btnCloseCard)
  });


  console.log(modal)
}
/*<img class="background" src='${infoChamp.splash}'>*/

/*
function printModal(){
  const viewCard = `
      <div id= >
        <h3>${champion.name}</h3>
        <img class = 'imgchampion' src = '${champion.splash}' />
      </div>
    `
    console.log(viewCard)
  .join("");
modal.innerHTML = viewCard;
}
*/
// Versión desktop de rol

const roleOptions = document.querySelector('.list-role');
roleOptions.addEventListener('change', filterRoleDesktop);  //change para select y checkbox
function filterRoleDesktop (event){
  let role = event.target.value;
  //const classify = datos.filter(rol => rol['tags'].includes(role));
  let changeViewData = filterData (datos, role);
  if (role === 'All') {
    getData (datos)
  }else{
    getData (changeViewData)
  }
  console.log(changeViewData)
}

// Función de ordenar data A-Z ó Z-A  - Desktop

const filterSortDesktop = document.getElementById('sort-list');

filterSortDesktop.addEventListener('change', sortingDesktop);
function sortingDesktop (event){
    let orderOption = event.target.value;
    let organizeChange = organize (datos, orderOption);
    getData(organizeChange)
}


// Filtro difficult - Desktop
/*
const filterDifficultDesktop = document.getElementById('difficult-list');
filterDifficultDesktop.addEventListener('change', difficultLevelDesk)



function difficultLevelDesk () {
  let num = datos.info.difficulty
  //let difficulty = event.target.value;
  const difficulty = datos.filter(diff => diff['info'].difficulty.includes(4));
  console.log(difficulty)
  //let difficultchange = difficult (datos, difficulty);
  //console.log(difficult (datos, difficulty, num));
  return difficulty;
}

*/

/*
   switch(difficulty) {
      case "Low":
      text ="test one";
      break;

      case "Medium":
      text ="test two";
      break;

      case "High":
      text ="test three";
      break;

      default:
      text = " ";
      }
      getData(difficultChange)
      }
*/

//Función search
/*
const champioName = ()=>
  let champ =  searchName.value; {
    createCard(filterName(data, champ))
     }
   searchName.addEventListener("keyup", champioName)

*/

// Fitro Nombre - Desktop
const searchchampDesktop = document.getElementById('search');
searchchampDesktop.addEventListener('keyup', searchDesktop );
function searchDesktop (event){
    let orderOption = searchchampDesktop.value;
    let searchChange = nameChamp (datos, orderOption);
    getData(searchChange)
}

/*
const filterSortMobile = document.getElementById('sort-overlay');

filterSortMobile.addEventListener('click', sortingMobile);
function sortingMobile (event){
    let orderOptionMobile = event.target.value;
    let organizeChangeMob = organize (datos, orderOptionMobile);
    getData(organizeChangeMob)
}
*/

// -------- Menú hamburguesa - Mobile
const btnHambMenu = document.getElementById('hamb-menu'),
overlayHamb = document.getElementById('hamb-menu-overlay'),
popupHamb = document.getElementById('hamb-menu-popup'),
btnCloseHamb = document.getElementById('btn-close-hamb-menu');

btnHambMenu.addEventListener("click", function(){
  overlayHamb.classList.add("active");
  popupHamb.classList.add("active");
});

btnCloseHamb.addEventListener("click", function(){
  overlayHamb.classList.remove("active");
  popupHamb.classList.remove("active");
});

// -------- Filtros botón derecho de nav - Mobile
const btnFilter = document.getElementById('filter'),
overlayFilter = document.getElementById('filter-overlay'),
popupFilter = document.getElementById('filter-popup'),
btnCloseFilter = document.getElementById('btn-close-filter-popup');

btnFilter.addEventListener("click", function(){
  overlayFilter.classList.add("active");
  popupFilter.classList.add("active");
});

btnCloseFilter.addEventListener("click", function(){
  overlayFilter.classList.remove("active");
  popupFilter.classList.remove("active");
});

// -------- Filtros - Roles - Mobile
const btnFilterRole = document.getElementById('select-role-btn'),
overlayFilterRole = document.getElementById('filter-role-overlay'),
popupFilterRole = document.getElementById('filter-role-popup'),
btnCloseFilterRole = document.getElementById('btn-close-filter-role-popup');

btnFilterRole.addEventListener("click", function(){
  overlayFilterRole.classList.add("active");
  popupFilterRole.classList.add("active");
});

btnCloseFilterRole.addEventListener("click", function(){
  overlayFilterRole.classList.remove("active");
  popupFilterRole.classList.remove("active");
});

// -------- Sort - Mobile
const btnSort = document.getElementById('sort'),
overlaySort = document.getElementById('sort-overlay'),
popupSort = document.getElementById('sort-popup'),
btnCloseSort = document.getElementById('btn-close-sort-popup');

btnSort.addEventListener("click", function(){
  overlaySort.classList.add("active");
  popupSort.classList.add("active");
});

btnCloseSort.addEventListener("click", function(){
  overlaySort.classList.remove("active");
  popupSort.classList.remove("active");
});

// -------- Modal Champions
/*
const btnCard = document.querySelector('.cardChampion'),
overlayCard = document.querySelector('.modal-overlay'),
popupCard = document.querySelector('.modal-popup'),
btnCloseCard = document.querySelector('.btn-close-card');

btnCard.addEventListener("click", function(){
  overlayCard.classList.add("active");
  popupCard.classList.add("active");
});

btnCloseCard.addEventListener("click", function(){
  overlayCard.classList.remove("active");
  popupCard.classList.remove("active");
});
*/
