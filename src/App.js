import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AddEmployee from './component/addEmployee'
import EditEmployee from './component/editEmployee'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
<<<<<<< HEAD
import ListDetails from './component/listDetails' 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import classNames from 'classnames';
=======
>>>>>>> b5dc14ac1a479dfb76b727856f1ea6b315604f4c

function Home() {
  return <h2>You are on Home Page</h2>
}

<<<<<<< HEAD
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
=======
>>>>>>> b5dc14ac1a479dfb76b727856f1ea6b315604f4c

class App extends Component {
  constructor(props){
    super()
    this.state = {
      open: false 
    };
  }
  handleDrawerOpen = () => {
    this.setState({
      open: true
    })
  }
  handleDrawerClose = () => {
    this.setState({
      open: false
    })
  }
  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;
    return (
      <Router>
<<<<<<< HEAD
        <div>
          <CssBaseline />
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton  color="inherit" aria-label="Menu" onClick = {this.handleDrawerOpen} >
              <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                Employee Training App 
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer variant="persistent" anchor="left" open={this.state.open} className={classes.drawer} >
            <IconButton  color="inherit" aria-label="Menu" onClick = {this.handleDrawerClose}> 
              <ChevronLeftIcon /> 
            </IconButton>
            <Divider />
            <List>
              <ListItem button >
                <ListItemText  ><Link to = "/">Home</Link></ListItemText>          
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button >
                <ListItemText  ><Link to = "/add_emp">Add Employee</Link></ListItemText>          
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button >
                <ListItemText  ><Link to = "/edit_emp">Edit Employee</Link></ListItemText>          
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button >
                <ListItemText  ><Link to = "/list_details">Employee Details</Link></ListItemText>          
              </ListItem>
            </List>    
          </Drawer>  
          <Grid 
            container
            spacing={10}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '50vh' }}>
            <Route path = "/" exact component = {Home} />
            <Route path = "/add_emp" exact component = {AddEmployee} />
            <Route path = "/edit_emp" exact component = {EditEmployee} />
            <Route path = "/list_details" exact component = {ListDetails} />
          </Grid>
        </div>  
=======
        <Grid 
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}>
          <div>
            <nav>
              <Grid container justify = "center" spacing = {16}>
                <label><Link to = "/">Home</Link></label>
                <label><Link to = "/addEmp">AddEmployee</Link></label>
                <label><Link to = "/editEmp">EditEmployee</Link></label>
              </Grid>      
            </nav>
            <Route path = "/" exact component = {Home} />
            <Route path = "/addEmp" exact component = {AddEmployee} />
            <Route path = "/editEmp" exact component = {EditEmployee} />
          </div>  
        </Grid>
>>>>>>> b5dc14ac1a479dfb76b727856f1ea6b315604f4c
      </Router>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);

// export default App;
