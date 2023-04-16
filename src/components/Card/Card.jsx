import React, { useEffect, useState } from 'react'
import "./Card.css"
import CardEdit from './CardEdit'

const Card = ({ list, setList }) => {

  const [edit, setEdit] = useState(0)


  useEffect(() => {
    getFilms()
  }, [])

  const getFilms = async () => {
    const filmsData = JSON.parse(localStorage.getItem("films"))
    await setList(filmsData)
    return filmsData


  }


  const deleteElement = async (id) => {
    const filmsSave = await getFilms()

    let newArrFilms = filmsSave.filter(peli => peli.id !== parseInt(id))

    setList(newArrFilms)

    localStorage.setItem("films", JSON.stringify(newArrFilms))

  }



  return (
    <div className='box-filmItem'>
      {list != null && list.map((film) => {
        return (
          <div key={film.id} className='peli-item' >
            <h3 className='title-peli'>{film.title} </h3>
            <p className='description'>{film.description} </p>
            <button onClick={() => setEdit(film.id)} className='edit'>Editar</button>
            <button onClick={() => deleteElement(film.id)} className='delete'>Borrar</button>
            {/* aparece el formulario de editar */}
            {
              edit == film.id && (
                <CardEdit setList={setList} setEdit={setEdit} getFilms={getFilms} film={film} />
              )
            }
          </div>
        )
      })}
    </div>
  )
}

export default Card