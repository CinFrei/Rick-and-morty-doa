export default function Result({ name, status, location }) {
  return (
    <div>
      <h3>{name + ' is ' + status}</h3>
      <h2>{location}</h2>
    </div>
  )
}
