export default function getCharacters() {
  const randomCharId = Math.floor(Math.random() * 671) +1
    return fetch(`https://rickandmortyapi.com/api/character/${randomCharId}`)
      .then(res => res.json())
  }