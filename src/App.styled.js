import styled from 'styled-components'
import breakpoints from './breakpoints'

export const StyledNav = styled.nav`
  grid-area: nav;
  background-color: #333;
  color: #fff;
  font-weight: 600;
  @media (min-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: stretch;
    padding: 50px 0;
    & > * {
      font-size: 1.2rem;
      padding-bottom: 15px;
      color: #fff;
    }
    .profile-pic {
      img {
        border-radius: 25px;
        max-height: 200px;
        max-width: 100%;
      }
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    & > * {
      font-size: 1.1rem;
      padding: 0px 10px;
      color: #fff;
      line-height: 2.2;
    }
    .profile-pic {
      display: none;
    }
  }
`

export const StyledMain = styled.main`
  grid-area: main;
  overflow: hidden auto;
  max-height: 100%;
  @media (min-width: ${breakpoints.mobile}) {
    padding: 50px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: 30px;
  }
`
