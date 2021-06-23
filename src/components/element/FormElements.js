import React from 'react'

export const Button = ({style, name, style2}) => {

    return (

        <>

            <button type="button" class={`btn btn-${style} ${style2}`}>{name}</button>

        </>

    )
}

export const Select = React.forwardRef(({children,  ...rest }) => {

    return (

        <select {...rest}>

          {children}

        </select> 

    );

  });

export const Input = ({ children, ...rest }) => {

    return (

        <input type="text" class="form-control" {...rest} />

    );
    
  };
