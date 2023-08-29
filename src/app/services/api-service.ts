interface ApiServiceOptions {
  baseUrl: string;
}

interface GetVideoParams {
  query: string;
  per_page: number;
}

function apiService(options: ApiServiceOptions) {
  const headers = { Authorization: 'Xa67yyy1et1568Y20mHxbqCN8S4gzUk1Yx29szoxD4dRZRc6NN0aWqve' }
  return ({
    async get (path: string, params?: GetVideoParams) {
      let url = options.baseUrl + path;

      console.log('params', params);

      if (params) {
        url = `${url}?${new URLSearchParams(params as any)}`
      }

      const response =  await fetch(url, {
        headers,
      })
      const responseData = await response.json()
      console.log('responseData', responseData)

      return responseData;
    }
  })
}

const service = apiService({ baseUrl: 'https://api.pexels.com' })

export default service
