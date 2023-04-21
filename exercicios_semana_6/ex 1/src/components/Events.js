import React from 'react'

const Events = () => {
    function handleClick(){
        console.log('Você clicou no botão:)');
    }
  return (
    <div>
<h1>Exercício 1</h1>
<button onClick={handleClick}>Clique aqui</button>
    </div>
  )
}

export default Events

