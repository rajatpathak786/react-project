import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { store } from '../../store';
import  { addTasks, appMenu }  from '../../actions/employee'
import TextField from '@material-ui/core/TextField';
import { toast } from 'react-toastify';
import { getTaskName } from '../../selectors/selectors' 

class AddTask extends Component {

  initialFunction() {
    store.dispatch(appMenu({menu: false}))
  }

  componentWillMount () {
    this.initialFunction();
  }

  handleChange(event) {
    // console.log(event.target)
    store.dispatch(addTasks({ [event.target.name] : event.target.value}))
  }

  addTask(event) {
    event.preventDefault();
    // console.log(event)
    // console.log(store.getState());
    if (!(typeof getTaskName() == 'undefined')) {
      axios.post('http://127.0.0.9:4566/task/', {
      taskname: getTaskName()
    }).then((response) => {
      // console.log('state after change');
      // console.dir(store.getState())
      // console.log(store.getState())
      document.getElementById('addTasks').reset();
      toast.success('Details inserted into Database Successfully!!!');
      // console.log(response);
    }).catch((error) => {
      console.log(error);
    });
    } else {
      toast.warn('Task Name field is mandatory');
    }
    
  }

  render() {
    // console.log(store.getState());
    // console.log(getTaskName());
    return (
      <div>
        <form id = 'addTasks' onSubmit = {this.addTask.bind(this)}>
          <p>{/* <p>TaskName: <input type= "text" name="name"  onChange={this.handleChange}/></p> */}
            <TextField
              name="name"  
              onChange={this.handleChange}
              label="Task Name"
              margin="normal"
            />
          </p>
        <Button variant="contained" color="primary" type = "Submit" style={{right: '-50px'}}>
          Submit
        </Button>
        </form>
      </div>
    )
  }   
}

export default AddTask;
