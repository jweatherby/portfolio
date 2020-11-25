import React from 'react'

export default () => (
  <article>
    <p>
      As the second part in my series, "Principled Development", I'll be going
      through a simple list of all the essential libraries I use to get a
      project up and running.
    </p>
    <h3>tl;dr</h3>
    <ul>
      <li>
        <a href="https://reactjs.org/" target="_blank">
          ReactJS
        </a>
      </li>
      <li>
        <a href="https://reactrouter.com/" target="_blank">
          React Router
        </a>
      </li>
      <li>
        <a href="https://styled-components.com/" target="_blank">
          Styled Components
        </a>
      </li>
      <li>
        <a href="https://eslint.org/" target="_blank">
          ESLint
        </a>
      </li>
      <li>
        <a href="https://testing-library.com/" target="_blank">
          @testing-library
        </a>
      </li>
    </ul>

    {/* ReactJS */}
    <h3>ReactJS</h3>
    <p>
      Obviously, the framework (or library in this case) you choose will have
      the largest impact on your codebase. There are a lot of great libraries
      out there, including Elm, ClojureScript, Svelte, Angular and VueJs, but
      I've hitched my wagon to{' '}
      <a href="https://reactjs.org/" target="_blank">
        ReactJS
      </a>
      .
    </p>
    <p>
      Coming from JQuery land, the concept of a virtual DOM to manage the HTML
      within the JavaScript functionality sounded amazing. The advantages
      include a more readable codebase through JSX; quick and reliable data
      management; individual components are more testable; can do Server Side
      Rendering easily and it's a mature project backed by a large organization
      (Facebook).
    </p>
    <p>
      There are some disadvantages as well: it's a lot to learn; testing can be
      technically difficult; it's lack of opinions on file structure can yield
      unweildly codebases; and because it's so easy to create complex
      applications, state management can become very complicated and messy.
    </p>
    <p>
      So, I recommend ReactJS because I've dealt with a lot of the nuances, have
      a deep familiarity and have established conventions when dealing with
      ReactJS applications. Starting a big project and trying to learn React on
      the fly is a recipe for disaster. VueJS is well suited for this sort of
      situation.
    </p>
    <p>
      To get up and running with your ReactJS application, I've had success with
      <a
        href="https://reactjs.org/docs/create-a-new-react-app.html"
        target="_blank"
      >
        Create React App
      </a>{' '}
      and{' '}
      <a href="https://razzlejs.org/" target="_blank">
        RazzleJS
      </a>{' '}
      to get started with these projects. The question of which one to use is up
      to whether you want{' '}
      <a
        href="https://medium.com/@baphemot/whats-server-side-rendering-and-do-i-need-it-cb42dc059b38"
        target="_blank"
      >
        Server Side Rendering
      </a>{' '}
      or not.
    </p>

    {/* React Router */}
    <h3>React Router</h3>
    <p>
      If you're building a frontend app, it probably needs different pages. And
      those different pages need to load when different routes are hit. You're
      going to need a routing library and I'm a huge fan of{' '}
      <a href="https://reactrouter.com/" target="_blank">
        React Router
      </a>
      .
    </p>
    <p>
      How you route your app and which library you choose will impact how your
      app is structured. React-router lends itself naturally to how ReactJS has
      been designed. You don't need the routes at the top level, they can be
      inline throughout the code as needed. This might be counter-intuitive at
      first, but you'll find that managing the data is easier as a result,
      especially when dealing with localized components. This structure can make
      complicated pages declarative and they only fetch the appropriate data at
      the right times.
    </p>

    {/* Styled Components */}
    <h3>Styled Components</h3>
    <p>
      This is a contentious one.{' '}
      <a href="https://styled-components.com/" target="_blank">
        Styled components
      </a>{' '}
      are CSS-in-JS, a thought horrifying to a lot of accomplished developers.
      I, however, think it's great. How does it work? You import
      styled-components, assign the styles and then wrap your components like a
      hyper-stylized blanket.
    </p>
    <pre>
      <code className="js">
        {`
import React from 'react'
import styled from 'styled-components'

const StyledBlog = styled.div\`
  font-size: 1rem;
  padding: 15px;
\`

export const Blog = () => (
    <StyledBlog>
        <article>This is a blog post!</article>
    </StyledBlog>
)
`.trim()}
      </code>
    </pre>
    <p>
      It's that easy! And the best part is that it supports nested styles, much
      like SASS or LESS.
    </p>
    <pre>
      <code className="js">
        {`
const StyledBlog = styled.div\`
  font-size: 1rem;
  padding: 15px;
  .blog-image {
    padding: 5px;
    border: 1px solid #000;

    img {                <-- nested styles are not possible in plain css
        width: 200px;
        height: 200px;
    }
  }
\`
`.trim()}
      </code>
    </pre>
    <p>
      Another benefit to <em>styled-components</em> is implied / convention:
      they live next to the components they're styling. Often, I've seen SASS /
      SCSS / LESS separate from the HTML they relate to, meaning you have a
      duplicate filestructure mirroring your JS code (if you were disciplined
      enough to do that). In theory, this works fine. In practice, not so much,
      especially if sweeping changes need to be made. You'll find that you're
      managing two different apps that were once similar, but are no longer.
      <br />
      I'll speak more on this later, when we discuss folder structure.
    </p>

    {/* ESLint */}
    <h3>ESLint </h3>
    <p>
      Code should look consistent with conventional standards. <br />
      <a href="https://eslint.org/" target="_blank">
        ESLint
      </a>{' '}
      is the go to formatter, so make sure it is run on every commit. You can
      use{' '}
      <a href="https://github.com/typicode/husky" target="_blank">
        Husky
      </a>{' '}
      to format your code on each commit. You just need to add the following
      config to your package.json
    </p>
    <pre>
      <code className="json">
        {`
"lint-staged": {
  "*.{js,jsx}": [
    "eslint . --fix"
  ]
},
"husky": {
  "hooks": {
    "pre-commit": "npx lint-staged"
  }
}`}
      </code>
    </pre>

    {/* JS Testing Library */}
    <h3>JS Testing Library</h3>
    <p>
      Every good codebase needs good tests, and this, (super generically named),{' '}
      <a href="https://testing-library.com/" target="_blank">
        testing library
      </a>
      , is the best library for testing React. React can be tested with other
      libraries, but with the introduction of hooks, testing became difficult.
      This library ensures best testing practices and allows you to create unit
      tests for your individual topics. <br />
      We'll chat more about testing at a later time.
    </p>
    <p>
      This testing library comes with all the add-ons you need to test your app:{' '}
    </p>
    <ul>
      <li>
        <a
          href="https://testing-library.com/docs/react-testing-library/intro"
          target="_blank"
        >
          ReactJS Testing Library
        </a>
      </li>
      <li>
        <a href="https://react-hooks-testing-library.com/" target="_blank">
          React Hooks Testing Library
        </a>
      </li>
    </ul>
    <h3>In Conclusion</h3>
    <p>
      These are libraries I always start a new app with. You'll notice there's
      nothing to connect to an API, no authentication, no state management, and
      no form handling. In other words, nothing to handle the business logic of
      the app. Just the fundamentals to get started on a rock solid codebase.
    </p>
  </article>
)
