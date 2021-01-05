import React, { useRef, useEffect, useState } from 'react'

import hljs from 'highlight.js'
import { allPosts } from './posts'
import { StyledBlogPost } from './BlogPost.styled'

import 'highlight.js/styles/monokai.css'

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
  const [Post, setPost] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setPost(allPosts.find(p => p.slug === slug))
  }, [slug])

  useEffect(() => {
    if (blogRef.current) {
      blogRef.current.querySelectorAll('pre code').forEach(block => {
        hljs.highlightBlock(block)
      })
    }
    setLoading(false)
  }, [Post])

  if (loading) {
    return <div>Loading ... </div>
  }

  if (!Post) {
    return <div>Not found</div>
  }
  return (
    <StyledBlogPost ref={blogRef} key={Post.slug}>
      <header>
        <h2>{Post.title}</h2>
      </header>
      <Post.body />
      <footer>
        <div>{Post.tags.join(', ')}</div>
        <div>{Post.dateCreated}</div>
      </footer>
    </StyledBlogPost>
  )
}
