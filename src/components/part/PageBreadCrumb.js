import React from 'react'

const PageBreadCrumb = ({title, ActiveLink, currentLink})  =>{
    
    return (
        
        <div class="row page-titles">

            <div class="col p-md-0">

                <h4>{title}</h4>

            </div>

            <div class="col p-md-0">

                <ol class="breadcrumb">

                    <li class="breadcrumb-item active"><a href="javascript:void(0)">{ActiveLink}</a></li>
                    
                    <li class="breadcrumb-item ">{currentLink}</li>

                </ol>

            </div>
            
        </div>
    )
}

export default PageBreadCrumb