import Title from './assets/title.png'
import SubTitle from './assets/subtitle(green).png'
import styled from 'styled-components/macro'
import Quiz from './Quiz'

function App() {
  

  
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
        <Quiz/>
      
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
