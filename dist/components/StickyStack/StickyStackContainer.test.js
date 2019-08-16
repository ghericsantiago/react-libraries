import '@testing-library/react/cleanup-after-each';
import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import { StickyStackContainer } from './StickyStackContainer';
import { StickyStackItem } from './index';
import { Context } from './Context';
describe('StickyStackContainer', () => {
  it('Should register all StickyStackItem to items', async () => {
    const App = () => {
      const {
        state
      } = useContext(Context);
      return React.createElement("div", null, React.createElement("div", null, "should be ", state.items.length), React.createElement(StickyStackItem, null, "Sticky 1"), React.createElement(StickyStackItem, null, "Sticky 2"), React.createElement(StickyStackItem, null, "Sticky 3"), React.createElement("div", null, React.createElement(StickyStackItem, null, "Sticky 4"), React.createElement("div", null, React.createElement(StickyStackItem, null, "Sticky 5"))));
    };

    const {
      queryByText
    } = render(React.createElement(StickyStackContainer, null, React.createElement(App, null)));
    expect(queryByText('should be 5')).toBeTruthy();
  });
});