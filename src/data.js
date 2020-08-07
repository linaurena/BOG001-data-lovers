import data from './data/lol/lol.js';

// Función para llamar data
export const allData = () => {
  return data.data;
}

  // Función de filtro//

  export const filterData = (info, condition)=>{

    /*const role_one = info.map(function(x){
      let arrChampion = new Array();
      arrChampion['name'] = x.name;
      arrChampion['tags'] = x.tags[0];
      arrChampion['splash'] = x.splash;
     // console.log(arrChampion)
      return arrChampion});*/
    /*const role_two = info.map(function(x){
      let arrChampion = new Array();
      arrChampion['name'] = x.name;
      arrChampion['tags'] = x.tags[1];
      arrChampion['splash'] = x.splash;
      return arrChampion};*/
    const classify = info.filter(role => role['tags'].includes(condition));
    //const classify_two = role_two.filter(role => role['tags'] == condition);
    //const final = classify.concat(classify_two);
    return classify;
  };





  //Función Dificultad//
/*
  const filterDif = (data, num) =>{
    const difficulty = data.data.map((data) => [data.name,data.info.difficulty,data.splash]);
    const diff = difficulty.filter(dif => dif[1] >= num);
    return diff;
  };
 //console.log(filterDif(datos,5))

*/

  // Función Sort//

  export const organize = (data, order) =>{
    let sortData = data.sort (function(a,z){
      if(a.name > z.name){
        return 1;}
      else {return -1;}
      });
      if(order == 'za'){
        return sortData.reverse()
       }
    return sortData
  };
  //console.log(organize(datos))


//let array1 = [];
  // Función Difficult

  export const difficult = (data, selectedLevel, num) => {

    switch (selectedLevel){
        case 'Low':
          if (num <= 4){
            console.log ('aqui vienen los menores de 4'); /* array1.push('array de los menores de 4'); */
          }
        break;
     /*
        case 'Medium':
          if  (num <= 8)
          console.log('Funciona 2');
        break;
        case 'High':
          if (num <= 10)
          console.log('Funciona 3');
        break;*/
      }
    }


//Función Search
