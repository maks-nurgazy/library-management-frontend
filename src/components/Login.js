import React from "react";
import {Button, Container} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/styles";
import './Login.css';
import {useInput} from "../hooks/useInput";

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
    const {classes, setToken} = props;

    const {value: email, bind: bindEmail, reset: resetEmail} = useInput('admin@test.com');
    const {value: password, bind: bindPassword, reset: resetPassword} = useInput('admin');


    const handleSubmit = (e) => {
        e.preventDefault();
        const token = 'set token ';
        setToken(token);
        // return <Redirect to='/'/>
    }

    return (
        <Container maxWidth="sm" classes={{root: classes.container}}>
            <form className='form' noValidate onSubmit={handleSubmit}>
                <TextField
                    id="outlined-secondary1"
                    label="Email"
                    fullWidth={true}
                    variant="outlined"
                    color="primary"
                    {...bindEmail}
                />
                <TextField
                    classes={{root: classes.mgTop}}
                    id="outlined-secondary2"
                    type='password'
                    label="Password"
                    fullWidth={true}
                    variant="outlined"
                    color="primary"
                    {...bindPassword}
                />
                <div className='mgTop-30 flexCenter'>
                    <Link to="/register" className='fullWidth mgRight'>
                        <Button className='button'>Register</Button>
                    </Link>
                    <Button className='button' variant="contained" color="primary" type='submit'>
                        Login
                    </Button>
                </div>
            </form>
        </Container>
    );
}

export default withStyles(styles)(Login);

