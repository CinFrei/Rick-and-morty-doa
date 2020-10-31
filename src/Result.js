import styled from 'styled-components'

export default function Result({ name, status, location }) {

    const ResultStyled = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    width: 100%;
    height: 10%;
    text-align: center;
    scrollbar-width: none;
    
    .box{
      flex: 1 0 100%;
      scroll-snap-align: start;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }
`

    return (
    <ResultStyled>
      <div className="box" >{name + ' is ' + status.toLowerCase() }&rarr;</div>
      <div className="box" >Last seen in episode</div>
      <div className="box" >&larr;Location</div>
    </ResultStyled>
  )
}
