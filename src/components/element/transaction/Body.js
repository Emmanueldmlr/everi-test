import React from 'react'

import { Input, Select} from '../FormElements'

const Body = ({hasSmall, smallText, title, subTitle, children, iconStyle1, iconStyle2, placeholder1, placeholder2}) => {

    return (

        <div class="wallet-address mt-5">

            <h5>{title} {hasSmall && <small class="text-muted ml-1">{smallText}</small>}</h5>

            <div class="input-group mb-5">

                <div class="input-group-prepend">
                    <div class="input-group-text flex-column justify-content-center text-pale-sky">
                        <span><i class={iconStyle1} aria-hidden="true"></i></span>
                    </div>
                </div>

                <Input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder={placeholder1} />

                {
                    hasSmall ?

                    <div class="input-group-append">

                        <Select class="selectpicker" data-width="auto">

                            <option selected value="">BTC</option>
                            <option value="">ETH</option>
                            <option value="">BTC</option>
                            <option value="">BTC</option>
                            
                        </Select>

                    </div>
                    :

                    <div class="input-group-prepend">
                        <div class="input-group-text flex-column justify-content-center text-pale-sky c-pointer">
                            <span className="text-primary"><i class="fa fa-file-text" aria-hidden="true"></i></span>
                        </div>
                    </div>

                }

            </div>
            <h5>{subTitle}</h5>
            <div class="input-group mb-5">
                <div class="input-group-prepend">
                    <div class="input-group-text flex-column justify-content-center text-pale-sky">
                        <span><i class={iconStyle2} aria-hidden="true"></i></span>
                    </div>
                </div>
                <Input type="text" class="form-control" placeholder={placeholder2} readonly="readonly" />
                {

                    !hasSmall &&

                    <>
                        
                        <div class="input-group-prepend">
                            <div class="input-group-text flex-column justify-content-center text-pale-sky c-pointer">
                                <span className="text-primary"><i class="fa fa-file-text" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </>

                }
            </div>
            {
                children
            }
        </div>

    )
}

export default Body
