import { FunctionComponent, ReactElement } from 'react';
import { IDeveloperProfile } from '@src/store/developer/models/profile.entity';
import CardComponent from './Card/Card';
import ImageComponent from './Image/Image';
import TitleComponent from './Title/Title';
import ContentComponent from './Content/Content';
import Skills from './Skills/Skills';
import { Divider } from '../Style/divider.styles';

interface DeveloperProps {
  profile: IDeveloperProfile;
}

const DeveloperComponent: FunctionComponent<DeveloperProps> = ({
  profile,
}): ReactElement => {
  return (
    <CardComponent>
      <div>
        <TitleComponent text={profile.summary} bold />
        <Skills list={profile.skills} />
      </div>
      <ImageComponent src={profile.image} title={profile.name} />
      <TitleComponent text={profile.name} />
      <ContentComponent text="Text here!" />
      <Divider />
      <div>short jokes</div>
    </CardComponent>
  );
};
export default DeveloperComponent;
