import React from 'react'
import './Button.css'
function Button(props) {
    const { varient = 'primarys',size='smalls' ,children, ...rest} = props
    return(
    <button className={`buttons ${varient} ${size}`}{...rest}>{children}</button>
    )
}


export default Button

