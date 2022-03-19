import { FunctionComponent, ReactElement } from 'react';
import CardStyled from './Card.styled';

const CardComponent: FunctionComponent = ({
  children,
}): ReactElement => {
  return (
    <CardStyled>
      <span>{children}</span>
    </CardStyled>
  );
};
export default CardComponent;
