import React from 'react'
import { Link } from 'react-router-dom'
import { allPosts } from './posts'
import { StyledPostList } from './PostList.styled'

export const PostList = () => (
  <StyledPostList>
    <h2>Blog Posts</h2>
    <div className="post-list">
      {allPosts
        .filter(p => p.published)
        .map((post, key) => (
          <div className="post-item" key={key}>
            <div className="post-info">
              <div>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </div>
              <div>{post.blurb}</div>
              <div className="post-item__meta">
                <div>{(post.tags || []).join(', ')}</div>
                <span>{post.dateCreated}</span>
              </div>
            </div>
            <div className="post-img">
              <Link to={`/blog/${post.slug}`}>
                <img src={post.imageSrc} />
              </Link>
            </div>
          </div>
        ))}
    </div>
  </StyledPostList>
)
