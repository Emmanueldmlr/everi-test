import React from 'react'

const RaisedCard = ({children}) => {

    return (

        <div class="card">

            <div class="card-body">

                <div class="wallet-card">

                    {
                        children
                    }
                    
                </div>

            </div>

        </div>
    )

}

export default RaisedCard
