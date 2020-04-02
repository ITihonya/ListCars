import React, {Component} from "react";

const widthClass = (Component,className) => {
    return props => {
        return(
            <div className={className}>
                <Component {...props}></Component>
            </div>
        )
    }
}

export default widthClass