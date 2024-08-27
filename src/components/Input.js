import React from 'react'


const Input = ({type = 'text',placeholder = '',className = '',  id = '', ...props }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
       
       
        className={className}
        id={id}
        {...props}
      />
    );
  };


export default Input