import React from 'react'

import Body from './Body'

import Header from './Header'

const index = ({data}) => {

    return (

        <div class="col-xl-3 col-sm-6">
            <div class="card">
                <Header data={data}/>
                <Body icn={data.icn} lastUpdated={data.lastUpdated} color={data.color}/>
            </div>
        </div>
    )
}

export default index