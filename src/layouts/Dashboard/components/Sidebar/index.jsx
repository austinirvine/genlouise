import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {MenuItem, Select, withStyles} from '@material-ui/core';
import {Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Typography} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl/FormControl';
import {
  DashboardOutlined as DashboardIcon,
  LockOpenOutlined as LockOpenIcon,
  InfoOutlined as InfoIcon,
  AccountBoxOutlined as AccountBoxIcon,
  SettingsOutlined as SettingsIcon,
  SwitchVideoOutlined as ChannelsIcon,
  CommentOutlined as ReviewsIcon
} from '@material-ui/icons';
import styles from './styles';
import TRI from '../../../../1.png';
import TR from '../Sidebar/icons/TR_flag.png';
import EN from '../Sidebar/icons/US_flag.png';

class Sidebar extends Component {

  state = { selectedLang: 'EN'};

  handleChangeLang = (value) => {
    this.setState({
      selectedLang: value
    });
  };

  render() {
    const { classes, className } = this.props;
    const {selectedLang } = this.state;
    const rootClassName = classNames(classes.root, className);

    return (
      <nav className={rootClassName}>
        <div className={classes.logoWrapper}>
          <Link className={classes.logoLink} to="/">
            <img className={classes.icon} alt="TRI" src={TRI}/>
            <div class="titleText" className={classes.titleText}>&ensp;genlouise.art</div>
          </Link>
        </div>

        <Divider className={classes.logoDivider} />

        <List component="div" disablePadding>

          <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink} to="/dashboard">
            <ListItemIcon className={classes.listItemIcon}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.listItemText }} primary="Home"/>
          </ListItem>

          {/* <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink} to="/channels">
            <ListItemIcon className={classes.listItemIcon}>
              <ChannelsIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.listItemText }} primary="About"/>
          </ListItem> */}

          {/* <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink} to="/reviews">
            <ListItemIcon className={classes.listItemIcon}>
              <ReviewsIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.listItemText }} primary="Shop"/>
          </ListItem> */}

          {/* <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink} to="/sign-in">
            <ListItemIcon className={classes.listItemIcon}>
              <LockOpenIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.listItemText }} primary="Contact"/>
          </ListItem> */}

        </List>

      </nav>
    );
  }
}

Sidebar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
