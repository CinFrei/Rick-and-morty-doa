export default function getCharacter() {
  const characterURL = 'https://rickandmortyapi.com/api/character/?page='

  return fetch(characterURL)
    .then((res) => res.json())
    .then(({ info }) => characterURL + randomInt(info.pages, 1))
    .then((randomPageUrl) => fetch(randomPageUrl))
    .then((res) => res.json())
    .then(({ results }) => results.filter(({ status }) => status !== 'unknown'))
    .then((resultArray) => resultArray[randomInt(resultArray.length)])

  function randomInt(max, min = 0) {
    return min + Math.floor(Math.random() * max)
  }
}
