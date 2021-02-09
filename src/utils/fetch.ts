interface Fetch {
  url: string
  body?: unknown
  method?: string
  headers?: {
    [name: string]: string
  }
}

const defaultHeaders = {
  'Content-Type': 'application/json',
}

export async function request<TResponse>({
  url,
  body,
  method = 'GET',
  headers = defaultHeaders,
}: Fetch): Promise<TResponse> {
  const response = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers,
  })
  const data = await response.json()
  console.log(data)

  return response?.ok
    ? {
        ...data,
        ...response,
      }
    : Promise.reject(response)
}
