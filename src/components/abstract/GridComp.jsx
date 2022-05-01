import { Grid } from '@material-ui/core'
import React from 'react'

const GridComp = (props) => {
  return (
    <Grid item  xs={12} sm={6} md={3} {...props}  />
  )
}

export default GridComp