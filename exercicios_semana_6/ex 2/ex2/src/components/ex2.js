
import React from 'react';


const Eventarg = (props) => {
    const handleClick = () => {
      alert(`Você clicou no botão :) O argumento é ${props.arg}`);
    };
  

    return (
      <button onClick={handleClick}>Clique aqui</button>
    );
  };
  export default Eventarg;