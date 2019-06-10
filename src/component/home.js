import React, {Component} from 'react';
import { store } from '../store';
import  { appMenu }  from '../actions/employee'

class Home extends Component {

  initialFunction() {
    store.dispatch(appMenu({menu: false}))
  }

  componentWillMount () {
    this.initialFunction();
  }

  render() {
    return (
      <h2>You are on Home Page</h2>
    )
  }    
}

export default Home