import styled from 'styled-components'

export const StyledPostList = styled.div`
  .post-item {
    @media (min-width: 600px) {
      display: grid;
      grid-template-areas: 'info image';
      grid-template-columns: 1fr 200px;
    }
    @media (max-width: 600px) {
      display: grid;
      grid-template-areas: 'image' 'info';
      text-align: center;
    }
    margin: 30px 0;
    font-size: 16px;
  }

  .post-info {
    grid-area: info;
    font-size: 1.25rem;
  }

  .post-img {
    grid-area: image;
    display: flex;
    justify-content: center;
    img {
      max-width: 200px;
      max-height: 80px;
    }
    margin-bottom: 25px;
  }

  .post-item__meta {
    font-size: 1rem;
    color: #aaa;
  }

  .post-item__tag {
    margin: 5px 5px 5px 0px;
  }
`
