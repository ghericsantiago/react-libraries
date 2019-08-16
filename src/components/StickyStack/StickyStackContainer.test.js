import '@testing-library/react/cleanup-after-each'

import React, { useContext } from 'react'
import {render} from '@testing-library/react'

import { StickyStackContainer } from './StickyStackContainer';
import { StickyStackItem } from './index';
import { Context } from './Context';

describe('StickyStackContainer',  () => {
    
    it('Should register all StickyStackItem to items', async () => {
        const App = () => {
            const { state } = useContext(Context)  
            return (
                <div>
                    <div>should be { state.items.length }</div>
                    <StickyStackItem>Sticky 1</StickyStackItem>
                    <StickyStackItem>Sticky 2</StickyStackItem>
                    <StickyStackItem>Sticky 3</StickyStackItem>
                    <div>
                        <StickyStackItem>Sticky 4</StickyStackItem>
                        <div>
                            <StickyStackItem>Sticky 5</StickyStackItem>
                        </div>
                    </div>
                </div>
            )
        }
        const { queryByText } = render(<StickyStackContainer><App /></StickyStackContainer>)
        expect(queryByText('should be 5')).toBeTruthy()
    })
})