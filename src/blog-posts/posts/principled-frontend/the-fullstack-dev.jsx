import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <article>
    <p>
      Throughout my career, I've learned a lot as a Software Engineer. I've
      learned how to structure my code, how to design a reasonable API that
      connects seamlessly with a frontend library, how to build custom
      components, and other general best practices. In this series, I'm going to
      showcase best practices I use in every day development.
    </p>
    <p>
      I've come to realize lately that I talk a lot about best practices in my
      day to day, but that's only as good as those who are in earshot. What if I
      was to show it off, use it as a reference guide so others can learn from
      my experiences?
    </p>
    <p>
      I'm going to show you how to connect the frontend and backend in a
      reasonable way; how to structure your code; snippets that will keep your
      code simple and elegant; and best practices to keep future you happy.
    </p>
    <aside>
      Next: <Link to="/blog/the-frontend-stack">The Frontend Stack</Link>
    </aside>
  </article>
)
