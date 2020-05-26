import React from 'react'
import { Link } from 'react-router-dom'
import { allPosts } from './posts'

import './blog-posts.css'

export const PostList = () => {
  return (
    <>
      <h2>Writings</h2>
      <div className="post-list">
        <div>Stay tuned!</div>
        {/* {allPosts.map((post, key) => (
          <div className="post-item" key={key}>
            <div>
              <div>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </div>
              <div>{post.blurb}</div>
              <div className="post-item__meta">
                <div>{(post.tags || []).join(', ')}</div>
                <span>{post.dateCreated}</span>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link to={`/blog/${post.slug}`}>
                <img src={post.imageSrc} />
              </Link>
            </div>
          </div>
        ))} */}
      </div>
    </>
  )
}
