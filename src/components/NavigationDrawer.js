import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';

import NavHeader from './NavHeader'
import {Book, HowToReg, Info, LibraryBooks, LocalLibrary, MyLocation, Note, People} from "@material-ui/icons";
import {Link} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function MiniDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <NavHeader open={open} handleDrawerOpen={handleDrawerOpen}/>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <Link to='/'>
                        <ListItem button key={1}>
                            <ListItemIcon>{<HomeIcon/>}</ListItemIcon>
                            <ListItemText primary={"Home"}/>
                        </ListItem>
                    </Link>
                    <Divider style={{marginTop: '10px', marginBottom: '10px'}}/>
                    <Link to='library'>
                        <ListItem button key={2}>
                            <ListItemIcon>{<LocalLibrary/>}</ListItemIcon>
                            <ListItemText primary={"Library"}/>
                        </ListItem>
                    </Link>
                    <Divider style={{marginTop: '10px', marginBottom: '10px'}}/>

                    <Link to='users'>
                        <ListItem button key={20}>
                            <ListItemIcon>{<People/>}</ListItemIcon>
                            <ListItemText primary={"Users"}/>
                        </ListItem>
                    </Link>
                    <Divider style={{marginTop: '10px', marginBottom: '10px'}}/>

                    <Link to='books'>
                        <ListItem button key={10}>
                            <ListItemIcon>{<LibraryBooks/>}</ListItemIcon>
                            <ListItemText primary={"Books"}/>
                        </ListItem>
                    </Link>
                    <Divider style={{marginTop: '10px', marginBottom: '10px'}}/>

                    <ListItem button key={7}>
                        <ListItemIcon>{<MyLocation/>}</ListItemIcon>
                        <ListItemText primary={"Locations, hours"}/>
                    </ListItem>
                    <Divider style={{marginTop: '10px', marginBottom: '10px'}}/>

                    <ListItem button key={3}>
                        <ListItemIcon>{<HowToReg/>}</ListItemIcon>
                        <ListItemText primary={"Library regulations"}/>
                    </ListItem>
                    <Divider style={{marginTop: '10px', marginBottom: '10px'}}/>

                    <ListItem button key={4}>
                        <ListItemIcon>{<Book/>}</ListItemIcon>
                        <ListItemText primary={"Borrow a book"}/>
                    </ListItem>
                    <Divider style={{marginTop: '10px', marginBottom: '10px'}}/>

                    <ListItem button key={5}>
                        <ListItemIcon>{<Note/>}</ListItemIcon>
                        <ListItemText primary={"Reserve a book"}/>
                    </ListItem>
                    <Divider style={{marginTop: '10px', marginBottom: '10px'}}/>

                    <ListItem button key={6}>
                        <ListItemIcon>{<Info/>}</ListItemIcon>
                        <ListItemText primary={"About us"}/>
                    </ListItem>
                    <Divider style={{marginTop: '10px', marginBottom: '10px'}}/>
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                {props.children}
            </main>
        </div>
    );
}