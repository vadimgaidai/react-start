const optionsDefault = {
  'Content-Type': 'application/json',
}

export const request = async ({ url, data, method = 'GET', options }) => {
  const response = await fetch(url, {
    method,
    body: JSON.stringify(data),
    headers: options ?? optionsDefault,
  })
  return response?.ok
    ? {
        ...response.json(),
        request: response,
      }
    : Promise.reject(response)
}
