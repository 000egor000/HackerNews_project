export const baseUrl = 'https://hacker-news.firebaseio.com/v0'
export const newStoriesUrl = `${baseUrl}/topstories.json`
export const itemUrl = `${baseUrl}/item/`

function handleResponse(res) {
  if (!res.ok) {
    return Promise.reject(res)
  }
  return res.json()
}

export const getStories = async () => {
  let params = {
    method: 'GET',
  }

  const data = await fetch(`${newStoriesUrl}`, params).then((res) => {
    return handleResponse(res)
  })

  return data
}

export const getStory = async (id) => {
  let params = {
    method: 'GET',
  }

  const data = await fetch(`${`${itemUrl + id}.json`}`, params).then((res) => {
    return handleResponse(res)
  })

  return data
}

export const getComment = async (commentId) => {
  let params = {
    method: 'GET',
  }

  const data = await fetch(`${`${itemUrl + commentId}.json`}`, params).then(
    (res) => {
      return handleResponse(res)
    }
  )

  return data
}
