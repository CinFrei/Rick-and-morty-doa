import styled from 'styled-components'

export default function Result({ name, status, location }) {

    const ResultStyled = styled.div`
    text-align: center;

    h3 {
        margin: 10px 0;
    }
`

    return (
    <ResultStyled>
      <h3>{name + ' is ' + status}</h3>
    </ResultStyled>
  )
}
