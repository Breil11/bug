import React from 'react'
import './homeinterventionbox_style.css'
import Header from 'components/Header/Header'

const HomeInterventionBox = () => {
    return(
        
        
        <div className='box'>
            <Header/>
            <div className='box-1'>
                <div className='header2'>
                    Installation Netflix
                </div>
                <div className='content'>
                    <p>J'ai une nouvelle Smart Tv et j'aimerais installer Netflix dessus</p>
                    
                    <br/>
                    <div className='content-adresse'>
                        <p>14 Avenue du Champ du Loup, 1100 Bruxelles <br/>Code Agent: SLQ-501XM </p>
                        <p>+32 455 66 88 77 <br/>Urgent(+20 €)</p>
                    </div>
                    <div className='content-agent'>
                        <p>Agent SLD-501XM / Emmanuel D.</p>
                        <p>Date: le mercredi vers 18h</p>
                    </div>
                        
                </div>
            </div>
        </div>

        
    )
}

export default HomeInterventionBox