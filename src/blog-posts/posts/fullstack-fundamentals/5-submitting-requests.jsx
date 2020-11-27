import React from 'react'

export default () => (
  <React.Fragment key="submitting-requests">
    <h3>Submitting Requests to the API</h3>
    <p>
      The inverse of loading data from the API is sending it back. This is where
      a form library would come in handy, but is not necessary. I've found that
      a custom React Hook helps immensely with managing the different API
      responses.
    </p>
    <pre>
      <code className="react">
        {`
import { apiRequest } from 'api'
import { useState } from 'react'

// extract inline errors
const extractFormFieldErrors = errors =>
  errors
    .map(
      ({ field, message }) => field && { name: field, message, type: 'manual' }
    )
    .filter(err => !!err)

// extract errors without a 'field' as form errors
const extractFormErrors = errors =>
  errors
    .map(({ field, message }) => !field && { message, type: 'manual' })
    .filter(err => !!err)

export const useApi = () => {

  const [requestState, setRequestState] = useState({})
  const reset = () => setRequestState({})

  const runQuery = async ({apiPath, method, formBody, onSuccess = {} }) => {

    // prevent duplicate submissions
    if (requestState.submitting) {
      console.warn('Already submitting')
      return
    }
    setRequestState({ submitting: true })

    // Handle the API request
    const { errors, ...respData } = await apiRequest(method, apiPath, { body })

    // if any errors, handle them here and return that response
    if (errors) {
      const fieldErrors = extractFormFieldErrors(errors)
      const formErrors = extractFormErrors(errors)
      return setRequestState({ success: false, errors: formErrors, fieldErrors })
    }

    // if successful, provide a re-usable message and the success flag
    const { message = 'Success!', timeout = 3000, callback } = onSuccess
    setRequestState({ success: true, message, data: respData })

    setTimeout(reset, timeout)

    // if the user specified something on success, invoke that with the Api Response
    if (callback) {
      callback(respData)
    }
  }

  // return the methods and state to re-use this hook
  return { runQuery, reset, ...requestState }
}
`.trim()}
      </code>
    </pre>
    <p>
      This API hook is a composable function, able to associate with any form
      function. It abstracts the error handling, prevents duplicate requests,
      and handles success callbacks. And it doesn't require a whole other
      library. It can be called like this:
    </p>
    <pre>
      <code className="react">
        {`
const Form = () => {
  const { runQuery, ...submitState } = useState()
  const onSubmit = async (formVals) => runQuery({
    apiPath: '/users',
    method: 'PATCH',  # or POST, PUT, whatever
    body: formVals,
    onSuccess: {
      callback: (response) => {console.log('Submission response', response)}
    }
  })

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-field'>
        <div>
          <label> Username </label>
          <input type='text' name='username'>
        </div>
        <div className='error-msg'>
          {fieldErrors.username.message && <span>{fieldErrors.username.message}</span>}
        <div>
      </div>
      <div className='form-actions'>
        {/* handle api state messages */}
        <div>
          {submitState.loading && <div className='status-msg loading' />}
          {!!submitState.errors?.length && (
            <div className='status-msg error'>{submitState.errors[0].message}</div>
          )}
        </div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  )
}
`.trim()}
      </code>
    </pre>
    <p>
      As you can see, it is very straightforward and localizes all the request
      states into one state variable, making it very manageable and
      predicatable.
    </p>
  </React.Fragment>
)
