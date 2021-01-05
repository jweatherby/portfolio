import React from 'react'
import { Metadata } from 'Metadata'
import { StyledProjectsAndWork } from './ProjectsAndWork.styled'

const workItems = [
  {
    logo: '/images/work/points-logo.png',
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
    role: '',
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

export const ProjectsAndWork = () => {
  return (
    <StyledProjectsAndWork>
      <Metadata title="Projects & Work" />
      <h2>Projects & Work</h2>
      {workItems.map((work, key) => (
        <article key={key} className={`work-item ${work.slug}`}>
          <div className="work-logo">
            <img src={work.logo} />
          </div>
          <div>
            <h4 className="work-company-name">
              <a href={work.url} target="_blank">
                {work.name}
              </a>
            </h4>
            <strong className="work-role">{work.role}</strong>{' '}
            <em className="work-dates">{work.dates}</em>
          </div>
        </article>
      ))}
    </StyledProjectsAndWork>
  )
}
