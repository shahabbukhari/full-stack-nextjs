export default function fetcher(url: String, data = undefined) {
  return fetch(`${window.location.origin}`, {
    method: data ? 'POST' : 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}
