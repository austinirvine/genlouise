import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Dashboard as DashboardLayout } from '../../layouts';

import {
  ArtCard,
  ArtCard2,
  ArtCard3,
  ArtCard4,
  ArtCard5,
  ArtCard6,
  ArtCard7,
  ArtCard8,
  ArtCard9,
} from './components';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 5
  },
  item: {
    height: '100%'
  }
});

class Dashboard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="genlouise.art" >
        <div className={classes.root}>
          <Grid container spacing={5}>

            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <ArtCard className={classes.item} />
            </Grid>

            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <ArtCard2 className={classes.item} />
            </Grid>

            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <ArtCard4 className={classes.item} />
            </Grid>

            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <ArtCard5 className={classes.item} />
            </Grid>

            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <ArtCard3 className={classes.item} />
            </Grid>

            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <ArtCard6 className={classes.item} />
            </Grid>

            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <ArtCard7 className={classes.item} />
            </Grid>

            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <ArtCard8 className={classes.item} />
            </Grid>

            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <ArtCard9 className={classes.item} />
            </Grid>

          </Grid>
        </div>
      </DashboardLayout>
      
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
