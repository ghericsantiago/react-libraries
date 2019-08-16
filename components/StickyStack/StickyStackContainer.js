import React from 'react';
import { Provider } from './Context';
import StickyStackContext from './StickyStackContext';
export const StickyStackContainer = props => {
  return React.createElement(Provider, null, React.createElement(StickyStackContext, null, props.children));
};
export default StickyStackContainer;