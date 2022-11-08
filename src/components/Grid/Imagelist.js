import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 1300, height: 450 }}>
      <ImageListItem key="Subheader" cols={3}>
        <ListSubheader ></ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.subtitle}`}
              
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
    {
        img: 'https://storage-asset.msi.com/global/picture/banner/banner_16353240621eaad3af179129f1363a04c65a64620b.jpeg',
      
        rows: 1,
        cols: 2,
      },
      {
        img: 'https://storage-asset.msi.com/global/picture/banner/banner_1635324095836a794a7294137b0c36ea01cd6c59e6.jpeg',
        title: 'Automotive',
        author:'checking',
        rows: 2,
        cols: 2,
      },
      {
        img: 'https://storage-asset.msi.com/global/picture/banner/banner_16463842297f8dca24c4d77d7b836898893d3688d9.jpeg',
        title: 'Camera',
      },
      {
        img: 'https://storage-asset.msi.com/global/picture/banner/banner_16348803878971e768dae29892fd8d26f2cb4af4ca.jpeg',
        title: 'Tablet',
      },
      {
        img: 'https://storage-asset.msi.com/global/picture/banner/banner_1635324079b54318c7b1d8e6f0a08a947bc631b43e.jpeg',
        title: 'Camera',
      }
];
