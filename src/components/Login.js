import React from "react";
import {Button, Container} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/styles";
import './Login.css';

const styles = {
    container: {
        backgroundColor: 'whitesmoke',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
    },
    mgTop: {
        marginTop: '20px'
    },
    root: {
        width: '100%'
    }
};


function Login(props) {
    const {classes} = props;
    return (

        <Container maxWidth="sm" classes={{root: classes.container}}>
            <form className='form' noValidate autoComplete="off">
                <TextField
                    id="outlined-secondary"
                    label="Email"
                    fullWidth={true}
                    variant="outlined"
                    color="primary"
                />
                <TextField
                    classes={{root: classes.mgTop}}
                    id="outlined-secondary"
                    label="Password"
                    fullWidth={true}
                    variant="outlined"
                    color="primary"
                />
                <div className='mgTop-30 flexCenter'>
                    <Link to="/register" className='fullWidth mgRight'>
                        <Button className='button'>Register</Button>
                    </Link>
                    <Link to="/login" className='fullWidth'>
                        <Button className='button' variant="contained" color="primary">
                            Login
                        </Button>
                    </Link>
                </div>
            </form>
        </Container>
    );
}

export default withStyles(styles)(Login);