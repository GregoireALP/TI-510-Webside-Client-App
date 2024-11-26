export default {
  async post (url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .catch(err => { throw new Error(err) })
    return response.json()
  },
  async delete (url) {
    const response = await fetch(url, {
      method: 'DELETE',
    }).catch(err => { throw new Error(err) })
    return response.json()
  }
}
