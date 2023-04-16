import React, { useState } from 'react'
import "./Search.css"

const Search = ({list, setList}) => {
  const [search, setSearch] = useState("")
  const [notFound, setNotFound] = useState(false)
  
  const searchFilm=(e)=>{
    //crear un estado
    setSearch(e.target.value)

    //filtrar las coincidencias
    let foundFilms = list.filter(film => {
      return film.title.toLowerCase().includes(search.toLocaleLowerCase())
    })

    //comprobar si hay un resultado

    if(search.length <= 1 || search.length <= 0 || foundFilms.length == 0){
      foundFilms =  JSON.parse(localStorage.getItem("films"))
      setNotFound(true)
    }else{
      setNotFound(false)
    }

    console.log(foundFilms);
    //dar un valor de todo en el localStorage

    setList(foundFilms)

  }

  return (
    <div className='formSearch'>
      <h2 className='title-Search'>Buscador: {search} </h2>
      {
        (notFound === true && search.length > 1) && <span className='notFound'>No se ha encontrado ninguna coincidencia</span>
      }
      <form>
        <input
        className='search'
        type="text"
        name="search"
        placeholder="Search..."
        autoComplete='off'
        onChange={searchFilm} />
        <button className='btn-search'>Buscar</button>
      </form>
    </div>
  )
}

export default Search