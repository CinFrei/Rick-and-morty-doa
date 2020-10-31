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

  function isCorrectAnswer() {
    return userAnswer === character.status ? true : false
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
            <Button
              bgColor="#E70000"
              glowColor="#E70000"
              fontColor="#fff"
              onClick={(event) => setUserAnswer(event.target.textContent.trim())}
            >
              Dead
            </Button>
            <span className="m3">or</span>
            <Button
              bgColor="#00ff1e"
              glowColor="#00ff1e"
              onClick={(event) => setUserAnswer(event.target.textContent.trim())}
            >
              Alive
            </Button>
          </>
        )}
        {userAnswer && (
          <>
            <p>{isCorrectAnswer() ? 'Correct!' : 'Wrong!'}</p>
            <Result
              name={character.name}
              status={character.status}
              showName={userAnswer}
            />
            <Button
              bgColor="#22a1b5"
              glowColor="#00ff1e"
              fontColor="#fff"
              onClick={resetCharacter}
            >
              Next
            </Button>
          </>
        )}
      </main>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  display: grid;
  grid-gap: 2.5%;
  grid-template-rows: 25% 72.5%;
  height: 100vh;
  background: #363537;

  header {
    position: relative;
  }
  main {
    padding: 0 20px;
  }

  p {
    margin: 5px 0;
    text-align:center;
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
