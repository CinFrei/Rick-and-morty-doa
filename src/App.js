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
      .then(({ status, name, id, image, location }) =>
        setCharacter({ status, name, id, image, location: location.name })
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
          setClass={userAnswer && character.status === 'Dead'}
        />
        {userAnswer && (
          <>
            <p>{isCorrectAnswer() ? 'Correct!' : 'Wrong!'}</p>
            <Result
              name={character.name}
              status={character.status}
              showName={userAnswer}
              location={character.location}
            />
          </>
        )}
      </main>
      <footer>
        {!userAnswer && (
          <>
            <Button
              bgColor="#E70000"
              glowColor="#E70000"
              fontColor="#fff"
              className="Button__dead"
              onClick={(event) =>
                setUserAnswer(event.target.textContent.trim())
              }
            >
              Dead
            </Button>
            <span className="Text__or">or</span>
            <Button
              bgColor="#00ff1e"
              glowColor="#00ff1e"
              className="Button__alive"
              onClick={(event) =>
                setUserAnswer(event.target.textContent.trim())
              }
            >
              Alive
            </Button>
          </>
        )}

        {userAnswer && (
          <Button
            className="Button__next"
            bgColor="#22a1b5"
            glowColor="#00ff1e"
            fontColor="#fff"
            onClick={resetCharacter}
          >
            Next
          </Button>
        )}
      </footer>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  display: grid;
  grid-gap: 2%;
  grid-template-rows: 25% 60% 8%;
  height: 100vh;
  background: #363537;

  header {
    position: relative;
  }
  main {
    padding: 0 20px;
  }
  footer {
    display: grid;
    grid-template-columns: 46% 8% 46%;
    place-items: center;
  }

  p {
    margin: 5px 0;
    text-align: center;
  }

  .title {
    position: absolute;
    top: -40px;
  }

  .subtitle {
    position: absolute;
    top: -60px;
  }

  .Button__next {
    width: 100%;
    grid-column: 1/-1;
    border-right: none;
    border-left: none;
  }

  .Button__dead {
    border-radius: 0px 5px 5px 0px;
  }

  .Button__alive {
    border-radius: 5px 0px 0px 5px;
  }

  .Text__or {
    width: 100%;
    text-align: center;
  }
`

export default App
