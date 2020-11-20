import React, { useState, useEffect } from 'react'
import { Switch, Router, Route, Link, useLocation } from 'react-router-dom'

import { AboutMe, ProjectsAndWork } from './static-pages'
import { BlogPost, PostList, PostPreview } from './blog-posts'

import { GlobalStyle } from './Globals.styled'

import { useWindowSize } from './windowSizeHook'

export const App = () => {
  let windowSize
  const location = useLocation()

  if (typeof window !== 'undefined') {
    windowSize = useWindowSize()
  }
  const [mobNavToggled, toggleMobNav] = useState(true)

  const isMobile = windowSize && windowSize.width < 900

  return (
    <React.Fragment>
      <GlobalStyle />
      <div className="base-layout">
        {!isMobile && (
          <nav className="nav">
            <div>
              <img src="/images/profile-pic.png" className="profile-pic" />
            </div>
            <div>
              <Link to="/">About Me</Link>
            </div>
            <div>
              <Link to="/projects-and-work">Work & Projects</Link>
            </div>
            <div>
              <Link to="/blog">Blog</Link>
            </div>
            {/*<div><a href='/images/CV-Jamie_Weatherby.pdf'>CV</a></div>*/}
          </nav>
        )}
        <section className="main-content">
          <Switch>
            <Route path="/" component={AboutMe} exact />
            <Route path="/blog" component={PostList} exact />
            <Route path="/blog/:slug" component={BlogPost} exact />
            <Route path="/post-preview" component={PostPreview} exact />
            <Route
              path="/projects-and-work"
              component={ProjectsAndWork}
              exact
            />
          </Switch>
        </section>
        {isMobile && (
          <nav className="mobile-nav">
            <div
              className="mobile-nav__toggle"
              onClick={() => toggleMobNav(!mobNavToggled)}
            >
              {mobNavToggled ? '<<' : '>>'}
            </div>
            <div
              className="mobile-nav__links"
              style={{ width: mobNavToggled ? 320 : 0 }}
            >
              <Link to="/">About Me</Link>
              <Link to="/projects-and-work">Work & Projects</Link>
              <Link to="/blog">Blog</Link>
              {/*<div><a href='/images/CV-Jamie_Weatherby.pdf'>CV</a></div>*/}
            </div>
          </nav>
        )}
      </div>
    </React.Fragment>
  )
}
