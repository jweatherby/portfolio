import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <React.Fragment key="api-design">
    <p>
      This is the latest article in my series,{' '}
      <Link to="/blog/being-full-stack">Being Full Stack</Link>.
    </p>
    <p>
      Here, I'm going to go over what should be considered from the start in
      designing an API.
    </p>
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
      <code>
        {`
from flask import Flask, jsonify

app = Flask(__name__)


@app.route('/hello/<world>')
def handle_hello_world(world):
    if not world:
        return {'errors': _format_error('World not found', field='world')}

    if world == 'invalid':
        raise ValueError('The world cannot be invalid')

    return jsonify({'hello': world})


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
      In this simple little application, all the major error scenarios are
      handled, and the frontend will always know how to react appropriately.
    </p>
    {/* <aside>
      Next: <Link to="/blog/critical-api-design">Critical API Design</Link>
    </aside> */}
  </React.Fragment>
)
