import React, {useState, useEffect } from 'react'
import Card from '../Card/Card'
import FormNewFilm from '../FormNewFilm/FormNewFilm'
import "./ContentMain.css"
import Search from '../Search/Search'

const ContentMain = () => {

  const [list, setList] = useState([])

  if(!localStorage.getItem("films")){
    useEffect(()=>{
      localStorage.setItem("films", JSON.stringify([]))
    }, [])
  }

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