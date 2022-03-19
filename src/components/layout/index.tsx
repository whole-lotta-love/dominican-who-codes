import { FunctionComponent } from 'react';
import { FullWidth } from '../container';

const Layout: FunctionComponent = (props) => {
  return (
    <div id="layout">
      <FullWidth>{props.children}</FullWidth>
    </div>
  );
};
export default Layout;
