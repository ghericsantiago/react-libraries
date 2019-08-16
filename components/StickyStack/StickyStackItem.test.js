import '@testing-library/react/cleanup-after-each';
import React from 'react';
import { render } from '@testing-library/react';
import { StickyStackItem } from './StickyStackItem';
describe('StickyStackItem', () => {
  const items = [{
    isActive: false,
    offsetTop: 0,
    offsetHeight: 0
  }];
  const styles = [{
    position: 'absolute'
  }];
  const setItem = jest.fn();
  it('Should trigger setItem when component is mounted', () => {
    render(React.createElement(StickyStackItem, {
      items: items,
      styles: styles,
      setItem: setItem
    }, "Child"));
    expect(setItem).toBeCalled();
  });
  it('Should display back the children', () => {
    const {
      queryByTestId
    } = render(React.createElement(StickyStackItem, {
      items: items,
      styles: styles,
      setItem: setItem
    }, React.createElement("div", {
      "data-testid": "child"
    }, "Child")));
    expect(queryByTestId('child')).toBeTruthy();
  });
});