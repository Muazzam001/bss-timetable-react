import React from 'react';

const Icon = ({className, srcStyle}) => {
    return (
        <>
            <span className={`icon ${className}`} style={srcStyle}/>
        </>
    )
}

export default Icon
