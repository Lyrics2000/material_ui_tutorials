
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


const HeaderAndFooter = () => {
  return (
    <div className={styles.root}>
<Grid container spacing={4}>
<Grid item xs={12}>
<Paper className={styles.paper}>xs=12</Paper>
</Grid>
<Grid item xs={6}>
<Paper className={styles.paper}>xs=6</Paper>
</Grid>
<Grid item xs={6}>
<Paper className={styles.paper}>xs=6</Paper>
</Grid>
<Grid item xs={6}>
<Paper className={styles.paper}>xs=6</Paper>
</Grid>
<Grid item xs={6}>
<Paper className={styles.paper}>xs=6</Paper>
</Grid>
<Grid item xs={6}>
<Paper className={styles.paper}>xs=6</Paper>
</Grid>
<Grid item xs={6}>
<Paper className={styles.paper}>xs=6</Paper>
</Grid>
<Grid item xs={12}>
<Paper className={styles.paper}>xs=12</Paper>
</Grid>
</Grid>
</div>
  )
}

export default HeaderAndFooter