import Character from './Character'
import Result from './Result'
import getEpisode from './services/getEpisode'
import getCharacter from './services/getCharacter'
import { useEffect, useState } from 'react'
import Button from './Button'

import styled from 'styled-components'

export default function Quiz() {
    const [character, setCharacter] = useState('')
  const [userAnswer, setUserAnswer] = useState(false)
  const [episode, setEpisode] = useState('')
   
  useEffect(getRandomCharacter , [])

  function getRandomCharacter() {
    getCharacter()

      .then(({ status, name, id, image, episode, location }) =>{
        const episodes = episode
        const lastEpisode = episodes.filter((_, i, arr) => i === arr.length-1 )
        status !== 'unknown'  ? setCharacter({ status, name, id, image, lastEpisode: lastEpisode[0],location: location.name }) : getRandomCharacter()
      }
      )
      .catch((error) => console.log(error))

    getEpisode(character.lastEpisode)
      .then(({name, id}) =>
        setEpisode({name, id}) //(...character, lastEpisode{name,Id}))
      )
      .catch((error) => console.log(error))
  }

  function resetCharacter() {
    setUserAnswer(false)
    getRandomCharacter()
  }

  function isCorrectAnswer() {
    return userAnswer === character.status
  }

    return (
    <>
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
            lastEpisodeName={episode.name}
            lastEpisodeId={episode.id}
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
</>
)
}