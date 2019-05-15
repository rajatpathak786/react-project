import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class EditEmployee extends Component {
render() {
  return(
    <Grid 
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}>
      <div>
        Edit Page:
        <form id = "editEmp">
          <p>Emp Id: <input type = "Number" id = "empId" /></p>
          <p>Name: <input type = "Text" id = "name" /></p>
          <p>E-Mail: <input type = "Text" id = "email" /></p>
        </form>
          <Button variant = "contained" color = "primary">
            <input type = "Submit" />
          </Button>
      </div>
    </Grid>
  )    
}
}
export default EditEmployee;