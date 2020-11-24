import styled from 'styled-components'
import breakpoints from '../breakpoints'

export const StyledProjectsAndWork = styled.section`
  @media (max-width: 550px) {
    h2 {
      text-align: center;
    }
  }
  .work-item {
    display: grid;
    justify-content: space-between;

    .work-logo {
      text-align: center;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }

    .work-company-name {
      margin: 0;
      padding: 0;
    }

    .work-role,
    .work-dates {
      font-size: 0.8em;
    }

    @media (min-width: 550px) {
      grid-template-columns: 100px 400px;
      max-width: 650px;
      grid-column-gap: 50px;
      align-items: center;
      .work-logo {
        height: 70px;
      }
      padding: 25px 25px;
    }
    @media (max-width: 550px) {
      &:not(:last-child) {
        border-bottom: 3px solid #eee;
      }
      .work-logo {
        margin-bottom: 25px;
      }
      padding: 50px 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      .work-logo {
        height: 100px;
      }
      .work-company-name {
        padding-bottom: 25px;
      }
      .work-role,
      .work-dates {
        display: block;
      }
    }
  }
`
