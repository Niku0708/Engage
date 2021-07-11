import React from 'react';
// import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '80vh',
  },
  headBG: {
    backgroundColor: '#e0e0e0',
  },
  borderRight500: {
    borderRight: '1px solid #e0e0e0',
  },
  messageArea: {
    height: '70vh',
    overflowY: 'auto',
    flex: 'auto',
  },
});

const Chat = () => {
  const classes = useStyles();
  // const [message, setMessage] = useState();

  return (
    <div>
      <Grid item xs={12} md={12} container component={Paper} className={classes.chatSection}>
        <Grid item md={12}>
          <List className={classes.messageArea}>
            <ListItem key="1">
              <Grid item md={12}>
                <ListItemText align="right" primary="Heyyyyyy man, What's up ?" />
              </Grid>
            </ListItem>
            <ListItem key="2">
              <Grid item md={12}>
                <ListItemText align="left" primary="Good wbu" />
              </Grid>
            </ListItem>
            <ListItem key="3">
              <Grid item md={12}>
                <ListItemText align="right" primary="same." />
              </Grid>
            </ListItem>
          </List>
          <Divider />
          <Grid container style={{ padding: '5px' }}>
            <Grid item xs={11} md={6}>
              <TextField
                id="outlined-basic-email"
                label="Type Something"
                // onChange={(event) => setMessage(event.target.value)}
                // onKeyPress={(event) => (event.key === 'Enter' ? sendMessage(event) : null)}
                fullWidth
              />
            </Grid>
            <Grid xs={1} md={6} align="right">
              <Fab color="primary" aria-label="add"><SendIcon /></Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Chat;
