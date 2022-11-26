import { useState, useEffect } from 'react';
import errImg from '~/assets/images/img-notfound.jpg';

type Props = {
  src: string;
  alt: string;
  className?: string;
};

function Image({ src, alt, className }: Props) {
  const [imgSrc, setimgSrc] = useState(() => src);

  useEffect(() => {
    if (!src) setimgSrc(errImg);
  }, []);

  const handleError = () => {
    setimgSrc(errImg);
  };

  return (
    <>
      <img src={imgSrc} alt={alt} className={className} onError={handleError} />
    </>
  );
}

export default Image;
