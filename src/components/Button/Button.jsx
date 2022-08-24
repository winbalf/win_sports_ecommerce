import React from 'react'


const Button = ({value, variant}) => {
    return(
        // <button className={estilos[variant]}>{value}</button>
        <button className={variant}>{value}</button>
    );
}

export default Button;