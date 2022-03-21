import { FunctionComponent, ReactElement } from 'react';
import Image from 'next/image';

interface ComponentProps {
  icon: string;
}

const SkillIconComponent: FunctionComponent<ComponentProps> = ({
  icon,
}): ReactElement => {
  return (
    <Image src={`/static/svg/${icon}.svg`} alt="" width={25} height={25} />
  );
};
export default SkillIconComponent;
