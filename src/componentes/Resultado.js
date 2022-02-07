import React from "react";
import {TransitionGroup, CSSTransition } from "react-transition-group"

function Resultado (props) {

    const resultado = props.resultado
    
    return (
        <div className = "gran-total">
            <TransitionGroup component="span" className="resultado__numero">
                <CSSTransition
                    classNames="resultado"
                    key={resultado}
                    timeout={{ enter: 500, exit: 500 }}>
                    <span> $ {resultado}</span>
                </CSSTransition>  
            </TransitionGroup>
        </div>
    );
}

export default Resultado