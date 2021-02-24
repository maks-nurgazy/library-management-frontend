import React from "react";
import {Button, Container} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import {Link} from "react-router-dom";
import {useInput} from "../hooks/useInput";
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
    }
};

function Register(props) {

    const {value: firstName, bind: bindFirstName, reset: resetFirstName} = useInput('Maksatbek');
    const {value: lastName, bind: bindLastName, reset: resetLastName} = useInput('Bolushov');
    const {value: email, bind: bindEmail, reset: resetEmail} = useInput('maks@test.com');
    const {value: password, bind: bindPassword, reset: resetPassword} = useInput('maks161114');

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password
        };
        resetFirstName();
        resetLastName();
        resetEmail();
        resetPassword();
    }

    const {classes} = props;

    return (

        <Container maxWidth="sm" classes={{root: classes.container}}>
            <form className='form' noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    id="outlined-secondary1"
                    label="Firstname"
                    fullWidth={true}
                    variant="outlined"
                    color="primary"
                    type="text"
                    {...bindFirstName}
                />
                <TextField
                    classes={{root: classes.mgTop}}
                    id="outlined-secondary2"
                    label="Lastname"
                    fullWidth={true}
                    variant="outlined"
                    color="primary"
                    {...bindLastName}

                />
                <TextField
                    classes={{root: classes.mgTop}}
                    id="outlined-secondary3"
                    label="Email"
                    fullWidth={true}
                    variant="outlined"
                    color="primary"
                    {...bindEmail}
                />
                <TextField
                    classes={{root: classes.mgTop}}
                    type='password'
                    id="outlined-secondary4"
                    label="Password"
                    fullWidth={true}
                    variant="outlined"
                    color="primary"
                    {...bindPassword}
                />
                <div className='mgTop-30 flexCenter'>
                    <Link to="/login" className='fullWidth mgRight'>
                        <Button className='button'>Login</Button>
                    </Link>
                    <Button className='button' variant="contained" color="primary" type='submit'>
                        Register
                    </Button>
                </div>
            </form>
        </Container>
    );
}

export default withStyles(styles)(Register);