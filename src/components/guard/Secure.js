import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';

import NavHeader from '../part/NavHeader'

import Header from '../part/Header';

import Sidebar from '../part/Sidebar';

import Footer from '../part/Footer';

const Secure = ({component: Component, isLogin: isAuthenticated, ...rest}) => {

    return(

        <ErrorBoundary>

           <Route  

                {...rest} 

                render={

                    (props) => {

                        return isAuthenticated ?

                            (   
                                <>  
                                    
                                    <div id="main-wrapper">

                                        <NavHeader/>

                                        <Header/>

                                        <Sidebar/>

                                        <div class="content-body">

                                            <div class="container-fluid">

                                                <Component {...props} /> 

                                            </div>

                                        </div>

                                        <Footer/>
                                            
                                    </div>      

                                </>

                            ) 
                        :
                            //This will redirect unathenticated user to the login page
                            // <Redirect to={
                            //     {
                            //         pathname: "/login",
                            //         state: {
                            //             from: props.location
                            //         }
                            //     }
                            // } />

                            <p>Unathenticated User</p>

                    }

                }
                
            /> 
            
        </ErrorBoundary>

    );

}

export default Secure