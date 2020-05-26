import { App } from './App'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import React from 'react'
import { hydrate } from 'react-dom'

import mixpanel from 'mixpanel-browser'

mixpanel.init('ad5f4db0302f905e48c35b2d1054b778', {
  enable_collect_everything: true,
})

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
