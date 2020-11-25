import React from 'react'

export default () => (
  <React.Fragment key="test-strategy">
    <h3>Anti Patterns</h3>
    <p>The following are common anti-patterns I see regularly in codebases:</p>
    <h4>Exceptions for Flow Control</h4>
    <p>
      Using exceptions to control the flow of code is an anti-pattern. They're
      the equivalent to the antiquated goto statement, creating cognitive jumps
      to other parts of the code. [
      <a href="https://www.joelonsoftware.com/2003/10/13/13/" target="_blank">
        1
      </a>
      ,{' '}
      <a
        href="https://dalibornasevic.com/posts/52-don-t-overuse-exceptions"
        target="_blank"
      >
        2
      </a>
      ,{' '}
      <a
        href="http://wiki.c2.com/?DontUseExceptionsForFlowControl"
        target="_blank"
      >
        3
      </a>
      ].
    </p>
  </React.Fragment>
)
