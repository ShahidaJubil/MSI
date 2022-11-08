import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import  './projectreg.css';

export default function StandardImageList() {
  return (
  <div className='reg'>
  <div className='grid1'>
    <ImageList  cols={2}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
        
      ))}
    </ImageList>
    <div className="img-text-wrapper">
<h4><b>Service</b></h4>
     <p> Customized services especially for you</p></div>
      <div className="logo-wrapper">
        <div className='regimg'><img src="https://storage-asset.msi.com/frontend/imgs/icon_poductRegistration.svg" alt=""></img> </div>
    </div>
    <div className="img-text-wrapper2">
<h4><b>Product Registration</b></h4>
    <p> To enjoy a host of benefits, promotions and events </p></div>
     <div className='regimg2'><img src="https://storage-asset.msi.com/frontend/imgs/icon_support.svg" alt=""></img> </div>
</div>
<div className='grid768'>
    <ImageList  cols={1}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
        
      ))}
    </ImageList>
    <div className="img-text-wrapper">
<h4><b>Service</b></h4>
     <p> Customized services especially for you</p></div>
      <div className="logo-wrapper">
        <div className='regimg'><img src="https://storage-asset.msi.com/frontend/imgs/icon_poductRegistration.svg" alt=""></img> </div>
    </div>
    <div className="img-text-wrapper2">
<h4><b>Product Registration</b></h4>
    <p> To enjoy a host of benefits, promotions and events </p></div>
     <div className='regimg2'><img src="https://storage-asset.msi.com/frontend/imgs/icon_support.svg" alt=""></img> </div>
</div>




</div>
  );
}

const itemData  = [
  {
    img: 'https://storage-asset.msi.com/frontend/imgs/product_registration.jpg' ,
    title: 'Breakfast',
  },
  {
    img: 'https://storage-asset.msi.com/frontend/imgs/support_service_location.jpg',
    title: 'Burger',
  }
];
