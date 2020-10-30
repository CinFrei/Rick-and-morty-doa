import styled from 'styled-components/macro'

export default function Result({ name, status, location }) {
  return (
    <div>
      <h2>
        {name} is {status}
      </h2>
      <h2>{location}</h2>
    </div>
  )
}
