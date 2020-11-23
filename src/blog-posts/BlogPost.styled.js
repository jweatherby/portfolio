import styled from 'styled-components'

export const StyledBlogPost = styled.div`
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
  blockquote {
    margin: 25px 0;
  }

  footer {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    color: #777;
    font-style: italic;
  }
`
