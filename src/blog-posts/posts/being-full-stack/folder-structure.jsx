import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <article>
    <p>
      This is the latest article in my series,{' '}
      <Link to="/blog/being-full-stack">Being Full Stack</Link>.
    </p>
    <p>
      Here, I want to talk about folder structure. In quite a few instances,
      you'll spend the majority of your time reading code, not necessarily
      writing it. While it's important to write good, coherent, well documented
      code, an often overlooked aspect is a well thought out folder structure.
    </p>
    <p>
      When thinking about folder structure, there are two concepts I'll be
      referring to: "Coupling" and "Cohesion".{' '}
      <a
        href="https://en.wikipedia.org/wiki/Coupling_(computer_programming)"
        target="_blank"
      >
        Coupling
      </a>{' '}
      is the amount of interdependence between two pieces of functionality.{' '}
      <a
        href="https://en.wikipedia.org/wiki/Cohesion_(computer_science)"
        target="_blank"
      >
        Cohesion
      </a>
      , refers to the degree to which the elements in a module or package belong
      together.
    </p>
    <p>A good rule of thumb, widely accepted in programming, is that:</p>
    <blockquote>
      <strong>Good software design has high cohesion and low coupling.</strong>{' '}
      [
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
      ]
    </blockquote>
    <p>
      However, the classic MVC pattern often violates this rule. In my
      experience, MVC has traditionally resulted in this type of folder
      structure, or "Functionality driven".
    </p>
    <pre>
      <code className="bash">
        {`
├── controllers
│   ├── users.py
│   └── blogs.py
├── models
│   ├── users.py
│   └── blogs.py
└── views
    ├── users.py
    └── blogs.py
`.trim()}
      </code>
    </pre>
    <p>
      This structure is the opposite of what is recommended, often resulting in
      low cohesion and high coupling between the different packages. If you need
      to add a <code>birthday</code> field to a request in the user model, how
      many different packages do you have to apply the change to? This has low
      cohesion, and in this design, you need to make the change to all three
      different packages:
    </p>
    <ul>
      <li>
        <code>controllers/users</code>: to accept the input arguments
      </li>
      <li>
        <code>models/users</code>: to save to the database and handle any app
        logic
      </li>
      <li>
        <code>views/users</code>: where the user birthday will be displayed
      </li>
    </ul>
    <p>Given an alternative structure, this is what it would look like:</p>
    <pre>
      <code className="bash">
        {`
├── users
│   ├── __init__.py
│   ├── controllers.py
│   ├── models.py
│   └── views.py
└── blogs
    ├── __init__.py
    ├── controllers.py
    ├── models.py
    └── views.py
`.trim()}
      </code>
    </pre>
    <p>
      This type of package structure, "Domain Driven" is used extensively by
      Django and{' '}
      <a href="https://djangobook.com/mdj2-django-structure/" target="_blank">
        increases cohesion and decreases coupling
      </a>
      . In this instance, the code is much more cohesive and if you need to add
      the <code>birthday</code> field to the user model, all the work is
      isolated to the same package. This also decreases the cognitive distance
      when tracing a request's lifecycle and saves you having to step through
      the 3 different packages (<code>controllers/users</code>,{' '}
      <code>models/users</code>, <code>views/users</code>). When you know the
      endpoint, you know exactly which package you're working with.
    </p>
    <p>
      In addition to increasing the cohesion in a single package,{' '}
      <em>Domain Driven</em> packaging also encourages loose coupling. All of
      the functionality related to <code>users</code> lives independently in its
      own package and and what is needed by other packages can be exposed as
      necessary. This forces you to carefully consider where new functionality
      should live. With the traditional <em>Functional driven</em> packages,
      most of the business logic would live within the <code>models</code>,
      which if properly designed, will have low coupling; but, in my experience,
      often leads to highly coupled code that is less well thought out.
    </p>
    <p>
      In the end, you want to structure your code so it follows these rules:{' '}
    </p>
    <p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Good%2C_bad_apps.png/691px-Good%2C_bad_apps.png" />
    </p>
    <h3>Import Strategy</h3>
    <p>
      Import strategy goes hand in hand with folder structure. An important
      consideration here is readability and to prevent <em>stuttering</em>.
      Stuttering is when you repeat the same term multiple times when calling an
      action from another module or file. For example, if written with{' '}
      function-driven folders:
    </p>
    <pre>
      <code className="python">
        {`
# controllers/users.py

from models import user

user = user.get_user()  # stuttering
`.trim()}
      </code>
    </pre>
    <p>
      In this example, the term <code>user</code> is stuttered. It may seem
      trivial now, but it can become tedious and distracting if it happens often
      enough. Alternatively, you can import all the functions in one at a time,
      but this can grow unwieldly if a lot of code needs to be imported.
    </p>

    <pre>
      <code className="python">
        {`
# controllers/users.py

from models.user import get_user

user = get_user()  # stuttering
`.trim()}
      </code>
    </pre>
    <p>
      However, if you use the <em>Domain driven</em> folder structure, you can
      write it more simply as:
    </p>
    <pre>
      <code className="python">
        {`
# users/controllers.py

from users import models

user = models.get_user()  # no stuttering

OR

from users.models import get_user

user = get_user()  # still no stuttering
`.trim()}
      </code>
    </pre>
    <p>
      No more stuttering. And, if you choose to import the individual functions,
      you can do that easily with the flexibility to import the individual
      functions or the module as a namespace.
    </p>
    <p>
      Within the <em>Domain Driven</em> package, this is possible because all
      the models relate to <code>users</code> so you can namespace it as such.
      When another module is accessing it, they'll likely need fewer imports, so
      they can be written out individually.
    </p>
    <pre>
      <code className="python">
        {`
# blog/models.py

from users.models import get_user

user = get_user()
`.trim()}
      </code>
    </pre>
    <p>
      By keeping these principles in mind when writing and architecting code,
      those reading your code in future will have an easy time grasping the
      intent and be able to hit the ground running.
    </p>
    {/* <aside>
      Next: <Link to="/blog/critical-api-design">Critical API Design</Link>
    </aside> */}
  </article>
)
