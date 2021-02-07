interface Request {
  url: string
  data?: unknown
  method: string
  headers: {
    [name: string]: string
  }
}

const defaultHeaders = {
  'Content-Type': 'application/json',
}

export const request = async ({
  url,
  data,
  method = 'GET',
  headers = defaultHeaders,
}: Request): Promise<unknown> => {
  const response = await fetch(url, {
    method,
    body: JSON.stringify(data),
    headers,
  })
  return response?.ok
    ? {
        data: await response.json(),
        request: response,
      }
    : Promise.reject(response)
}
