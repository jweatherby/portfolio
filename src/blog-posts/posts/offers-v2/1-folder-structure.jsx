import React from 'react'

export default () => (
  <React.Fragment key="folder-structure">
    <h3>Folder Structure</h3>
    <p>
      The first thing to consider when creating a decent codebase is folder
      structure. That is, how you design the modules. Good software design has
      high cohesion and low coupling [
      <a
        href="http://freefeast.info/difference-between/difference-between-cohesion-and-coupling-cohesion-vs-coupling/"
        target="_blank"
      >
        1
      </a>
      ,{' '}
      <a href="https://stackoverflow.com/a/3085419" target="_blank">
        2
      </a>
      ]. However, the classic MVC pattern violates this rule. In my experience,
      MVC has traditionally resulted in this type of folder structure:
    </p>
    <pre>
      <code className="bash">
        {`
├── controllers
│   ├── __init__.py
│   ├── buckets.py
│   └── contracts.py
├── models
│   ├── __init__.py
│   ├── buckets.py
│   └── contracts.py
└── views
    ├── __init__.py
    ├── buckets.py
    └── contracts.py
`.trim()}
      </code>
    </pre>
    <p>
      This structure is the opposite of what is recommended, resulting in low
      cohesion and high coupling between the different modules. In an ideal
      world, similar functionality would be grouped together, like so:
    </p>
    <pre>
      <code className="bash">
        {`
├── buckets
│   ├── __init__.py
│   ├── controllers.py
│   ├── models.py
│   └── views.py
└── contracts
    ├── __init__.py
    ├── controllers.py
    ├── models.py
    └── views.py
`.trim()}
      </code>
    </pre>
    <p>
      This way, when you're dealing with <code>Buckets</code>, it's a highly
      cohesive module and loosely coupled from <code>Contracts</code>.
    </p>
  </React.Fragment>
)
