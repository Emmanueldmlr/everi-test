import React from 'react'

import Index from '../components/element/overviewCard/index'

import PageBreadCrumb from '../components/part/PageBreadCrumb'

import summaryData from '../Data/summaryData'

import { capitalDataHeader, capitalData, tradingActivitiesDataHeader, tradingActivitiesData, orderDataHeader, orderData } from '../Data/tableData'

import Table from '../components/element/Table'
import RaisedCard from '../components/element/RaisedCard'
import Title from '../components/element/transaction/Title'
import Body from '../components/element/transaction/Body'
import { Button, Select } from '../components/element/FormElements'

const Dashboard = () => {

    return (

        <>

            <PageBreadCrumb ActiveLink="Home" currentLink="Cryptocurrency" title="Cryptocurrency" />

            <div class="card" style={{ height: 100 }}>

                <div class="row ">

                    <div class="col-xl-2 ">

                        <div class="ticker-overview" style={{ height: 100 }}>Over View</div>

                    </div>
                    {
                        summaryData.map((overview, index) => (
                            index < 3 ?
                                <div class="col-xl-3 mt-5">
                                    <li key={index} data-update="item1"><i class={`cc ${overview.title}`}></i> {overview.title} <span class="coin-value"> {overview.price}</span>  <span class={`text-${overview.color} coin-status`}> - 1.81% <i class="fa fa-level-down"></i></span>
                                    </li>
                                </div>
                                :
                                null
                        ))
                    }

                </div>
            </div>
            <br />
            
            <br />

            <div class="row">
                {
                    summaryData.map((overview, index) => (
                        <Index key={index} data={overview} />
                    ))
                }

            </div>
            <div class="row">
                <div class="col-xl-5">
                    <div class="card transparent-card ">

                        <Table title="Data Table Market Capital" subTitle="Todays Currency Price and Changes" tableHeader={capitalDataHeader} >
                            {
                                capitalData.map((capital, index) => (
                                    <tr key={index}>
                                        <td>
                                            <i class={`cc ${capital.title} mr-3`}></i>  {capital.name}
                                        </td>
                                        <td>
                                            {capital.price}
                                        </td>
                                        <td class={`text-${capital.indicator == 'negative' ? "danger" : "success"}`}>{capital.priceUp} <i class={`fa fa-level-${capital.indicator == 'negative' ? "down" : "up"}`}></i>
                                        </td>
                                    </tr>
                                ))
                            }

                        </Table>

                    </div>
                </div>
                <div class="col-xl-7">
                    <div class="card transparent-card ">

                        <Table title="Recent Trading Activities" subTitle="Trading Currency Activities" tableHeader={tradingActivitiesDataHeader}>
                            {
                                tradingActivitiesData.map((trading, index) => (
                                    <tr key={index}>

                                        <td>
                                            {trading.did}
                                        </td>
                                        <td><span class="text-muted font-weight-semi-bold">{trading.time}</span></td>
                                        <td>
                                            {trading.lastTrade}
                                        </td>
                                        <td><span class={`label label-xl label-rounded label-${trading.flag}`}>Delivery</span>
                                        </td>
                                    </tr>
                                ))
                            }
                        </Table>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4">
                    <RaisedCard>

                        <Title title="Transfer Coins" />

                        <Body placeholder1="Enter your payment" placeholder2="2xsD12F42xvR2deD4..." title="Payment*" iconStyle1="fa fa-usd" iconStyle2="mdi mdi-wallet" hasSmall={true} smallText="Minimum value 0.00001BTC">

                            <Button style="outline-primary" style2="btn-sl-lg" name="Transfer Now" />

                        </Body>

                    </RaisedCard>
                </div>
                <div class="col-lg-4">

                    <RaisedCard>

                        <Title title="Wallet Address" />

                        <Body placeholder1="2xsD12F42xvR2deD4..." placeholder2="2xsD12F42xvR2deD4..." title="Bitcoin Wallet Address*" subTitle="Ethereum Wallet Address*" iconStyle2="cc ETH" iconStyle1="cc BTC" >

                            <Button style="secondary" style2="btn-sl-sm mr-3" name="View All" />

                            <Button style="outline-primary" style2="btn-sl-sm" name="Settings" />

                        </Body>

                    </RaisedCard>

                </div>
                <div class="col-lg-4">
                    <RaisedCard>
                        <Title title="Choose asset to trade" />
                        <div class="row mt-5">
                            <div class="col-lg-12">
                                <form >
                                    <div class="input-group input-group-prepend-big mb-4">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text flex-column justify-content-center text-pale-sky px-5">
                                                <p class="m-0 ">BTC</p>
                                                <span>945.34 <span><i class="fa fa-level-down"></i></span></span>
                                            </div>
                                        </div>
                                        <input type="text" class="form-control bg-white pl-5" aria-label="Text input with dropdown button" placeholder="0.25" />
                                    </div>
                                    <div class="text-center">
                                        <img src="https://digitalheaps.com/demo/gleek/demo/assets/images/icons/18.png" alt="" />
                                    </div>
                                    <div class="input-group input-group-prepend-big mt-4 mb-0">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text flex-column justify-content-center text-pale-sky px-5">
                                                <p class="m-0 ">ETH</p>
                                                <span>945.34 <span><i class="fa fa-level-down"></i></span></span>
                                            </div>
                                        </div>
                                        <input type="text" class="form-control bg-white pl-5" aria-label="Text input with dropdown button" placeholder="0.25" />
                                    </div>
                                    <div class="text-center">
                                        <p class="muted-text my-2 ">You could save up to $45,42</p>
                                        <Button style="outline-primary" style2="btn-sl-sm" name="Exchange" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </RaisedCard>
                </div>
            </div>

            <div class="row pb-5 pb-sm-0">
                <div class="col">
                    <div class="card transparent-card select-coin">
                        <Select class="selectpicker show-tick" data-width="auto">
                            <option value="">BTC</option>
                            <option value="">XHR</option>
                            <option value="">ETH</option>
                        </Select>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title mb-5">BTC/USD</h4>
                            <div id="btc1"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row pt-5 pt-sm-0">
                <div class="col-xl-6">
                    <div class="card transparent-card mb-0">

                        <Table title="Sell Order" extendedTable={true} tableHeader={orderDataHeader} >
                            {
                                orderData.map((order, index) => (
                                    <tr key={index}>
                                        <td>{order.price}</td>
                                        <td>{order.amount}</td>
                                        <td>{order.total}</td>
                                    </tr>
                                ))
                            }
                        </Table>

                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="card transparent-card ">

                        <Table title="Sell Order" extendedTable={true} tableHeader={orderDataHeader} >
                            {
                                orderData.map((order, index) => (
                                    <tr key={index}>
                                        <td>{order.price}</td>
                                        <td>{order.amount}</td>
                                        <td>{order.total}</td>
                                    </tr>
                                ))
                            }
                        </Table>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
