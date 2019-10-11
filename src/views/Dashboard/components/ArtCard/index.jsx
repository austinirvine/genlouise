import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Paper } from '../../../../components';
import styles from './styles'; 

class ArtCard extends Component {
  render() {
    const { image, classes, className, ...rest } = this.props;
    const rootClassName = classNames(classes.root, className);
    const artPiece =  require("../Art/"+image);
    return (
      <Paper
        {...rest}
        className={rootClassName}
      >
          <div className={classes.picture} alignItems='center'>
            <img alt="ArtPic" src={artPiece}/>
          </div>
      </Paper>
    );
  }
}

ArtCard.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ArtCard);
