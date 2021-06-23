import React from 'react'

const Header = () => {

    return (
        <div class="header">    
            <div class="header-content">
                <div class="header-left">
                    <ul>
                        <li class="icons position-relative">
                            {/* <a href="javascript:void(0)"><i class="icon-magnifier f-s-16"></i></a>
                            <div class="drop-down animated bounceInDown">
                                
                            </div> */}
                            <div class="mt-2">
                                    <div class="header-search" id="header-search">
                                        <form action="#">
                                            <div class="input-group top-search">
                                                 <div class="input-group-append"><span class="input-group-text"><i class="icon-magnifier"></i></span>
                                                </div>
                                                <input type="text" class="form-control"  placeholder="Search"/>
                                                
                                            </div>
                                            
                                        </form>
                                    </div>
                                </div>
                        </li>
                    </ul>
                </div>
                <div class="header-right">
                    <ul>
                        <li class="icons">
                            <a href="javascript:void(0)">
                                <i class="mdi mdi-email"></i>
                                <div class="pulse-css"></div>
                            </a>

                        </li>
                        <li class="icons">

                            <a href="javascript:void(0)">

                                <i class="mdi mdi-bell"></i>

                                <div class="pulse-css"></div>

                            </a>

                        </li>

                        <li class="icons">

                            <a href="javascript:void(0)" class="log-user">

                                 <span class="mdi mdi-brightness-1 mdi-36px" style={{color:'#7f63f4'}}></span>
                                 

                                    <span >George Martin</span>  
                                  
                                    <i class="fa fa-caret-down f-s-14" aria-hidden="true"></i>


                            </a>
        
                        </li>
                        <li class="icons">

                            <a href="javascript:void(0)">

                                <i class="mdi mdi-menu"></i>

                            </a>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Header
