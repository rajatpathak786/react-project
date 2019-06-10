import  React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { store } from '../../store'
import { addDrift } from '../../actions/employee'
import { getDrift } from '../../selectors/selectors'
import axios from 'axios'

class AddDrift extends Component {
  addDrift(event) {
    event.preventDefault();
    console.log('asdasdasdasd')
    axios.post('http://127.0.0.9:4566/updateDrift/', {
      moduleId: this.props.match.params.moduleId,
      taskId: this.props.match.params.taskId,
      remTasks: this.props.match.params.remTasks,
      empId: this.props.match.params.empId,
      drift: getDrift() 
    })
    .then((response) => {
      console.log('drift added')
    })
  }

  handleChange(event) {
    store.dispatch(addDrift({[event.target.name]: event.target.value}))
  }

  render() {
    console.log(getDrift())
    console.log(this.props.match.params)
    return (
    <form id='addDrift' onSubmit={this.addDrift.bind(this)}>  
      <TextField
      label="Add Drift"
      name="drift"
      margin="normal"
      onChange={this.handleChange}
      />
      <p>
        <Button variant="contained" color="primary" type = "Submit" style={{right:'-42px'}}> Add Drift </Button>
      </p>
    </form>
    )
  }
}

export default AddDrift;