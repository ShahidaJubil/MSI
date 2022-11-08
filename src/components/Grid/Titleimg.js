import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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
    <ImageList
      sx={{ width: 1300, height: 300 }}
     
      cols={4}
      rowHeight={100}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
           
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://storage-asset.msi.com/global/picture/banner/banner_16463842296a199d17a9761b2d63073d31f03d3c7a.jpeg',
    title: 'Breakfast',
    rows: 3,
    cols: 2,
  },
  {
    img: 'https://storage-asset.msi.com/global/picture/banner/banner_1635324062fa4e885d515b987894aa1b3c2c6229b4.jpeg',
    title: 'Burger',
    rows: 1.3,
    cols: 1,
  },
  {
    img: 'https://storage-asset.msi.com/global/picture/banner/banner_1635324079b54318c7b1d8e6f0a08a947bc631b43e.jpeg',
    title: 'Camera',
    rows: 1.3,
    cols: 1,
  },
  {
    img: 'https://storage-asset.msi.com/global/picture/banner/banner_16348803878971e768dae29892fd8d26f2cb4af4ca.jpeg',
    title: 'Coffee',
    cols: 1,
    rows: 1.3,
    
  },
  {
    img: 'https://storage-asset.msi.com/global/picture/banner/banner_1635324095836a794a7294137b0c36ea01cd6c59e6.jpeg',
    title: 'Hats',
    cols: 1,
    rows: 1.3,
   
  }
 
];
