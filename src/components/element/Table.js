import React from 'react'
import { Select } from './FormElements'

const Table = ({ children, tableHeader, title , extendedTable, subTitle}) => {

    return (

        <div class="card transparent-card mb-0">

            <div class={`card-header pb-0 ${extendedTable && "d-flex justify-content-between align-items-center"}`}>

                <h4 class={`card-title ${!extendedTable && "mb-3"}`}> {title}</h4>

                {!extendedTable && <p class="font-medium">{subTitle}</p>}

                {
                    extendedTable &&
                    <div class="table-action">
                        <div class="form-group mb-0 mr-3">

                            <Select class="selectpicker show-tick" data-width="auto">
                                <option selected="selected">Sort By</option>
                                <option>Ascending</option>
                                <option>Descending</option>
                            </Select>
                        </div>
                     </div>
                }

            </div>

            <div class="card-body p-0">
                <div class="table-responsive">
                    <table class="table table-padded selling-order-table">
                        <thead>
                            <tr>
                                {
                                    tableHeader.map((value, index) => (
                                        <th key={index}>{value.title}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                children
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )

}

export default Table
