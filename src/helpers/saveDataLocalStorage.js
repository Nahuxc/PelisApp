export const saveDataLocalStorage = (LSData, obj)=>{

    /* conseguir los elementos que ya tenemos en el localStorage */
    let elements = JSON.parse(localStorage.getItem(LSData));
    /* comprobar si es un Array */
    if(Array.isArray(elements)){
      /* añadir dentro del array un elemento nuevo */
      elements.push(obj);
    }else{

      elements = [obj];

    }

    /* guardamos en el localStorage */
    localStorage.setItem(LSData, JSON.stringify(elements));


    /* devolvemos el objeto guardado */
    return obj

  }