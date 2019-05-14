import React, { Component } from 'react';

class AddEmployee extends Component {
  render() {
    return (
      <div>
        <form id = 'addEmp'>
          <p>Name: <input type = "Text" id = "name"/></p>
          <p>E-Mail: <input type = "Text" id = "email"/></p>
        </form>
          <input type = "Submit" />
      </div>
    )
  }
}

export default AddEmployee;