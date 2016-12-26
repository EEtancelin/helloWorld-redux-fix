
import React, { PropTypes } from 'react';

class HelloWorld extends React.Component {

  constructor(props, _railsContext) {
    super(props);
    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
  }
  render() {
    return (
      <div>
        <h3>
          Hello, {this.props.name}!
        </h3>
        <hr />
        <form >
          <label htmlFor="name">
            Say hello to:
          </label>
          <input
            id="name"
            type="text"
            value={this.props.name}
            onChange={(e) => this.props.onNameUpdate(e.target.value)}
          />
        </form>
      </div>
    )
  }
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired
}

export default HelloWorld; 
