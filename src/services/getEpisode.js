export default function getEpisode(lastEpisode) {
      return fetch(lastEpisode)
        .then(res => res.json())
    }