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
        I've been a Software Engineer for 10 years, focusing primarily on Python
        and JavaScript.
      </p>
      <p>
        I'm currently working for{' '}
        <a href="https://points.com" target="_blank">
          Points
        </a>
        , a great company with a strong focus on culture, engineering and work
        life balance. Outside of work, I play a lot of sports and boardgames. If
        you'd like to reach out, you can find me on{' '}
        <a href="https://twitter.com/_jweatherby" target="_blank">
          Twitter
        </a>{' '}
        or <a href="https://www.linkedin.com/in/jamieweatherby/">LinkedIn</a>.
      </p>
    </article>
  </StyledAboutMe>
)
