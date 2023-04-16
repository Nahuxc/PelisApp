import React from 'react'

const CardEdit = ({film, getFilms, setList, setEdit}) => {

    const saveEdit= async  (e, id) =>{
        e.preventDefault()

        /* traemos las peliculas almacenadas del localStorage */
        const filmSaveLocalStorage = await getFilms()

        const indice = filmSaveLocalStorage.findIndex(film => film.id === id)


        /* valores de nuestro formulario */
        const targetEdit = e.target
        const title = targetEdit.title.value
        const description = targetEdit.description.value

        const filmEdit = {
            id,
            title,
            description
        }

        filmSaveLocalStorage[indice] = filmEdit

        localStorage.setItem("films", JSON.stringify(filmSaveLocalStorage) )


        setList(filmSaveLocalStorage)
        setEdit(0)

    }

    const close =()=>{
      setEdit(0)
    }


  return (
    <div className='box-editCard'>
        <h3 className='title-edit'>Editar Pelicula</h3>
        <form onSubmit={e => saveEdit(e, film.id) }>
            <input type="text"
             name='title'
             className="input-title"
             defaultValue={film.title} />
            <textarea name="description"
             defaultValue={film.description}
             className='input-description' />

             <input type="submit" className='edit' value="Actualizar" />
             <input onClick={close} type="submit" className='delete' value="Cerrar" />
        </form>
    </div>
  )
}

export default CardEdit