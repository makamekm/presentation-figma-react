import * as React from 'react';
import { observer } from 'mobx-react';
import { Frame2Generated } from './frame2.generated';

export const Frame2 = observer(props => {
  return <Frame2Generated {...props} />;
});
