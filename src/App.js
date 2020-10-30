import { useEffect, useState } from 'react'
import Character from './Character'
import getCharacter from './services/getCharacter'
import Button from './Button'
import Result from './Result'
import Title from './assets/title.png'

function App() {
  const [character, setCharacter] = useState('')
  const [userAnswer, setUserAnswer] = useState(false)

  useEffect(() => {
    getCharacter()
      .then(({ status, name, id, image }) =>
        setCharacter({ status, name, id, image })
      )
      .catch((error) => console.log(error))
  }, [])

  console.log(character)
  return (
    <div className="App">
      <header>
        <img src={Title} alt="" />
      </header>
      <h1>Dead and Alive | Quiz</h1>
      <Character
        key={character.id}
        name={character.name}
        imgUrl={character.image}
        deadOrAlive={character.status}
      />
      <Button onClick={() => setUserAnswer(true)}>Dead</Button>
      <span>or</span>
      <Button onClick={() => setUserAnswer(true)}>Alive</Button>
      {userAnswer && (
        <>
          <Result name={character.name} status={character.status}></Result>
          <Button onClick={() => setUserAnswer(false)}>Next</Button>
        </>
      )}
    </div>
  )
}

export default App
