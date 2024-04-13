import React, { useState } from 'react'
import "./FormNewFilm.css"
import { saveDataLocalStorage } from '../../helpers/saveDataLocalStorage'

const FormNewFilm = ({ setList }) => {

  const titleComponent = "Añadir Pelicula"
  const [filmState, setFilmState] = useState({
    title: "",
    description: "",
    img: ""
  })

  const getDataForm = (e) => {

    e.preventDefault()
    const dataForm = e.target
    const title = dataForm.title.value
    const description = dataForm.description.value
    const img = dataForm.img.value

    const film = {
      id: new Date().getTime(),
      title,
      description,
      img
    }

    //guardamos los datos en el estado
    setFilmState(film)


    //guardamos los datos en el LocalStorage
    saveDataLocalStorage("films", film)


    //actualizar el estado del listado principal
    setList((element)=>{
      return [...element, film]
    })



  }


  return (
    <div className='box-FormNewFilm'>
      <div className='content'>
        <h2>{titleComponent} </h2>
        <form onSubmit={getDataForm} className='form-CreateFilm'>
          <input
            minLength={4}
            className='input-title'
            name='title'
            type="text"
            value="super mario bros"
            placeholder='Titulo' required />
            <input
            className='input-title'
            name='img'
            type="text"
            value="https://www.universalpictures-latam.com/tl_files/content/movies/super_mario_bros/posters/03.jpg"
            placeholder='poner el link de la imagen' required />
          <textarea
            minLength={5}
            required
            className='input-description'
            name="description"
            value="Nueva pelicula"
            placeholder='descripcion' />
          <input
            className='input-save'
            type="submit"
            value="Guardar" />
        </form>
      </div>

    </div>
  )
}

export default FormNewFilm