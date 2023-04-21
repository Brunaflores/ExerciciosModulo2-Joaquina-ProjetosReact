
import React from 'react';

class CicloDeVida extends React.Component{
  constructor(props){
    console.log('Montagem');

    super(props);
    this.state = {
      data: {}
    }
  }

  componentWillMount(){
    console.log('Construindo 1');
  }

  async componentDidMount(){
    console.log('Construindo 2');

    const response = await fetch('https://api.github.com/users/BrunaFlores');
    const data = await response.json();
    this.setState({data: data});
    console.log(data);
  }

  componentWillUnmount(){
    console.log('Desmontagem');
  }

  render(){
    return(
      <div>
        <h1>Ciclo de vida</h1>
        <h2>{this.state.data.login}</h2>
      </div>
    );
  }
}

export default CicloDeVida; 




