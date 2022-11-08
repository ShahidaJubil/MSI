import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import  './Picturegrid.css';

export default function StandardImageList() {
  return (<div className='grid'>
    <ImageList sx={{ width: 1280, height: 320}} cols={3} rowHeight={164}>
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
    </div>
  );
}

const itemData = [
  {
    img: 'https://storage-asset.msi.com/global/picture/banner/banner_1654004502778f79d002d263b823788f5b863a4cd2.jpeg',
    title: 'Breakfast',
  },
  {
    img: 'https://storage-asset.msi.com/global/picture/banner/banner_1638864260bb5ea9133ec5f213ee4df9bc4fa2e653.jpeg',
    title: 'Burger',
  },
  {
    img: 'https://storage-asset.msi.com/global/picture/banner/banner_15991136025f5089828b81b.jpg',
    title: 'Camera',
  }
];
