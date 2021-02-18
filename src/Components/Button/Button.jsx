import React from 'react'
import Paragraph from './../Paragraph/Paragraph';
import "./Button.css"

const Button = ({children, background="#0E5E6D", color="white", fontWeight, fontSize, style = {}}) => {
    return (
        <button className="button" style={{background, color, ...style  }}>
            <Paragraph color background fontSize={fontSize} fontWeight={fontWeight}>
                {children}
            </Paragraph>
        </button>
    ) 
}

export default Button
