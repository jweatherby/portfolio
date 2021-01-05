import React from 'react'

export default () => (
  <React.Fragment key="test-strategy">
    <h3>Test Strategy</h3>
    <p>
      Tests are incredibly useful tools in programming, and a whole working
      paradigm has been derived from them: Test-driven-development. The problem
      is when the test strategy is not well optimized for the future. This is
      where the{' '}
      <a
        href="https://martinfowler.com/articles/practical-test-pyramid.html"
        target="_blank"
      >
        Test Pyramid
      </a>{' '}
      comes in.
    </p>
    <figure>
      <img src="https://martinfowler.com/articles/practical-test-pyramid/testPyramid.png" />
    </figure>
    <p>
      The pyramid says that unit tests should be the most populous and provide a
      sense of confidence in your codebase. This can be achieved by writing
      "testable code". Testable code is written with unit tests in mind. It
      means that any function/component only accomplishes one thing and is
      <a
        href="https://www.restapitutorial.com/lessons/idempotency.html"
        target="_blank"
      >
        idempotent
      </a>{' '}
      in nature.
    </p>
    <p>
      The purpose of unit tests is to catch as many scenarios as possible, be
      easy to write and quick to run. Given all these conditions, writing unit
      tests will provide a sense of confidence and hopefully prevent{' '}
      <a
        href="https://smartbear.com/learn/automated-testing/what-is-regression-testing/"
        target="_blank"
      >
        regressions
      </a>{' '}
      in the future.
    </p>
    <p>
      Unit tests should be the groundwork, written to ensure every function with
      business logic behaves as expected. In order to write code that is
      unit-testable, it should be written to be deleted easily. That means a
      function can be removed, along with its tests and the scope of its
      deletion will be limited.
    </p>
    <p>
      Next are the service tests, making sure the components connect together
      and work as expected. IMO, these should test paths that users would
      potentially take in using your app. You can restrict these tests to happy
      paths, as long as the individual components are well unit tested, but more
      test coverage is better. These tests can be more restrictive to future
      changes. They make your code more tightly coupled making the impact of
      future changes a formidable task.
    </p>
    <p>
      The laset type are UI tests, where you automate the code in a visual way.
      This is obviously the slowest because it needs additional technology to
      get up and running and will need to connect to the database as well.
    </p>
    <p>
      In the backend, the distinction between these different types is more
      limited and easier to fathom. On the frontend however, it can be more
      difficult. I think of components as units of work and test those. That's
      why components should be designed to work in isolation and to be easily
      unit testable.
    </p>
  </React.Fragment>
)
