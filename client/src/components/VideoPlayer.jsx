import React, { useContext } from 'react';
import { Box, Button, Grid, Typography, Paper, makeStyles } from '@material-ui/core';
import { Mic, MicOff, Videocam, VideocamOff } from '@material-ui/icons';
import { SocketContext } from '../Context';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  button: {
    marginTop: 5,
    marginRight: 5,
    '&:hover': {
      backgroundColor: '#fff',
      color: '#3c52b2',
    },
  },
  buttonred: {
    marginTop: 5,
    marginRight: 5,
    backgroundColor: 'red',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#3c52b2',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call, isAudio, toggleAudio, isVideo, toggleVideo } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
          </Grid>
          <Box textAlign="center">
            <Button variant="contained" color="primary" startIcon={isAudio ? <Mic fontSize="large" /> : <MicOff fontSize="large" />} onClick={() => toggleAudio(!isAudio)} className={isAudio ? classes.button : classes.buttonred}>
              Mic
            </Button>
            <Button variant="contained" color="primary" startIcon={isVideo ? <Videocam fontSize="large" /> : <VideocamOff fontSize="large" />} onClick={() => toggleVideo(!isVideo)} className={isVideo ? classes.button : classes.buttonred}>
              Camera
            </Button>
          </Box>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
