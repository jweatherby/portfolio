import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <article>
    <p>
      When it comes to Software Engineering, it's hard to get started. You study
      it in school. You practice it at home. When you find that first job,
      there's so much more to learn. There are decades of information to catch
      up on. In the scramble to make your code behave, make it efficient, and
      make that deadline, sometimes fundamentals and principles are forgotten.
    </p>
    <p>
      This series will be a reflection of the principles and best practices I've
      learned throughout my 10+ years as a Software Engineer. These articles
      will contain design patterns, snippets of code, and critical decisions
      I've made to build and maintain robust codebases throughout my career.
    </p>
    <p>
      I'm going to show you how to connect the frontend and backend in a
      reasonable way; how to properly structure your code; snippets that will
      keep your code simple and elegant; approaches for test strategy; and best
      practices to keep future you, happy.
    </p>
    <aside>
      Next: <Link to="/blog/the-frontend-stack">The Frontend Stack</Link>
    </aside>
  </article>
)
