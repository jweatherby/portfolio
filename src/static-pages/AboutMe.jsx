import React from 'react'
import { StyledAboutMe } from './AboutMe.styled'

export const AboutMe = () => (
  <StyledAboutMe>
    <h2>About Me</h2>
    <div className="profile-img-wrapper">
      <div className="profile-img" />
    </div>
    <article>
      <p>Hi, I'm Jamie.</p>
      <p>
        I've been a Software Engineer for 10 years, and most recently, a Team
        Lead. I started as an intern at IBM, then worked at an agency in London,
        UK, and finally settled in Toronto Canada. I love travelling, playing
        sports and am an avid casual boardgamer.
      </p>
      <p>
        I'm currently working for{' '}
        <a href="https://points.com" target="_blank">
          Points
        </a>
        , a great company based in Toronto, Canada with a strong focus on
        culture, engineering and work life balance.
      </p>
      <p>
        If you'd like to get in touch, you can find me on{' '}
        <a href="https://twitter.com/_jweatherby" target="_blank">
          Twitter
        </a>{' '}
        or <a href="https://www.linkedin.com/in/jamieweatherby/">LinkedIn</a>.
      </p>
    </article>
  </StyledAboutMe>
)
