import React from 'react'

const Header = ({ data }) => {

    return (

        <div class="card-body stat-widget-four">

            <div class="media">

                <span class="mr-3">

                    <i class={`cc ${data.title}`} title={data.title}></i>

                </span>
                <div class="media-body">

                    <h4 class="mb-3">{data.name}</h4>

                    <h5 class="text-pale-sky">{data.value}</h5>

                </div>
                <div class="media-body text-right">

                    <h4 class="text-pale-sky mb-3">{data.price}</h4>

                    <h5 class={`text-${data.indicator == 'negative' ? "danger" : "success"}`}>{data.priceUp}<i class="fa fa-level-down"></i>

                    </h5>

                </div>

            </div>

        </div>

    )
}

export default Header
