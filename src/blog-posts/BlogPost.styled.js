import styled from 'styled-components'

export const StyledBlogPost = styled.div`
  max-width: 900px;
  header {
    margin-bottom: 25px;
  }

  h2 {
    font-weight: 300;
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.75rem;
    color: #777;
    text-transform: uppercase;
    font-weight: 400;
    margin: 50px 0 25px;
  }

  h4 {
    font-size: 1.2rem;
    color: #777;
    margin: 50px 0 25px;
  }

  blockquote {
    border-left: 4px solid #666;
    margin: 0;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    padding-left: 20px;
    font-style: italic;
    font-size: 1.2rem;
    font-weight: 600;
    color: #888;
  }
  p,
  blockquote,
  aside {
    margin: 25px 0;
  }
  aside {
    font-size: 1rem;
    font-style: italic;
  }
  pre code {
    font-size: 0.7rem;
  }
  p code {
    font-size: 0.95rem;
  }
  .post-meta {
    font-size: 1rem;
    color: #777;
    font-style: italic;
  }
`
