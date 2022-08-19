import React from 'react'
import Header from 'components/Header/Header'

import './clienthome_style.css'

const ClientHome = () => {
    return (
        <div>
            {/* <Header /> */}
            <div className='sidebar'>
                <div class="pp">
                </div> 
                <h2>Emmanuel D</h2>
                <ul>
                    <li>Acceuil</li>
                    <li>Paramètres</li>
                    <li>Historique</li>
                    <li>Déconnexion</li>
                    <br/>
                    <br/>
                    <li>Nous contacter</li>

                </ul> 
            

            </div>
           
        </div>
       
          
        
    )
}

export default ClientHome