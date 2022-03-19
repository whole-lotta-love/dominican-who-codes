import { FunctionComponent, ReactElement } from 'react';
import { ImageStyled } from './Image.styled';
import Image from 'next/image';

interface ImageProps {
  src: string;
  title: string;
}

const ImageComponent: FunctionComponent<ImageProps> = ({
  src,
  title,
}): ReactElement => {
  return (
    <ImageStyled height={300} width={300}>
      <Image src={src} height={300} width={300} alt={title} />
    </ImageStyled>
  );
};
export default ImageComponent;
