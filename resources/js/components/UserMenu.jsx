import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PostAddIcon from "@material-ui/icons/PostAdd";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Axios from "axios";

const useStyles = makeStyles(theme => ({
    menuButton: {
        display: "flex",
        alignItems: "center",
        "&:link": {
            textDecoration: "none",
            color: "#000"
        },
        "&:visited": {
            color: "#000"
        }
    }
}));
const StyledMenu = withStyles({
    paper: {
        border: "1px solid #d3d4d5"
    }
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center"
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        "&:focus": {
            backgroundColor: theme.palette.primary.main,
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: theme.palette.common.white
            }
        }
    }
}))(MenuItem);

export default function CustomizedMenus({ props }) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    console.log("aaaa", props);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        Axios.post("/logout").then(response => {
            window.location = "/";
        });
    };
    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="outlined"
                color="primary"
                onClick={handleClick}
            >
                メニュー
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <InertiaLink
                        href="dashboard"
                        className={classes.menuButton}
                        onClick={handleClose}
                    >
                        <ListItemIcon>
                            <DashboardIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="ダッシュボード" />
                    </InertiaLink>
                </StyledMenuItem>
                <StyledMenuItem>
                    <InertiaLink
                        href="posting"
                        className={classes.menuButton}
                        onClick={handleClose}
                    >
                        <ListItemIcon>
                            <PostAddIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="投稿" />
                    </InertiaLink>
                </StyledMenuItem>
                <StyledMenuItem>
                    <InertiaLink
                        href="drafts"
                        className={classes.menuButton}
                        onClick={handleClose}
                    >
                        <ListItemIcon>
                            <DraftsIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="下書き一覧" />
                    </InertiaLink>
                </StyledMenuItem>
                <StyledMenuItem onClick={logout}>
                    <ListItemIcon>
                        <ExitToAppIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="ログアウト" />
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
}
