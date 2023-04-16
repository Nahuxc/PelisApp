import React, { useState } from 'react'
import Card from '../Card/Card'
import FormNewFilm from '../FormNewFilm/FormNewFilm'
import "./ContentMain.css"
import Search from '../Search/Search'

const ContentMain = () => {
  const [list, setList] = useState([])

  return (
    <div className='contentMain'>
      <div className='contentCards'>
        <Card list={list} setList={setList} />
      </div>
      <div className='contentForms'>
        <div className='contentForm'>
          <Search list={list} setList={setList} />
          <FormNewFilm setList={setList} />
        </div>
      </div>
    </div>
  )
}

export default ContentMain