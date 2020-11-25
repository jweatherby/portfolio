import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <React.Fragment key="api-design">
    <h3>Critical API Design</h3>
    <p>
      Here, I'm going to go over what should be considered from the start in
      designing an API.
    </p>
    <h4>Import Strategy</h4>
    <p>
      This goes hand in hand with folder structure. How do you import your code
      to be used across modules. An important consideration here is readability
      and to prevent stuttering. Stuttering is when you repeat the same term
      multiple times when calling an action from another module or file. For
      example:
    </p>
    <pre>
      <code className="python">
        {`
from models import user

user = user.get_user()  # stuttering
`.trim()}
      </code>
    </pre>
    <p>
      In this example, the term <code>user</code> is stuttered. To prevent this,
      there are a couple of options, but they need to established early in the
      project to promote consistency. If you use the other tight-cohesion folder
      structure, you can write it like this:
    </p>
    <pre>
      <code className="python">
        {`
from users import models

user = models.get_user()  # no stuttering
`.trim()}
      </code>
    </pre>
    <p>No more stuttering. Another benefit to a highly cohesive module.</p>
    <p>
      With a highly cohesive module, this is possible because when you're in the{' '}
      <code>users</code> module you know that all the models have to do with the
      localized <code>models</code> file. When another module is accessing it,
      they'll likely need fewer imports, so can be written out individually.
    </p>
    <pre>
      <code className="python">
        {`
# in blog.controllers

from users.models import get_user

user = get_user()
`.trim()}
      </code>
    </pre>
    <h4>Error Handling</h4>
    <p>
      Designing your error handling well means the frontend can more easily
      react to unforeseen effects coming from your API (network issues, database
      issues, etc).
    </p>
    <p>
      I've found a good format for handling errors is a consistent, reserved
      keyword response. I always tack on <code>errors</code> to the response
      when an error is raised, and return a response in the following format:
    </p>
    <pre>
      <code className="bash">
        {`
{
    "errors": [
        {
            "field": <field.the.error.relates.to>,
            "message": <The user friendly message>,
            "code": <internal error reference>
        },
        ...
    ]
}
`.trim()}
      </code>
    </pre>
    <p>
      The reason this format works for is that it can contain multiple errors,
      it is consistent across all the different endpoints, and if it contains
      the field, you know it specifically relates to an input field. If the{' '}
      <code>field</code> is missing, then it can be interpreted as a form error.
    </p>
    <p>
      In a Flask application, I've captured all the errors to ensure they're
      transformed into this predictable format.
    </p>
    <pre>
      <code>
        {`
from flask import Flask

app = Flask(__name__)


@app.errorhandler(404)
def not_found_handler(e):
    return jsonify({
        'errors': _format_error(
            'That url was not found',
            code='NOT_FOUND'
        )
    }), 404


@app.errorhandler(Exception)
def exception_handler(e):
    return jsonify({
        'errors': _format_error(str(e), code='INTERNAL_SERVER_ERROR')
    }), 500


def _format_error(message, field=None, code=None):
    return [{
        'message': message,
        'field': field or '',
        'code': code or '',
    }]
`.trim()}
      </code>
    </pre>
    <p>
      Using the above technique, important bits of code are transformed and
      caught automatically. This way, the following code will always return a
      predictable error response:
    </p>
    <pre>
      <code>{`
from flask import Flask, jsonify

app = Flask(__name__)


@app.route('/hello/<world>')
def handle_hello_world(world):
    if not world:
        return {'errors': _format_error('World not found', field='world')}

    if world == 'hell':
        raise ValueError('The world is not hell')

    return jsonify({'hello': world})


def _format_error(message, field=None, code=None):
    return [{
        'message': message,
        'field': field or '',
        'code': code or '',
    }]
      `}</code>
    </pre>
    <p>
      In this simple little application, all the major error scenarios are
      handled, and the frontend will always know how to react appropriately.
    </p>
  </React.Fragment>
)
