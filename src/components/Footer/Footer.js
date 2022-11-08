import React from 'react';
import './footer.css';
import AddIcon from '@mui/icons-material/Add';


export const Footer = () => {
  return (
    
    <div className='footer'>
        <hr/>
<div className='footer1'>
    
<table class="uk-table uk-table-small "  size="small" >

    <thead>
        <tr>
            <th class="uk-table-expand1"><b>COMMUNITY</b> </th>
            <th class="uk-table-expand2"><b>SUPPORT</b></th>
            <th class="uk-table-expand3"><b>NEWS</b></th>
            <th class="uk-table-expand4"><b>MEDIA</b></th>
            <th><b>ABOUT US</b></th>
        </tr>
    </thead>
    <tfoot>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tfoot>
    <tbody>
        <tr>
            <td>MSI Reward Program</td>
            <td>Downloads</td>
            <td>News</td>
            <td>Brochure</td>
            <td>About MSI</td>
        </tr>
        <tr>
            <td>Forums</td>
            <td>Member Center</td>
            <td>Awards</td>
            <td>Wallpaper</td>
            <td>Mission And Vision</td>
        </tr>
        <tr>
            <td>Social Media</td>
            <td>Online Customer Service</td>
            <td>RSS</td>
            <td>MSI Apps</td>
            <td>Brand Story</td>
        </tr>
        <tr>
            <td>Videos</td>
            <td>Warranty</td>
            <td></td>
            <td></td>
            <td>Investor Information</td>
        </tr>
        <tr>
            <td>Gaming Teams</td>
            <td></td>
            <td></td>
            <td></td>
            <td>Innovation DNA</td>
        </tr>
        <tr>
            <td>Blogs</td>
            <td></td>
            <td></td>
            <td></td>
            <td>CSR</td>
        </tr>
        <tr>
            <td>Customer Stories</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
</div>
<div className='footer2'>
<table class="uk-table uk-table-justify uk-table-divider">
    
    <tbody>
        <tr>
            <td><b>COMMUNITY</b></td>
            <td></td>
            <td></td>
            <td></td>

            <td className='addicon'><AddIcon/> </td>
        </tr>
        <tr>
            <td><b>SUPPORT</b></td>
            <td></td>
            <td></td>
            <td></td>

            <td className='addicon'><AddIcon/> </td>
        </tr>
        <tr>
            <td><b>NEWS</b></td>
            <td></td>
            <td></td>
            <td></td>
            <td className='addicon'><AddIcon/> </td>
        </tr>
        <tr>
            <td><b>MEDIA</b></td>
            <td></td>
            <td></td>
            <td></td>
            <td className='addicon'><AddIcon/> </td>
        </tr>
        <tr>
            <td><b>ABOUT US</b></td>
            <td></td>
            <td></td>
            <td></td>
            <td className='addicon'><AddIcon/> </td>
        </tr>
    </tbody>
</table>

    
    </div> 
    <div>
        <hr className='hr1'/>
        <nav class="uk-navbar" uk-navbar>
    <div class="uk-navbar">
 
        <a class="uk-navbar-itemimg " href="/"><img src="https://storage-asset.msi.com/frontend/imgs/logo-footer.png" alt=""/></a>

        <ul class="uk-navbar-nav">
            
           
        </ul>

        <div class="uk-navbar-item">
        
        <li className='copy'>
            
                Copyright © 2022 Micro-Star INT'L CO., LTD. All rights reserved.
            
            </li>
        <li className='navitems' id='policy'>
            <p>Cookie Policy</p>
        </li>
        <li className='navitems'id='policy'>
          <p>Privacy Policy</p>  
        </li>
        <li className='navitems' id='use'>
            <p>Terms of Use</p>
        </li>
        <li className='navitems'id='use'>
            <p> Contact Us</p>
        </li>
        <li className='navitems global' id='eng'>
            <p><img src='https://www.msi.com/images/front/global.png' alt=""  /> Global / English</p>
        </li>
        </div>

       

    </div>
</nav>
    </div>
    </div>


    
  )
}
export default Footer;
