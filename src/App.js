import { useEffect, useState } from 'react'
import Character from './Character'
import getCharacter from './services/getCharacter'
import Button from './Button'
import Result from './Result'
import Title from './assets/title.png'
import SubTitle from './assets/subtitle(green).png'
import styled from 'styled-components/macro'

function App() {
  const [character, setCharacter] = useState('')
  const [userAnswer, setUserAnswer] = useState(false)

  useEffect(getRandomCharacter, [])

  function getRandomCharacter() {
    getCharacter()
      .then(({ status, name, id, image }) =>
        setCharacter({ status, name, id, image })
      )
      .catch((error) => console.log(error))
  }

  function resetCharacter() {
    setUserAnswer(false)
    getRandomCharacter()
  }

  function showUserAnswer() {
    return userAnswer === character.status ? 'Correct!' : 'Wrong!'
  }

  return (
    <AppStyled className="App">
      <header>
        <h1>
          <img className="title" src={Title} alt="Rick and Morty" />
        </h1>
        <h2>
          <img className="subtitle" src={SubTitle} alt="Dead or Alive" />
        </h2>
      </header>
      <main>
        <Character
          key={character.id}
          name={character.name}
          imgUrl={character.image}
          deadOrAlive={character.status}
          hideName={userAnswer}
        />
        {!userAnswer && (
          <>
            <Button onClick={() => setUserAnswer('Dead')}>Dead</Button>
            <span className="m3">or</span>
            <Button onClick={() => setUserAnswer('Alive')}>Alive</Button>
          </>
        )}
        {userAnswer && (
          <>
            <p>{showUserAnswer()}</p>
            <Result
              name={character.name}
              status={character.status}
              showName={userAnswer}
            />
            <Button onClick={resetCharacter}>Next</Button>
          </>
        )}
      </main>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-rows: 25% 75%;
  height: 100vh;
  overflow: hidden;
  background: #363537;

  header {
    background: #363537;
    position: relative;
  }
  main {
    padding: 0 20px;
    overflow-y: scroll;
  }
  .title {
    position: absolute;
    top: -40px;
  }

  .subtitle {
    position: absolute;
    top: -60px;
  }

  .m3 {
    margin: 3%;
  }
`

export default App
