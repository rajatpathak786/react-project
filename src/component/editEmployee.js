import React, { Component } from 'react';

class EditEmployee extends Component {
render() {
  return(
    <div>
      Edit Page:
      <form id = "editEmp">
        <p>Emp Id: <input type = "Number" id = "empId" /></p>
        <p>Name: <input type = "Text" id = "name" /></p>
        <p>E-Mail: <input type = "Text" id = "email" /></p>
      </form>
        <input type = "Submit" />
    </div>
  )    
}
}
export default EditEmployee;