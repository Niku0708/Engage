import React, { useContext } from 'react';
import { Button, Paper, Grid, Divider, TextField, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { SocketContext } from '../Context';

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
  const { message, setMessage, messages, sendMessage, name } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <div>
      <Grid item xs={12} md={12} container component={Paper} className={classes.chatSection}>
        <Grid item md={12}>
          <List className={classes.messageArea}>
            {messages && messages.map((currentMessage) => (
              <ListItem key={currentMessage.id}>
                <Grid item xs={12} md={12}>
                  {(currentMessage.user === name) && (<ListItemText align="right" primary={currentMessage.text} secondary={currentMessage.user} />)}
                  {!(currentMessage.user === name) && (<ListItemText align="left" primary={currentMessage.text} secondary={currentMessage.user} />)}
                </Grid>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Grid container style={{ padding: '5px' }}>
            <Grid item xs={6} md={6}>
              <TextField
                label="Message Box: "
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={(event) => (event.key === 'Enter' ? sendMessage(event) : null)}
                fullWidth
              />
            </Grid>
            <Grid item xs={6} md={6} align="right">
              <Button variant="contained" color="secondary" startIcon={<SendIcon fontSize="large" />} onClick={(event) => sendMessage(event)} className={classes.margin}>
                Send
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Chat;
