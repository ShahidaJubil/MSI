import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import  './fourimg.css';

export default function StandardImageList() {
  return (<div className='grid3'>
    <ImageList  cols={4}>
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
      <h4 className='forum'><b>MSI Forums</b></h4>
      <h4 className='forum'><b>MSI Reward Program</b></h4>
      <h4 className='forum'><b>Videos</b></h4>
      <h4 className='forum'><b>MSI Insider</b></h4>
          
    </ImageList>
    
    </div>
  );
}

const itemData = [
  {
    img: 'https://storage-asset.msi.com/frontend/imgs/forum.jpg',
    title: 'Breakfast',
  },
  {
    img: 'https://storage-asset.msi.com/frontend/imgs/reward.jpg',
    title: 'Burger',
  },
  {
    img: 'https://storage-asset.msi.com/frontend/imgs/video.jpg',
    title: 'Camera',
  },
  {
    img:'https://storage-asset.msi.com/frontend/imgs/insider.jpg'
  }
];
