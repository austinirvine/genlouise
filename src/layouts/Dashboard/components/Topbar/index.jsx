import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { IconButton, Toolbar, Typography, Box } from '@material-ui/core';

import {
  Menu as MenuIcon,
  Close as CloseIcon
} from '@material-ui/icons';

// Shared services
import { getNotifications } from '../../../../services/notification';

// Component styles
import styles from './styles';

class Topbar extends Component {

  signal = true;

  state = {
    notifications: [],
    notificationsLimit: 4,
    notificationsCount: 0,
    notificationsEl: null,
    names: [],
  };

  async getNotifications() {
    try {
      const { notificationsLimit } = this.state;

      const { notifications, notificationsCount } = await getNotifications(
        notificationsLimit
      );

      if (this.signal) {
        this.setState({
          notifications,
          notificationsCount
        });
      }
    } catch (error) {
      return;
    }
  }

  componentDidMount() {
    this.signal = true;
    this.getNotifications();
  }

  componentWillUnmount() {
    this.signal = false;
  }

  render() {

    const {
      classes,
      className,
      title,
      isSidebarOpen,
      onToggleSidebar
    } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <Fragment>
        <div className={rootClassName}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              className={classes.menuButton}
              onClick={onToggleSidebar}
              variant="text"
            >
              {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Box display="flex" justifyContent="center">
              <Box>
                <Typography
                  className={classes.title}
                  variant="h2"
                >
                  {title}
                </Typography>
              </Box>
            </Box>
          </Toolbar>
        </div>
      </Fragment>
    );
  }
}

Topbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  isSidebarOpen: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
  title: PropTypes.string
};

Topbar.defaultProps = {
  onToggleSidebar: () => {}
};

export default compose(
  withRouter,
  withStyles(styles)
)(Topbar);
