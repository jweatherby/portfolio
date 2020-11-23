import React, { useState, useEffect } from 'react'
import { Switch, Router, Route, Link, useLocation } from 'react-router-dom'

import { AboutMe, ProjectsAndWork } from './static-pages'
import { BlogPost, PostList } from './blog-posts'

import { GlobalStyle } from './Globals.styled'

import { useWindowSize } from './windowSizeHook'
import { StyledNav, StyledMain } from './App.styled'

export const App = () => {
  let windowSize
  const location = useLocation()

  if (typeof window !== 'undefined') {
    windowSize = useWindowSize()
  }
  // const [mobNavToggled, toggleMobNav] = useState(true)

  // const isMobile = windowSize && windowSize.width < 900

  return (
    <React.Fragment>
      <GlobalStyle />
      <StyledMain>
        <Switch>
          <Route path="/" component={AboutMe} exact />
          <Route path="/blog" component={PostList} exact />
          <Route path="/blog/:slug" component={BlogPost} exact />
          <Route path="/projects-and-work" component={ProjectsAndWork} exact />
        </Switch>
      </StyledMain>
      <StyledNav className="nav">
        <div className="profile-pic">
          <img src="/images/funny-hat.jpg" />
        </div>
        <Link to="/">About Me</Link>
        <Link to="/projects-and-work">Work & Projects</Link>
        <Link to="/blog">Blog</Link>
        {/*<div><a href='/images/CV-Jamie_Weatherby.pdf'>CV</a></div>*/}
      </StyledNav>
    </React.Fragment>
  )
}
