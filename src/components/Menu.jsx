import React from 'react'
import Style from "./menu.module.css"

function Menu() {
  return (
    function Menu( props )
{
    return(
        <>
        
        <div className={Style.menu}>
            
            <div>
                <li>
                    <a href="#">Novidades</a>
                </li>
                <li>
                    <a href="#">Masculino</a>
                </li>
                <li>
                    <a href="#">Feminino</a>
                </li>
                <li>
                    <a href="#">Infantil</a>
                </li>
                <li>
                    <a href="#">Polos</a>
                </li>
                <li>
                    <a href="#">Coleções</a>
                </li>
            </div>
        </div>
          </>
    )
}
  )
}

export default Menu