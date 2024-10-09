import { useState } from 'react';
import './App.css';
import image from './img/image.png';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    //utilzacion de api 
    const api = await fetch('https://rickandmortyapi.com/api/character/');
    const characterApi = await api.json();
    setCharacters(characterApi.results);//almacenamiento de informacion
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1 className='title'> Rick & Morty</h1>
       {characters? (
        <Characters characters={characters} setCharacters={setCharacters}/>
       ):(
        <>
        <img src={image} alt="Rick & Morty" ></img>
       <button className='btn-search' onClick={reqApi} >
       Buscar personaje</button>
        </>
       )
       }
      

      </header>
    </div>
  );
}

export default App;
