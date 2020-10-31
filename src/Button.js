import styled from 'styled-components/macro'

export default function Button({
  children,
  onClick,
  glowColor,
  bgColor,
  fontColor,
  className,
}) {
  const ButtonStyled = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 45px;
    font-size: 1em;
    font-weight: 600;
    margin: 10px 0;
    border: 3px solid ${glowColor};
    background-color: ${bgColor};
    box-shadow: 0 0 10px 0 ${glowColor};
    color: ${fontColor};
  `
  return <ButtonStyled className={className} onClick={onClick}>{children}</ButtonStyled>
}
