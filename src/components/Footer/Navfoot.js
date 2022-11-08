import React from 'react';
import './navfoot.css';


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
            <span className='cr'>
                Copyright © 2022 Micro-Star INT'L CO., LTD. All rights reserved.
            </span>
            </li>
        <li className='navitems-1'>
            <p>Cookie Policy</p>
        </li>
        <li className='navitems-2'>
          <p>Privacy Policy</p>  
        </li>
        <li className='navitems-3'>
            <p>Terms of Use</p>
        </li>
        <li className='navitems-4'>
            <p> Contact Us</p>
        </li>
        <li className='navitems-5'>
            <p><img src='https://www.msi.com/images/front/global.png' alt=""  /> Global / English</p>
        </li>
        </div>

       

    </div>
</nav>
    </div>
  )
}

export default Nav;