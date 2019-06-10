import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { taskDetails, appMenu, editTasks } from '../../actions/employee'
import { store } from '../../store'
import TextField from '@material-ui/core/TextField';
import { toast } from "react-toastify";
import {getTaskName, getTaskDetailsId} from '../../selectors/selectors'

class EditTasks extends Component {
  
  handleChange(event) {
    store.dispatch(editTasks({[event.name] : event.value}));
  }

  initialFunction() {
    store.dispatch(appMenu({menu: false}))
  }

  componentWillMount() {
    this.initialFunction();
  }

  componentDidMount() {
    this.getTask();
  }

  getTask() {
    axios.get('http://127.0.0.9:4566/taskFetchId', {
      params: {
        id: this.props.match.params.taskId
      }
    })
    .then(async(response) => {
      console.log('1212121212121212121212')
      console.log(response)
      await store.dispatch(taskDetails({taskName: response.data.result.resultResponse[0].taskName}))
    })
  }

  editTasks(event) {
    event.preventDefault();
    if (getTaskName() === '') {
      toast.warn('Task Name field is mandatory');
    } else {
      axios.post('http://127.0.0.9:4566/taskUpdate/', {
        id: this.props.match.params.taskId,
        taskName: getTaskName(),
      }).then((response) => {
        // console.dir(store.getState())
        toast.success('Details inserted into Database Successfully!!!');
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    }
  }
  // value = {store.getState().edit[0].items.name}
  render() {
    let taskname;
    console.log('2');
    console.log(getTaskDetailsId(),getTaskName())
    // console.log(store.getState())
    //console.log(store.getState().edit[0].items);
    if (typeof getTaskDetailsId() == "undefined") {
      taskname = '';
    } else {
      if (typeof getTaskName() == "undefined") {
        taskname = getTaskDetailsId();
      } else { 
        taskname = getTaskName();
      }
    } 
    return(
      <div>
        <form id = "editTasks" onSubmit = {this.editTasks.bind(this)} >
          {/* <p>Name: <input type = "Text" name = "name" value = {taskname} onChange = {value => this.handleChange(value.target)} /></p> */}
          <p>
            <TextField
              name="name"
              value = {taskname}  
              onChange = {value => this.handleChange(value.target)}
              label="Task Name"
              margin="normal"
            />
          </p>
          <Button variant = "contained" color = "primary" type = "Submit" style={{right:'-46px'}}>
          Submit
          </Button>
        </form> 
      </div>
    )    
  }
}
export default EditTasks;