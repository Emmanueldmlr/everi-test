import React from 'react'

const Body  = ({lastUpdated, icn, color}) => {

    return (
        <div class={`bg-${color}`}>
                <div id={`crypto-${icn}-card`}></div>
                 <p class="text-white text-right mr-4 ">{lastUpdated}</p>
        </div>
    )
}

export default Body
