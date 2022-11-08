import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import './subtest.css';


function srcset(image, size, rows = 1, cols = 1) {
  return {

    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <div className='tablet'>
    <ImageList
      sx={{ width: 1290, height: 370 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar 
            title={item.title}
           
            actionIcon={
              <IconButton className='sub'
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
               <div className='author'>
            subtitle={item.author}</div>
              </IconButton>
            }
          />
          
        </ImageListItem>

      ))}
    </ImageList>
    </div>
  );
  
}

const itemData = [
  {
    img: 'https://storage-asset.msi.com/global/picture/banner/banner_163532409531ad41f754e5d6f39afc9dfdc9ea26f2.jpeg',
    title: 'Rugged Tablet',
    author:'Professional Design & Manufacture Service.',
    rows: 3,
    cols: 2,
  },
  {
    img: 'https://storage-asset.msi.com/global/picture/banner/banner_1635324062fa4e885d515b987894aa1b3c2c6229b4.jpeg',
    title: 'Automotive and Commercial',
    rows: 1.5,
  },
  {
    img: 'https://storage-asset.msi.com/global/picture/banner/banner_16348803878971e768dae29892fd8d26f2cb4af4ca.jpeg',
    title: 'Server, Networking & IIoT',
    rows: 1.5,
  },
  {
    img: 'https://storage-asset.msi.com/global/picture/banner/banner_16463842297f8dca24c4d77d7b836898893d3688d9.jpeg',
    title: 'Autonomous Mobile Robot (AMR)',
    cols: 1,
    rows: 1.5,
  },
  {
    img: 'https://storage-asset.msi.com/global/picture/banner/banner_1635324079b54318c7b1d8e6f0a08a947bc631b43e.jpeg',
    title: 'FUNTORO Solutions',
    cols: 1,
    rows: 1.5,
  }
];
