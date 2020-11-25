import React from 'react'

export default () => (
  <React.Fragment key="loading-components">
    <h3>Loading Components</h3>
    <p>
      In React, there are a few different accepted approaches to loading
      components. My preference is through Higher-Order-Components. It provides
      a single place to handle all your data fetching needs, while providing a
      generic error handling and loading UI.
    </p>
    <pre>
      <code className="js">{`
import React, { useState, useEffect } from 'react'
import { handleRequest } from 'api'

const ApiLoader = ({apiPath, render}) => {
  const [requestSTate, setRequestState] = useState({loading: true})

  // onload, automatically trigger the request
  useEffect(() => {
    handleRequest('GET', apiPath).then(({errors, ...data}) => setRequestState({errors, ...data})
  }, [])

  if(requestState.loading){
    return <div className='status-msg loading'>Loading ...</div>
  }
  if(requestState.errors){
    return (
      <div className='status-msg errors'>
        {requestState.errors[0].message}
      </div>
  }
  return render({...data})
}

const User = ({ userId }) =>
  <ApiLoader
    apiPath="/users/\${userId}"
    render={({user}) => <UserForm user={user}/>}
  />

const UserForm = ({user}) => {
  // the component with all the data pre-loaded
}

`}</code>
    </pre>
    <p>
      Using this loader to render components, you don't have to worry about
      loading states, error handling and can focus entirely on the writing the
      components with the data reliably there. This helps with testing and
      cascading API requests.
    </p>
    <h4>How this helps testing</h4>
    <p>
      Using these loading components, you simplify your tests. You only have to
      test this ApiLoader against the API to ensure the simple states are
      triggered with the appropriate API responses. Then, you can test the User
      component strictly on its own, no API integration required. You can use
      E2E tests to test the entire flow of the application, but you're free to
      quickly create a lot of unit tests here.
    </p>
    <h4>Cascading API Requests</h4>
    <p>
      Because of the cascading nature of the loader, you can tree out your API
      Requests. Imagine you have to fetch a number of resources on a given page.
      You need the user, the user's blog, and the posts in a specific blog. One
      approach, would be to load everything at once:
    </p>
    <pre>
      <code className="js">{`
const getUserBlogPosts = async () => {
  const user = await apiRequest('GET', '/user')
  const blog = await apiRequest('GET', '/blog/\${user.blogId}')
  const blogPost = await apiRequest('GET', '/blog/\${blog.id}/posts/\${blog.postIds[0]}')
}
`}</code>
    </pre>
    <p>
      While this is a very busy and probably unreasonable series of requests,
      the point is that you're waiting for all three items to load, and you have
      to manually handle loading and error states in all the different
      components. That also means a lack of granularity in where you display the
      errors / loading UI, rather than the system being designed to handle them
      implicitly. However, with the HOC approach, it can look like this:
    </p>
    <pre>
      <code className="js">{`
const UserInfo = () => <ApiLoader apiPath='/user' render={UserBlog} />
const UserBlog = ({ user }) => (
  <ApiLoader apiPath='/blog/\${user.blogId}' render={BlogPosts} />
)
const BlogPost = ({ blog }) => (
  <ApiLoader
    apiPath='/blog/\${blog.id}/posts/\${blog.postIds[0]}'
    render={PostContent} />
)
`}</code>
    </pre>
    <p>
      Now, you have a UI that cascades API requests automatically. The loading
      spinner takes care of itself in all the components and if any fail, it
      blocks the rest of the components from rendering gracefully.
    </p>
  </React.Fragment>
)
