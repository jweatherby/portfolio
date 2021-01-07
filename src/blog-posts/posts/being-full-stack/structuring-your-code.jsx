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
      And the thing about folder structure: once it has been established, it's
      difficult to change.
    </p>
    <p>
      I'll be comparing two common approaches to code structure: "Function
      Driven" and "Domain Driven", and then showing an interesting effect they
      each have on how much your code will "stutter".
    </p>
    <pre>
      <code className="bash">
        {`
# "Function Driven" project structure

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
      You might recognize this as the classic MVC pattern. It is widely used in
      a lot of very popular frameworks and languages. The reason I'm calling it
      "Function Driven" is because that's how the packages are organized, by
      function. The <code>controllers</code>, <code>models</code> and{' '}
      <code>views</code> represent the separation of concerns, and all the
      relevant logic lives in named modules.
    </p>
    <p>
      Contrast that with a "Domain Driven" folder structure, which is used
      extensively by Django (they break their packages into "apps").
    </p>
    <pre>
      <code className="bash">
        {`
# "Domain Driven" project structure

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
      As you can see, everything here is broken up by "domain". The "users"
      domain is entirely isolated to the <code>users</code> package, same with
      the "blogs".
    </p>
    <p>
      Personally, I prefer the latter, "Domain Driven" project structure and I'm
      going to use the concepts of Cohesion and Coupling to justify why.
    </p>
    <p>
      What are Coupling and Cohesion? They're terms specific to programming.{' '}
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
      </a>{' '}
      refers to the degree to which the elements in a module or package belong
      together.
    </p>
    <p>This is a good rule of thumb, and widely accepted in software:</p>
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
    <pre>
      <code className="bash">
        {`
# "Function Driven" project structure

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
      Let's dissect those and see how they relate to the first, "Function
      Driven" project structure. Function driven folder structure has low
      cohesion. In our example, the modules relating to a domain live in at
      least 3 different packages. If you need to add a <code>birthday</code>{' '}
      field to the user model, you'll need to make the change to all three
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
    <p>
      This is low cohesion; everything related to <code>users</code> is
      scattered throughout the project.
    </p>
    <p>
      What about Coupling? Coupling is how intertwined <code>users</code> is
      with other domains, in this case <code>blogs</code>. This will come down
      to how well the code is written. With this structure, loose coupling is
      difficult to enforce. The reason being that the business logic should live
      in the <code>models</code> (or similar) package. This is a best practice
      that keeps the business logic isolated to one place. The controllers
      should handle incoming requests, the views should display the results,
      there shouldn't be much intermingling. The business logic in the{' '}
      <code>models</code> should be where all the heavy lifting is. It can be
      straightforward, "user" logic that lives in the <code>user</code> module.
      But it gets more complicated than that. What about blogs the user likes?
      What about following a topic related to a series of blogs? Or any other
      logic that intertwines the two. All of a sudden, <code>blogs</code> and{' '}
      <code>users</code> are very tightly coupled, and if not well architected,
      messy. So this approach can be loosely coupled, but that requires
      discipline and a considered approach when writing the code.
    </p>
    <pre>
      <code className="bash">
        {`
# "Domain Driven" project structure

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
      Now, how does "Domain Driven" folder structure hold up to cohesion and
      coupling? Regarding cohesion, it's inherently as cohesive as possible.
      Everything related to <code>users</code> lives in the <code>users</code>{' '}
      package. If you need to add the <code>birthday</code> field to the user
      model, all the work is isolated to the same package. This has the added
      benefit of decreasing the cognitive distance when reading the codebase and
      shortens tracing a request's lifecycle. When debugging something in this
      codebase, you don't have to step through the 3 different packages (
      <code>controllers/users</code>, <code>models/users</code>,{' '}
      <code>views/users</code>). When you know the endpoint, you go into the{' '}
      <code>users</code> package and everything is there.
    </p>
    <p>
      "Domain Driven" structure also encourages loose coupling. In our example,{' '}
      <code>users</code> and <code>blogs</code> are automatically isolated from
      each other. It requires a conscious effort to access each other's
      functionality. There could be a lot of dependencies between the two; in
      which case, they will still be tightly coupled, but that's up to the
      design and how well thought out the code is. So, given this alternative,
      "Domain Driven" approach to structuring your code, loose coupling is
      inherently encouraged, but not guaranteed.
    </p>
    <p>
      This visualization is a great way to conceptualize your code and what you
      should be striving for as a more organized, coherent system:
    </p>
    <p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Good%2C_bad_apps.png/691px-Good%2C_bad_apps.png" />
    </p>
    <p>
      When it comes down to it, the latter, "Domain Driven" folder structure
      helps to increase cohesion and decrease coupling. This is{' '}
      <a href="https://djangobook.com/mdj2-django-structure/" target="_blank">
        why Django is structured like this
      </a>
      . Personally, my projects have all fared better since adopting this
      approach. And as we discussed earlier:
    </p>
    <blockquote>
      <strong>Good software design has high cohesion and low coupling.</strong>
    </blockquote>
    <h4>Import Strategy & Stuttering</h4>
    <aside>
      In the following examples, I'll be using functionional programming to
      provide examples at the module and package levels.
    </aside>
    <p>
      Import strategy goes hand in hand with folder structure. An important
      consideration here is readability and to prevent <em>stuttering</em>.
      Stuttering is when you repeat the same term multiple times when calling an
      action from another module or file. For example, if written with the{' '}
      <em>Function Driven</em> folder structure from above:
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
      enough. To offset this, you can remove the stuttering from the function
      names, like so:
    </p>
    <pre>
      <code className="python">
        {`
# controllers/users.py

from models import user

user = user.get()  # no stuttering, bad function name.
`.trim()}
      </code>
    </pre>
    <p>
      In this case, you needed to create a bad function name to compensate for
      the stuttering. A function should not be named <code>get</code>,
      especially just to compensate for the stuttering incurred. At this point,
      it is better to have the stuttering than function names like this.
    </p>
    <p>
      Alternatively, you can import all the functions in one at a time, but this
      can grow unwieldly if a lot of code needs to be imported.
    </p>
    <pre>
      <code className="python">
        {`
# controllers/users.py

from models.user import (
  get_user,
  ...  # can grow unwieldly
)

user = get_user()  # no stuttering
`.trim()}
      </code>
    </pre>
    <p>
      Let's take a look at the alternative approach, "Domain Driven" structure.
      In this case, <code>controllers</code>, <code>models</code> and{' '}
      <code>views</code> will live under the <code>users</code> namespace. This
      is what those imports will look like here:
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
      No more stuttering and no compromise on the function names. And, if you
      choose to import the individual functions, you can do that easily with the
      flexibility to import the individual functions or the module as a
      namespace.
    </p>
    <p>
      Within the <em>Domain Driven</em> package, this is possible because all
      the models relate to <code>users</code> so you can namespace it as such.
      When another package is accessing it, they'll likely need access to fewer
      bits of functionality, so they can be imported individually.
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
      While these examples are written in python, they apply across the board,
      especially in JavaScript, where folders are broken out in the widely
      taught "Function Driven" style.
    </p>
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
