import React from 'react';
import { Provider } from './Context'
import StickyStackContext from './StickyStackContext';

export const StickyStackContainer = props => {
    return (
        <Provider>
            <StickyStackContext>
                { props.children }
            </StickyStackContext>
        </Provider>
    );
}

export default StickyStackContainer;