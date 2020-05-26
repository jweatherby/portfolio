import React from 'react'
import styled from 'styled-components'

const workItems = [
  {
    logo: '/images/work/points-logo.jpg',
    url: 'https://points.com',
    name: 'Points International',
    dates: 'Aug 2019 - Present',
    role: 'Team Lead',
  },
  {
    logo: '/images/work/g-logo.png',
    url: 'https://www.gadventures.com',
    name: 'G Adventures',
    dates: 'May 2015 - Apr 2019',
    role: 'Software Engineer',
  },
  {
    logo: '/images/work/koffeecup-logo.png',
    url: 'https://koffeecup.net',
    name: 'KoffeeCup',
    dates: 'Oct 2011 - Sep 2014',
    role: 'Software Developer',
  },
  {
    logo: '/images/work/ibm-logo.png',
    url: 'https://ibm.com/ca-en',
    name: 'IBM',
    dates: 'May 2009 - Aug 2010',
    role: 'DB2 Build Team (Intern)',
  },
]

const StyledWork = styled.div`
  article {
    display: grid;
    justify-content: space-between;
    margin: 40px 0;
    grid-template-columns: 100px 1fr;
  }
  .logo-wrapper {
    height: 70px;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  h4 {
    margin-bottom: 0px;
  }
`

export const ProjectsAndWork = () => {
  return (
    <StyledWork>
      <h2>Projects & Work</h2>
      {workItems.map((work, key) => (
        <article key={key} className="work-item">
          <div className="logo-wrapper">
            <img src={work.logo} />
          </div>
          <div>
            <h4>
              <a href={work.url} target="_blank">
                {work.name}
              </a>
            </h4>
            <div>{work.dates}</div>
            <div>{work.role}</div>
          </div>
        </article>
      ))}
    </StyledWork>
  )
}
