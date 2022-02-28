import { IDeveloper } from '@src/modules/devs/dtos/developer.dto';
import { FunctionComponent } from 'react';

const Layout: FunctionComponent<{ devs: IDeveloper[] }> = ({
  devs,
}): JSX.Element => {
  return (
    <>
      <div>
        {devs.map((dev: IDeveloper, key: number) => (
          <div key={key}>{dev.name}</div>
        ))}
      </div>
    </>
  );
};
export default Layout;
