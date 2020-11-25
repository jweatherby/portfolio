import React from 'react'
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom'

import { AboutMe, ProjectsAndWork } from './static-pages'
import { BlogPost, PostList } from './blog-posts'

import { GlobalStyle } from './Globals.styled'

import { StyledNav, StyledMain } from './App.styled'

export const App = () => (
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
        <img src="/images/profile-pic-sq.png" />
      </div>
      <Link to="/">About Me</Link>
      <Link to="/projects-and-work">Work & Projects</Link>
      <Link to="/blog">Blog</Link>
    </StyledNav>
  </React.Fragment>
)
