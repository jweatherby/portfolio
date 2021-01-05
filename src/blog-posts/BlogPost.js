import React, { useRef, useEffect, useState } from 'react'

import hljs from 'highlight.js'
import { allPosts } from './posts'
import { StyledBlogPost } from './BlogPost.styled'

import 'highlight.js/styles/monokai.css'
import { Metadata } from '../Metadata'

hljs.registerLanguage('python', require('highlight.js/lib/languages/python'))
hljs.registerLanguage('js', require('highlight.js/lib/languages/javascript'))
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'))
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'))

export const BlogPost = ({
  match: {
    params: { slug },
  },
}) => {
  const blogRef = useRef(null)
  const [loading, setLoading] = useState(true)

  const Post = allPosts.find(p => p.slug === slug)

  useEffect(() => {
    if (blogRef.current) {
      blogRef.current.querySelectorAll('pre code').forEach(block => {
        hljs.highlightBlock(block)
      })
    }
    setLoading(false)
  }, [slug])

  if (!Post) {
    return <div>Not found</div>
  }

  return (
    <StyledBlogPost ref={blogRef} key={Post.slug}>
      <Metadata
        title={Post.title}
        description={Post.blurb}
        url={`/blog/${Post.slug}`}
      />
      {loading && <div>Loading ... </div>}
      {!loading && (
        <>
          <header>
            <h2>{Post.title}</h2>
            <div className="post-meta">
              <div>
                <strong>Jamie Weatherby</strong>
              </div>
              <div>{Post.dateCreated}</div>
            </div>
          </header>
          <Post.body />
          <footer className="post-meta">
            Tags:{' '}
            {Post.tags.map((tag, key) => (
              <React.Fragment key={tag}>
                <strong>{tag}</strong>
                {key < Post.tags.length - 1 && ', '}
              </React.Fragment>
            ))}
          </footer>
        </>
      )}
    </StyledBlogPost>
  )
}
