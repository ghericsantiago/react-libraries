import '@testing-library/react/cleanup-after-each'

import React from 'react'
import {render} from '@testing-library/react'

import { StickyStackContext } from './StickyStackContext';

describe('StickyStackContext', () => {

    const props = {
        items: [],
        styles: [],
        setItem: jest.fn(),
        setStyles: jest.fn()
    }

    it('Should display back the children', () => {
        const {queryByTestId} = render(<StickyStackContext { ...props }><div data-testid="child">Child</div></StickyStackContext>)
        expect(queryByTestId('child')).toBeTruthy();
    })
})