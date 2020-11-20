import React from 'react'

export const PostTemplate = ({ title, children }) => (
  <div className="blog-post">
    <header>
      <h2>{title}</h2>
    </header>
    <article>{children}</article>
  </div>
)
