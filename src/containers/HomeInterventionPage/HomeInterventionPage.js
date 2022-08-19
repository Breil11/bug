import React from 'react'
import Header from 'components/Header/Header'

import './homeinterventionpage_style.css'

import HomeInterventionBox from 'components/HomeInterventionBox/HomeInterventionBox'
import BasicButton from 'components/BasicButton/BasicButton'


const HomePage = () => {
    return (
        <div>
            <div className='body'>
                <Header/>
            </div>
            <div className='boxes'>
                {/* <HomeInterventionBox/> */}
                <BasicButton/>
            </div>
        </div>
           
    )
}

export default HomePage