import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types'
import { Context, Actions } from './Context'

export const StickyStackContext = props => {

    const  { items, styles, setItem, setStyles } = props;

    const _calculateStyles = () => {        
        let newstyles = [];
        items.reduce((height, item, index) => {
          if (window.pageYOffset + height >= item.offsetTop) {
            newstyles[index] = {
              position: 'fixed',
              top: height,
              left: 0,
              width: '100%',
            };
            
            setItem(index, {
                ...items[index],
                isActive: true
            })
          } else {
            newstyles[index] = {
              position: 'static',
            };
            setItem(index, {
                ...items[index],
                isActive: false
            })
          }
          return height + item.offsetHeight;
        }, 0);
    
        

         setStyles({
            ...styles,
            ...newstyles
        })
      }


    useEffect(() => {
        window.addEventListener('scroll', _calculateStyles);
        setTimeout(_calculateStyles, 100)
        return () => {
            window.removeEventListener('scroll', _calculateStyles);
        }
    }, []);


    return (
        <div>
            { props.children }
        </div>
    );
}

StickyStackContext.propTypes = {
    items: PropTypes.array.isRequired,
    styles: PropTypes.array.isRequired,
    setItem: PropTypes.func.isRequired,
    setStyles: PropTypes.func.isRequired
}

export default ( props ) => {

    const {state, dispatch} = useContext(Context);

    const { setStyles, setItem } = Actions;

    const mapStateToProps = {
        items: state.items, 
        styles: state.styles
    }

    const mapDispatchToProps = {
        setItem: ( index, item ) =>  dispatch( setItem(index, item) ),
        setStyles: ( styles ) => dispatch( setStyles( styles ) )
    }

    return StickyStackContext( { ...props, ...mapStateToProps, ...mapDispatchToProps } )
}
