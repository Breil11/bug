import React from 'react'
import Header from 'components/Header/Header'
// import UserMenu from 'components/UserMenu/UserMenu'
// import HomeBox from 'components/HomeBox/HomeBox'
import './homepage_style.css'
// import HomeInterventionBox from 'components/HomeInterventionBox/HomeInterventionBox'
// import HistoryInterventionBox from 'components/HistoryInterventionBox/HistoryInterventionBox'
// import BasicButton from 'components/BasicButton/BasicButton'


const HomePage = () => {
    return (
        <div>
            <Header/>
            <div>
                HomePage
            </div>
            {/* <div className='box-up'>
                <HomeBox/>
                <HomeBox/>
            </div>
            <div className='box-down'>
                <HomeBox/>
                <HomeBox/>
            </div> */}
            {/* <HomeInterventionBox/> */}
            {/* <HistoryInterventionBox/> */}
            {/* <BasicButton/> */}
        </div>
    )
}

export default HomePage