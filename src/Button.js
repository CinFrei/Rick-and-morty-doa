import styled from 'styled-components/macro'

export default function Button({ children, onClick }) {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
}
const ButtonStyled = styled.button`
  width: 44%;
  padding: 6px;
  font-size: 1em;
  margin: 10px 0;
  border-radius: 5px;
`
