import styled from 'styled-components/macro'

export default function Button({
  children,
  onClick,
  glowColor,
  bgColor,
  fontColor,
}) {
  const ButtonStyled = styled.button`
    width: 44%;
    padding: 6px;
    font-size: 1em;
    font-weight: 600;
    margin: 10px 0;
    border-radius: 5px;
    border: 3px solid ${glowColor};
    background-color: ${bgColor};
    box-shadow: 0 0 10px 0 ${glowColor};
    color: ${fontColor};
  `
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
}
