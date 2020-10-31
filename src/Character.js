import styled from 'styled-components/macro'
import React from 'react'

export default function Character({ name, imgUrl, hideName }) {
  return (
    <CharacterStyled>
      <img src={imgUrl} alt="" />
      {!hideName && <h3>{name}</h3>}
    </CharacterStyled>
  )
}

const CharacterStyled = styled.section`
  text-align: center;

  img {
    border: 3px solid #00ff1e;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 #00ff1e;
  }
`
