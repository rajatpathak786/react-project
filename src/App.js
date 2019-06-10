import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AddEmployee from './component/employee/addEmployee'
import EditEmployee from './component/employee/editEmployee'
import EditTasks from './component/task/editTasks'
import AddTasks from './component/task/addTask'
import ListTasks from './component/task/taskDetails'
import AddModule from './component/module/addModule'
import ListModule from './component/module/moduleDetails'
import EditModule from './component/module/editModule'
import AddEmployeeTraining from './component/employeeTraining/addEmpTraining'
import AddDrift from './component/employeeTraining/addDrift'
import EmpTrainingDetails from './component/employeeTraining/empTrainingDetails'
import Home from './component/home'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListDetails from './component/employee/listDetails' 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
import { appMenu } from './actions/employee'
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { store } from './store';
import classNames from 'classnames';
import { ToastContainer } from 'react-toastify'; 

// function Home() {
//   return <h2>You are on Home Page</h2>
// }

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class App extends Component {
  handleDrawerOpen = () => {
    store.dispatch(appMenu({menu: true}))
    console.log(store.getState())
  }
  handleDrawerClose = () => {
    store.dispatch(appMenu({menu: false}))
    console.log(store.getState())
  }


  render() {
    var display ;
    if (typeof store.getState() == "undefined") {
      display = store.getState()
    } else {
      display = store.getState().menu
    }
     //const { classes, theme } = this.props;
     const { classes } = this.props
    // const { open } = this.state;
    return (
      <Router>
        <div>
          <CssBaseline />
          <AppBar position="fixed"
            className={classNames(classes.appBar,   {
              [classes.appBarShift]: display,
            })}>
            <Toolbar>
              <IconButton  color="inherit" aria-label="menu" onClick = {this.handleDrawerOpen} className={classNames(classes.menuButton, display && classes.hide)} >
              <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                Employee Training App 
              </Typography>
            </Toolbar>
          <Drawer position = "static" variant="persistent" anchor="left" open={display}  classes={{paper: classes.drawerPaper, }} >
            <div className={classes.drawerHeader}>
              <IconButton  aria-label="Menu" onClick = {this.handleDrawerClose}> 
                <ChevronLeftIcon /> 
              </IconButton>
            </div>  
            <Divider />
            <List>
              <ListItem button >
                <ListItemText><Link to = "/">Home</Link></ListItemText>          
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button >
                <ListItemText><Link to = "/add_emp">Add Employee</Link></ListItemText>          
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button >
                <ListItemText><Link to = "/list_details">Employee Details</Link></ListItemText>          
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button >
                <ListItemText><Link to = "/add_tasks">Add Tasks</Link></ListItemText>          
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button >
                <ListItemText><Link to = "/list_tasks">Task Details</Link></ListItemText>          
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button >
                <ListItemText><Link to = "/add_module">Add Modules</Link></ListItemText>          
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button >
                <ListItemText><Link to = "/list_module">Module Details</Link></ListItemText>          
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button >
                <ListItemText><Link to = "/employee_training">Employee Training</Link></ListItemText>          
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button >
                <ListItemText><Link to = "/employee_training_details">Employee Training Details</Link></ListItemText>          
              </ListItem>
            </List>         
          </Drawer>
          </AppBar>  
          <Grid 
            container
            spacing={2}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '52vh' }}
            >
            <ToastContainer 
              position = "bottom-right"
              autoClose = {false}
              hideProgressBar= {true}
              closeOnClick= {true}
              pauseOnHover= {true}
              draggable= {false}
            />
            <Route path = "/" exact component = {Home} />
            <Route path = "/add_emp" exact component = {AddEmployee} />
            <Route path = "/edit_emp/:empId" component = {EditEmployee} /> 
            <Route path = "/list_details" exact component = {ListDetails} />
            <Route path = "/add_tasks" exact component = {AddTasks} />
            <Route path = "/list_tasks" exact component = {ListTasks} />
            <Route path = "/edit_task/:taskId" exact component = {EditTasks} />
            <Route path = "/add_module" exact component = {AddModule} />
            <Route path = "/list_module" exact component = {ListModule} />
            <Route path = "/edit_module/:moduleId" exact component = {EditModule} />
            <Route path = "/employee_training" exact component = {AddEmployeeTraining} />
            <Route path = "/employee_training_details" exact component = {EmpTrainingDetails} />
            <Route path = "/add_drift/:empId/:taskId/:moduleId/:remTasks" exact component = {AddDrift} />
          </Grid>
        </div>  
      </Router>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);

// export default App;


