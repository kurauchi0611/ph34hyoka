import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import UserMenu from "./UserMenu"
import { InertiaLink, usePage } from '@inertiajs/inertia-react';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    display: "flex",
    justifyContent: "space-between"
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  link: {
    color: "#000",
    textDecoration: "none",
    fontWeight: "bold"
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title, user } = props;
  // console.log(props);
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        {/* <Button size="small">Subscribe</Button> */}
        <InertiaLink href="/" className={classes.link}>

          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            {title}
          </Typography>
        </InertiaLink>
        {
          user &&
          <UserMenu props={props} />
        }
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <InertiaLink href={section.url} className={classes.link} key={section.title} >
            <Link
              color="primary"
              noWrap
              variant="subtitle1"
              // href={section.url}
              className={classes.toolbarLink}
              component="p"
            >
              {section.title}
            </Link>
          </InertiaLink>
        ))}
      </Toolbar>
      {/* {renderMenu} */}
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
