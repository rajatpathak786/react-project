import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class AddEmployee extends Component {
  render() {
    return (
      <Grid 
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}>
        <div>
          <form id = 'addEmp'>
            <p>Name: <input type = "Text" id = "name"/></p>
            <p>E-Mail: <input type = "Text" id = "email"/></p>
          </form>
          <Button variant="contained" color="primary">
            <input type = "Submit" />
          </Button>
        </div>
      </Grid>
    )
  }
}

export default AddEmployee;