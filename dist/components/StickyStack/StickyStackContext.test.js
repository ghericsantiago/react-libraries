import '@testing-library/react/cleanup-after-each';
import React from 'react';
import { render } from '@testing-library/react';
import { StickyStackContext } from './StickyStackContext';
describe('StickyStackContext', () => {
  const props = {
    items: [],
    styles: [],
    setItem: jest.fn(),
    setStyles: jest.fn()
  };
  it('Should display back the children', () => {
    const {
      queryByTestId
    } = render(React.createElement(StickyStackContext, props, React.createElement("div", {
      "data-testid": "child"
    }, "Child")));
    expect(queryByTestId('child')).toBeTruthy();
  });
});