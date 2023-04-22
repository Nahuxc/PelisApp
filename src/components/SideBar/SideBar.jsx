import React, { useState } from 'react'
import "./SideBar.css"

const SideBar = () => {

    const [deploy, setDeploy] = useState(false)

    const deploysideBar = ()=>{
        if(deploy === false){
            setDeploy(true)
            document.querySelector(".sideBar").classList.toggle("active")
            document.querySelector(".btn-sideBar").classList.toggle("move-btn")
        }else if( deploy === true){
            setDeploy(false)
            document.querySelector(".sideBar").classList.remove("active")
            document.querySelector(".btn-sideBar").classList.remove("move-btn")
        }
    }


  return (
    <div>
        <button onClick={()=> deploysideBar()} className='btn-sideBar'>
            {
                deploy === false ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>
            }
        </button>
        <div className='sideBar'>
            <div className='sideBar-content'>
                <p className='list-sideBar' to={"/"}><i className="fa-solid fa-house"></i> Inicio</p> 
                <p className='list-sideBar' to={"/productos"}><i className="fa-solid fa-film"></i> Peliculas</p> 
                <p className='list-sideBar' to={"#"}> <i className="fa-solid fa-users"></i> Blog</p> 
                <p className='list-sideBar' to={"#"}> <i className="fa-solid fa-phone"></i> Contacto</p>
            </div>
        </div>
    </div>
  )
}

export default SideBar