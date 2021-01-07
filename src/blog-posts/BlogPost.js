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

  const Post = allPosts.find(p => p.slug === slug)

  useEffect(() => {
    if (blogRef.current) {
      blogRef.current.querySelectorAll('pre code').forEach(block => {
        hljs.highlightBlock(block)
      })
    }
  }, [blogRef, slug])

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
      <footer>
        <div className="post-tags">
          <strong>Tags:</strong>{' '}
          {Post.tags.map((tag, key) => (
            <React.Fragment key={tag}>
              {tag}
              {key < Post.tags.length - 1 && ', '}
            </React.Fragment>
          ))}
        </div>
        <div className="post-socials">
          <p>
            Like what you're reading? Retweet, follow, or send me a message{' '}
            <a href="https://twitter.com/_jweatherby" target="_blank">
              on Twitter.
            </a>
          </p>
        </div>
      </footer>
    </StyledBlogPost>
  )
}
