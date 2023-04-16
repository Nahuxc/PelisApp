import React, { useState } from 'react'
import Card from '../Card/Card'
import FormNewFilm from '../FormNewFilm/FormNewFilm'
import "./ContentMain.css"

const ContentMain = () => {
  const [list, setList] = useState([])

  return (
    <div className='contentMain'>
      <div className='contentCards'>
        <Card list={list} setList={setList} />
      </div>
      <div className='contentForms'>
          <div className='contentForm'>
            <form className='formSearch'>
                <h2 className='title-Search'>Buscador</h2>
                <input className='search' type="text" name="search" placeholder="Search..." />
                <button className='btn-search'>Buscar</button>
            </form>
            <FormNewFilm setList={setList} />
        </div>
      </div>
    </div>
  )
}

export default ContentMain