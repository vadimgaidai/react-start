/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ResponseApi {
  payload: any
  status: number
}

interface Fetch {
  url: string
  body?: any
  method?: string
  headers?: {
    [name: string]: string
  }
}

const defaultHeaders = {
  'Content-Type': 'application/json',
}

export async function request({
  url,
  body,
  method = 'GET',
  headers = defaultHeaders,
}: Fetch): Promise<ResponseApi> {
  const response = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers,
  })
  const data = await response.json()

  return response?.ok
    ? {
        payload: { ...data },
        status: response.status,
      }
    : Promise.reject(response)
}
