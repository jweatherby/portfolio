import styled from 'styled-components'
import breakpoints from '../breakpoints'

export const StyledAboutMe = styled.section`
  max-width: 900px;
  margin-bottom: 50px;
  .profile-img-wrapper {
    display: flex;
    justify-content: center;
  }
  .profile-img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    overflow: hidden;
    background-image: url(/images/profile-pic-sq.png);
    background-position: center;
    background-size: cover;
  }
  @media (min-width: ${breakpoints.mobile}) {
    .profile-img-wrapper {
      display: none;
    }
  }
`
