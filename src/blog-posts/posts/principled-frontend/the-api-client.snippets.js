export const apiClient = `
const findAuthErrors = () => {
  // handle 401 and 403 errors here
}

const getApiClient = () => {
  const baseUrl = 'https://someapiendpoint.com/'
  const baseHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  const doRequest = async (method, url, { body, headers = {} }, opts = {}) => {
    const reqArgs = {
      method,
      headers: Object.assign(headers, baseHeaders),
      credentials: 'include',
    }
    if (method != 'GET') {
      reqArgs.body = JSON.stringify(body).trim()
    }

    const catchAllError = 'Internal error found.'
    let resp
    try {
      resp = await fetch(baseUrl + url, reqArgs)
    } catch (error) {
      console.log('fetch error', error)
      return { errors: [{ message: catchAllError }] }
    }

    const respData = await resp.json()
    if (respData.errors) {
      return { errors: [{ message: catchAllError }] }
    }

    const graphqlResp = Object.entries(respData.data).reduce(
      (respObj, [key, dict]) =>
        key === 'errors' ? { ...respObj, errors } : { respObj, ...dict },
      {}
    )

    return graphqlResp
  }

  return {
    graphql: (body, opts = { loginRequired: true }) =>
      doRequest('POST', '/graphql/', { body }, opts),
  }
}

export const Api = getApiClient()
`
