import React from 'react'

export default () => (
  <React.Fragment key="api-client">
    <h3>The API Client</h3>
    <p>
      Now, the frontend then needs to be able to listen to this API. There are
      various libraries out there that handle this, but I've always used my own.
      In JavaScript, the <code>fetch</code> library is widely supported by all
      major browsers and can be easily abstracted away to fit our needs.
      Wrapping it in a client like this ensures that all the requests are
      handled at the source. This api function will format the error and always
      return a predictable response.
    </p>
    <pre>
      <code>
        {`
const baseUrl = API_ROOT_URL
const baseHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
}

const handleRequest = async (method, url, { body, headers = {} }) => {
  const reqArgs = {
    method,
    headers: Object.assign(headers, baseHeaders),
    credentials: 'include',  // when dealing with cookies / authentication
  }
  if (method != 'GET') {
    reqArgs.body = JSON.stringify(body).trim()
  }

  let resp
  const catchAllError = 'Internal error, try again.'
  try {
    resp = await fetch(baseUrl + url, reqArgs)  // handle the api request
  } catch (error) {
    // something went wrong with the request that
    // even the api could not handler
    return { errors: [{ message: catchAllError }] }
  }

  const respData = await resp.json()

  // the json could not be decoded
  if (respData.errors) {
    return { errors: [{ message: catchAllError }] }
  }

  return respData  // return all errors and data from the api response
}`.trim()}
      </code>
    </pre>
    <p>
      This code, combined with how the api handles errors, will catch and
      transform everything into a predictable error response. When you have
      this, you no longer have to worry about error handling and can focus on
      the more interesting stuff.
    </p>
  </React.Fragment>
)
