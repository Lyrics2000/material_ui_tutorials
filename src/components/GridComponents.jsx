import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import { Grid  ,Paper} from '@material-ui/core';


const styles = theme => ({
  root: {
  flexGrow: 1
  },
  paper: {
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary
  }
  });

const GridComponents = () => {
  return (
    <div className={styles.root}>
        <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={3}>
         <Paper className={styles.paper}>xs=12 sm=6 md=3</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={styles.paper}>xs=12 sm=6 md=3</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={styles.paper}>xs=12 sm=6 md=3</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={styles.paper}>xs=12 sm=6 md=3</Paper>
      </Grid>
    </Grid>
    </div>
  )
}

export default GridComponents