export default {
  async post (url, data) {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        // Headers for CORS and cookies and session and JSON
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': 'http://localhost:8080',
        'Access-Control-Allow-Methods': 'GET, POST'
      },
      body: JSON.stringify(data)
    })
      .catch(err => { throw new Error(err) })
    return response.json()
  }
}
