import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import errImg from '~/assets/images/img-notfound.jpg';

function Image({ src, alt, className }) {
  const [imgSrc, setimgSrc] = useState(src);

  useEffect(() => {
    if (!src) setimgSrc(errImg);
  });

  return (
    <>
      <img src={imgSrc} alt={alt} className={className} />
    </>
  );
}

Image.prototype = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.object,
};

export default Image;
