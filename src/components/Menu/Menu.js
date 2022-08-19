import React from 'react'
import './menu_style.css'




const Menu = () => {
    return (
        <div className='menu'>
            Menu
            <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/interventions">Interventions</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </div>
    )
}

export default Menu