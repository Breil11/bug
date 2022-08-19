import React from 'react'
import './historyinterventionbox_style.css'

const HistoryInterventionBox = (content) => {
    return(
        <div className='box'>
            <div className='box-1'>
                <div className='header2'>
                    Satuts : en attente de paiement
                    {content}
                </div>
                <div className='content'>
                    <p>Intervention : Installation Netflix.</p>
                    {content}
                    
                    <br/>
                    <div className='content-adresse'>
                        <p>Revenu:50 points <br/>Code Agent: SLQ-501XM <br/>Paiement: Cash </p>
                        <p>Prix: 20 <br/>Urgent(+20 €) <br/>Total:40</p>
                        {content}

                    </div>
                  
                     <div className='content-agent'>
                        <p>Agent SLD-501XM / Emmanuel D.</p>
                        <p>Date: le mercredi vers 18h</p>
                        {content}
                 
                    </div>
                        
                </div>
            </div>
        </div>

        
    )
}

export default HistoryInterventionBox