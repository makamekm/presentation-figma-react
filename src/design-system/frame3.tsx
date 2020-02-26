import * as React from 'react';
import { observer } from 'mobx-react';
import { Frame3Generated } from './frame3.generated';

export const Frame3 = observer(props => {
  return <Frame3Generated {...props} />;
});
