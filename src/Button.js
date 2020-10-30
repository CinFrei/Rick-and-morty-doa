import styled from 'styled-components/macro'

export default function Button({ children, onClick }) {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
}
const ButtonStyled = styled.button`
  width: 25%;
  padding: 2px;
  font-size: 1em;
  margin: 10px 0;
`
