import React from 'react';
import './slideshow.css';

function Slideshow() {
  return (
    <div>
        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="autoplay: true;ratio: 6:2">
  <ul class="uk-slideshow-items">
      <li>
          <img className='SN' src='https://storage-asset.msi.com/global/picture/banner/banner_1645175043317838783ce3a36451da05b434878fe8.jpeg' alt="" uk-cover/>
          <img className='S1024' src="https://storage-asset.msi.com/global/picture/banner/banner_164517504489057855b10a893b854d8c5fae99e93f.jpeg" alt="" uk-cover/>
          <img className='S768' src='https://storage-asset.msi.com/global/picture/banner/banner_16558611537d022b57d3f44f63eb320f6942599a46.jpeg' alt='' uk-cover/>
          <img className='S425' src='https://storage-asset.msi.com/global/picture/banner/banner_164517504489057855b10a893b854d8c5fae99e93f.jpeg' alt='' uk-cover/>
      </li>
      <li>
        <img  className='SN' src="https://storage-asset.msi.com/global/picture/banner/banner_16479261387c67c2e565b9b5ce17ae5338594f7a6e.jpeg" alt="" uk-cover/>
        <img className='S1024' src='https://storage-asset.msi.com/global/picture/banner/banner_16558611537d022b57d3f44f63eb320f6942599a46.jpeg' alt="" uk-cover/>
        <img className='S768' src='https://storage-asset.msi.com/global/picture/banner/banner_16558611537d022b57d3f44f63eb320f6942599a46.jpeg' alt='' uk-cover/>
        <img className='S425' src='https://storage-asset.msi.com/global/picture/banner/banner_165362234380c394e590d3df531bd953b4f001ca8c.jpeg' alt='' uk-cover/>
    </li>
    <li>
      <img className='SN' src="https://storage-asset.msi.com/global/picture/banner/banner_1653014812ab4e66ffffabcad464dd943e56c2a9d1.jpeg" alt="" uk-cover/>
      <img className='S1024' src='https://storage-asset.msi.com/global/picture/banner/banner_16530148120181a412fe2b27e7d671f21b0280bc76.jpeg' alt="" uk-cover/>
      <img className='S768' src='https://storage-asset.msi.com/global/picture/banner/banner_164517504489057855b10a893b854d8c5fae99e93f.jpeg' alt='' uk-cover/>
      <img className='S425' src='https://storage-asset.msi.com/global/picture/banner/banner_1652172240d4c440bac1d1b2378ad4564de2786295.jpeg' alt='' uk-cover/>
    </li>
    <li>
      <img className='SN' src="https://storage-asset.msi.com/global/picture/banner/banner_1651566756e20dc31d2260936b170796d265346719.jpeg" alt="" uk-cover/>
      <img className='S1024' src='https://storage-asset.msi.com/global/picture/banner/banner_1651566757cc3b2bf3d43edafd590bd81a140be96c.jpeg' alt="" uk-cover/>
      <img className='S768' src='https://storage-asset.msi.com/global/picture/banner/banner_16548389067842766101ce1ef3ac86b27ee0fc51e7.jpeg' alt='' uk-cover/>
      <img className='S425' src='https://storage-asset.msi.com/global/picture/banner/banner_16548389067842766101ce1ef3ac86b27ee0fc51e7.jpeg' alt='' uk-cover/>
    </li>
  </ul>

</div>
<ul class="uk-slideshow-nav uk-dotnav uk-flex-center "></ul>
    </div>
  )
}

export default Slideshow