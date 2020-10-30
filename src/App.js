import { useEffect, useState } from "react";
import Character from "./Character";
import getCharacter from "./services/getCharacter";

function App() {
  const [character, setCharacter] = useState([])

  useEffect(() => {
    getCharacter()
      .then(({ status, name, id, image }) => setCharacter({ status, name, id, image }))
      .catch(error => console.log(error))
  }, [])

  console.log(character)
  return (
    <div className="App">
      <Character key={character.id} name={character.name} imgUrl={character.image} deadOrAlive={character.status} />
    </div>
  );
}

export default App;