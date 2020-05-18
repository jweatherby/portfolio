import React, { useRef, useEffect } from 'react'

import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import './blog-posts.css'

hljs.registerLanguage('python', require('highlight.js/lib/languages/python'))
hljs.registerLanguage('js', require('highlight.js/lib/languages/javascript'))

const print_r = (object, html) => {
  if (html) return '<pre>' + JSON.stringify(object, null, 4) + '</pre>'
  else return JSON.stringify(object, null, 4)
}

export const PostPreview = ({}) => {
  const codeRef = useRef(null)

  useEffect(() => {
    hljs.highlightBlock(codeRef.current)
  }, [])

  return (
    <div className="blog-post">
      <div className="preview__notice">>>> Preview Mode</div>
      <header>
        <h2>Django Mutations in Graphene</h2>
      </header>
      <section>
        <h3>Scene: </h3>
        <p>
          Imagine you're building an app that tracks neighborhood pets. You're
          using Django+PostgreSQL to store your data and have decided to use
          GraphQL as your API solution. You've installed Graphene and have
          hooked up the models so you can query a user and their pets. Now,
          you're building a frontend where users can list, add and remove their
          pets. All that needs to be done now is add the mutations. This is
          where our story starts, mapping the appropriate form fields from the
          input into something consumable by Django's Forms.
        </p>
        <pre>
          <code className="python" ref={codeRef}>
            {`
    import graphene

    class PetInput(graphene.InputObjectType):
        id = graphene.ID()
        pet_type = graphene.Argument(
            verbose_enum('PetType', pet_type_choices)
        )
        pet_foods = graphene.Argument(
            graphene.List(verbose_enum('PetChoices', pet_choices))
        )
`}
          </code>
        </pre>
      </section>
    </div>
  )
}
