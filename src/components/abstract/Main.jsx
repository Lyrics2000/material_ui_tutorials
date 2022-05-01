import { Paper } from '@material-ui/core';
import React from 'react'
import Container from './Container'
import GridComp from './GridComp'


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

const Main = () => {
  return (
    <div  className={styles.root}>
        <Container spacing={4}>
            <GridComp >
            <Paper className={styles.paper}>xs=12 sm=6 md=3</Paper>
            </GridComp>
        </Container>
    </div>
  )
}

export default Main