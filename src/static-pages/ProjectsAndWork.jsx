import React from 'react'
import styled from 'styled-components'

const workItems = [
  {
    logo: '/images/work/points-logo.jpg',
    url: 'https://points.com',
    slug: 'points',
    name: 'Points International',
    dates: 'Aug 2019 - Present',
    role: 'Team Lead',
  },
  {
    logo: '/images/work/showboard.png',
    url: 'https://www.showboard.ca',
    slug: 'showboard',
    name: 'Showboard',
    dates: 'Covid Project',
    role: 'Founder',
  },
  {
    logo: '/images/work/g-logo.png',
    url: 'https://www.gadventures.com',
    slug: 'gadventures',
    name: 'G Adventures',
    dates: 'May 2015 - Apr 2019',
    role: 'Software Engineer',
  },
  {
    logo: '/images/work/koffeecup-logo.png',
    url: 'https://koffeecup.net',
    slug: 'koffeecup',
    name: 'KoffeeCup',
    dates: 'Oct 2011 - Sep 2014',
    role: 'Software Developer',
  },
  {
    logo: '/images/work/ibm-logo.png',
    url: 'https://ibm.com/ca-en',
    slug: 'ibm',
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
    grid-column-gap: 50px;
    align-items: center;
    align-content: center;
  }
  .logo-wrapper {
    text-align: center;
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
        <article key={key} className={`work-item ${work.slug}`}>
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
