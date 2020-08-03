
  // Función de filtro//

  const filterData = (data,condition)=>{
    const role_one = data.map((dato) => [dato.name,dato.tags[0],dato.splash]); 
    const role_two = data.map((dato) => [dato.name,dato.tags[1],dato.splash]);   
    const classify = role_one.filter(role => role[1] == condition);
    const classify_two = role_two.filter(role => role[1] == condition);
    const final = classify.concat(classify_two);
    return final;
  };
  //console.log(filterData(datos,'Assassin'));

  //Función Dificultad//

  const filterDif = (data, num) =>{
    const difficulty = data.map((dato) => [dato.name,dato.info.difficulty,dato.splash]);
    const diff = difficulty.filter(dif => dif[1] >= num);
    return diff;
  }; 
 console.log(filterDif(datos,5)) 


  // Función Sort//

  const organize = (data) => {
    let dataorga = data.map((dato)=> [dato.name,dato.splash]);
    return dataorga.sort();
  };
  //console.log(organize(datos))
  