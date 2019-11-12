import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Hidden, Paper, Box, Grid, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import Image from 'material-ui-image';
import { Dashboard as DashboardLayout } from '../../layouts';
import gen from './images/gen.png';
import PdfView from './PdfView';

import styles from './styles';

class Home extends Component {
  signal = true;

  state = {
    isLoading: false,
    error: null,
  };

  downloadResume = () => {
    const link = document.createElement('a');
    link.href = `./files/resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Genevieve Prescher">
        <Box p={5}>
          <Paper className={classes.topGrid}>
            <Box>
              <Grid container spacing={3}>
                <Grid item xs={2} sm={4}></Grid>
                <Grid item xs={8} sm={4}>
                  <Box className={classes.imageStyle}>
                    <Image
                      src={gen}
                      aspectRatio={(1)}
                      disableSpinner
                      className={classes.imageStyle}
                    />
                  </Box>
                </Grid>
                <Grid item xs={2} sm={4}></Grid>
                <Grid item xs={12} sm={12}>
                  <Box p={3}>
                    <Paper>
                      <Box>
                        <Typography variant="h3" align="center">
                          Aspiring User Experience and Interface Designer. 
                          I specialize in user interface that incorporates
                          research-based methods and impeccable design.
                        </Typography>
                      </Box>
                    </Paper>
                  </Box>
                </Grid>
                
                <Grid item sm={12} align="center">
                  <Hidden smDown>
                    <PdfView />
                  </Hidden>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Box p={3}>
                    <Button
                      variant="outlined"
                      onClick={this.downloadResume}>
                      <Typography variant="h4">
                        Download Resumé
                      </Typography>
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
      </DashboardLayout>
    );
  }
}

Home.propTypes = {
  /** Material UI Styling */
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
