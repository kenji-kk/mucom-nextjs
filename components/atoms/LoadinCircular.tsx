import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  CircularProgressWrap: {
    
  },
})

export const LoadingCircular = () => {
  const classes = useStyles();

  return (
    <div className={classes.CircularProgressWrap}>
      <CircularProgress size={60}/>
    </div>
  );
}
