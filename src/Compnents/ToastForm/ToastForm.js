
import React from 'react';
import {createPortal} from 'react-dom';
import PropTypes from 'prop-types';
import {style} from './ToastStyle';


export default function ToastForm({show, contents}){
   
    return createPortal (
       <>
        {show && (
            <>
                <Overlay/>
                    <Container>
                    <Wrap>
                    <Header>
                    <Contents>{contents}</Contents>
                    </Header>
                    </Wrap>
                    </Container>
            </>
        )}
        </>,
        document.getElementById('toast-root'),
    );
   
}

ToastForm.propTypes = {
    show:PropTypes.bool,
    contents:PropTypes.string,

}

const {Overlay, Container, Wrap, Header, Contents} = style;