import React from 'react';
import './nav.css';


export const Nav = () => {
  return (
    <div>
        <hr className='hr'/>
        <nav class="uk-navbar" uk-navbar>
    <div class="uk-navbar">
 
        <a class="uk-navbar-itemimg " href="/"><img src="https://storage-asset.msi.com/frontend/imgs/logo-footer.png" alt=""/></a>

        <ul class="uk-navbar-nav">
            
           
        </ul>

        <div class="uk-navbar-item">
        
        <li className='copy'>
            
                Copyright © 2022 Micro-Star INT'L CO., LTD. All rights reserved.
            
            </li>
        <li className='navitems'>
            <p>Cookie Policy</p>
        </li>
        <li className='navitems'>
          <p>Privacy Policy</p>  
        </li>
        <li className='navitems'>
            <p>Terms of Use</p>
        </li>
        <li className='navitems'>
            <p> Contact Us</p>
        </li>
        <li className='navitems global'>
            <p><img src='https://www.msi.com/images/front/global.png' alt=""  /> Global / English</p>
        </li>
        </div>

       

    </div>
</nav>
    </div>
  )
}

export default Nav;