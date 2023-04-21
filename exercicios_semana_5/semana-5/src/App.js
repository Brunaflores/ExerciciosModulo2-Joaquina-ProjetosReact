import Picture from "./components/Pictures/pictures";
import Apresentacao from "./components/apresentacao/apresentacao"



function App() {


  const meunome="Bruna"
  const minhaidade= 31

  return (
    
    <div>
      <Picture />
      <Apresentacao nome={meunome} idade={minhaidade}/>
      
    </div>
  );
}

export default App;
