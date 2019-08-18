import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {LinearProgress, withStyles} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { ArrowDownward as ArrowDownwardIcon } from '@material-ui/icons';
import { Paper } from '../../../../components';
import ArtPic from '../Art/RussianDoll.png'
import styles from './styles';

class ArtCard2 extends Component {
  render() {
    const { classes, className, ...rest } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <Paper
        {...rest}
        className={rootClassName}
      >
          <div className={classes.picture} alignItems='center'>
            <img alt="ArtPic" src={ArtPic}/>
          </div>
      </Paper>
    );
  }
}

ArtCard2.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ArtCard2);
