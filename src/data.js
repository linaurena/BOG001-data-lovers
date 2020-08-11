import data from './data/lol/lol.js';

// Función para llamar data
export const allData = () => {
  return data.data;
}

  // Función de filtro//

  export const filterData = (info, condition)=>{
    const dataInfo = Object.values(info);
    const classify = dataInfo.filter(role => {const rol = role['tags'];
    const roles = rol.includes(condition)
    return roles;});
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

/*
//let array1 = [];
  // Función Difficult

  export const difficult = (data, selectedLevel, num) => {

    switch (selectedLevel){
        case 'Low':
          if (num <= 4){
            console.log ('aqui vienen los menores de 4'); /* array1.push('array de los menores de 4');
          }
        break;

        case 'Medium':
          if  (num <= 8)
          console.log('Funciona 2');
        break;
        case 'High':
          if (num <= 10)
          console.log('Funciona 3');
        break;
      }
    }
*/

//Función Search

export const nameChamp = (data,name) =>{
  let lower = name.toLowerCase();
  let Upper = lower.charAt(0).toUpperCase() + lower.slice(1)
  let Mix = data.filter (function(champion) {
    return champion.name.startsWith(Upper)
  })
  return Mix
 };

