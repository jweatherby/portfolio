import React from 'react'

export default () => (
  <React.Fragment key="submitting-requests">
    <h3>Subitting Requests to the API</h3>
    <p>
      The inverse of loading data from the API is sending it back. This is where
      a form library would come in handy, but is not necessary. I've found that
      a custom React Hook helps immensely with managing the different API
      responses.
    </p>
    <pre>
      <code className="react">
        {`
import { handleRequest } from 'api'
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

  const runQuery = async ({apiPath, method, formBody, onSuccess = {} }) => {
    if (requestState.submitting) {
      console.warn('Already submitting')
      return
    }
    setRequestState({ submitting: true })
    const { errors, ...respData } = await handleRequest(method, apiPath, { body })
    if (errors) {
      const fieldErrors = extractFormFieldErrors(errors)
      return setRequestState({ success: false, errors: extractFormErrors(errors), fieldErrors })
    }
    const { message = 'Success!', timeout = 3000, cta } = onSuccess
    setRequestState({ success: true, message, data: respData })
    if (cta) {
      cta(respData)
    }
    setTimeout(() => {
      setRequestState({})
    }, timeout)
  }
  const reset = () => setRequestState({})
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
  const { runQuery, ...submitState } = useState({ setFieldErrors })
  const onSubmit = async (formVals) => runQuery({
    apiPath: '/users',
    method: 'PATCH',  # or POST, PUT, whatever
    body: formVals,
    onSubmit: {
      cta: (response) => {console.log('Submission response', response)}
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
      states in one state, making it very manageable and predictable.
    </p>
  </React.Fragment>
)
