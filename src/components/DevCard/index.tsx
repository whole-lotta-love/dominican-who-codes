import { FunctionComponent, ReactElement } from 'react';
import Image from 'next/image';

interface DeveloperProps {
  name: string;
  img: string;
}

const Developer: FunctionComponent<DeveloperProps> = (props): ReactElement => {
  console.log(props.img);
  return (
    <div>
      <figure>
        <Image src={props.img} alt={props.name} width="240" height="240" />
      </figure>
      <div>
        <span>{props.name}</span>
      </div>
    </div>
  );
};
export default Developer;
