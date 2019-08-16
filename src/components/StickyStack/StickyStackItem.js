import React, { useState, useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types'
import { Context, Actions } from './Context'

export const StickyStackItem = props => {

    const { position: defaultPosition, children, styles, items, setItem } = props;

    const [ height, setHeight ] = useState(null)
    const [ position, setDefaultPosition ] = useState(defaultPosition);

    let ref = useRef(null);

    const register = ( position, offsetTop, offsetHeight ) => {
        setItem( position, { offsetTop, offsetHeight, isActive: false } )
    }

    const getStyle = ( position ) => {
        return styles[position]
    }

    const changeDefaultPosition = ( cb ) => {
        document.querySelectorAll('.sticky-stack-item').forEach(( el, index ) => {
            if(el === ref.current) {
                setDefaultPosition(index)
            }
        })
    }

    useEffect(() => {
        const {offsetTop, offsetHeight}  = ref.current
        register(position, offsetTop, offsetHeight);
        setHeight(offsetHeight);
    }, [ position ]);

    useEffect(() => {
        if( ! defaultPosition ) changeDefaultPosition();
    }, [])

    let classes = ['sticky-stack-item']
    if(items[position] && items[position].isActive) {
        classes.push('is-sticky');
    }
    
    return (
        <div style={{height, zIndex: 1, position: "relative"}} ref={ref} className={classes.join(' ')} data-testid="sticky-stack">
            <div style={ { ...getStyle(position)  } }>
                {children}
            </div>
        </div>
    );
}

StickyStackItem.propTypes = {
    position: PropTypes.number,
    styles: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired,
    setItem: PropTypes.func.isRequired
}


export default ( props ) => {

    const { state, dispatch } = useContext(Context);

    const { setItem } = Actions;

    const mapStateToProps = {
        items: state.items,
        styles: state.styles
    }

    const mapDispatchToProps = {
        setItem: ( position, item ) => dispatch( setItem( position, item ) )
    }

    return StickyStackItem( { ...props, ...mapStateToProps, ...mapDispatchToProps } )
};