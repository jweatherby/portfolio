import React, { useState, useEffect } from 'react'
import { Switch, Router, Route, Link } from 'react-router-dom'

import { AboutMe, ProjectsAndWork } from './static-pages'
import { BlogPost, PostList, PostPreview } from './blog-posts'

import { GlobalStyle } from './Globals.styled'
// import './App.css'
// import './common.css'

export const App = () => {
  const [windowSize, setWindowSize] = useState({})
  const [mobNavToggled, toggleMobNav] = useState(true)

  // useEffect(() => {
  //   if(window){
  //     window.addEventListener('resize', () => setWindowSize({
  //       height: window.innerHeight,
  //       width: window.innerWidth,
  //     }))
  //   }
  //   return () => window.removeEventListener('resize', setWindowSize)
  // }, [window])

  const isMobile = typeof window !== 'undefined' && windowSize.width < 900

  return (
    <React.Fragment>
      <GlobalStyle />
      <div className="base-layout">
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
