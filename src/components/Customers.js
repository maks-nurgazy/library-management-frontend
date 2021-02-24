import * as React from 'react';
import {DataGrid} from '@material-ui/data-grid';
import {Button} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from "@material-ui/core/TextField";
import {useInput} from "../hooks/useInput";

function getModalStyle() {
    return {
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
    };
}


const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 500,
        backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },

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

}));


export default function DataTable() {

    const columns = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'first_name', headerName: 'First name', width: 150},
        {field: 'last_name', headerName: 'Last name', width: 150},
        {field: 'email', headerName: 'Email', width: 300},
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => (
                <strong>
                    <Button
                        onClick={() => {
                            handleOpen(params.row);
                        }}
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{marginLeft: 16}}
                    >
                        Update
                    </Button>
                    <Button
                        onClick={() => {
                            removeCustomer(params.row);
                        }}
                        variant="contained"
                        color="secondary"
                        size="small"
                        style={{marginLeft: 16}}
                    >
                        Delete
                    </Button>
                </strong>
            ),
        }
    ];

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState([
        {
            "id": 1,
            "first_name": "Maksatbek",
            "last_name": "Bolushov",
            "email": "testadmin@test.com"
        },
        {
            "id": 2,
            "first_name": "admin",
            "last_name": "admin",
            "email": "admin@test.com"
        },
        {
            "id": 3,
            "first_name": "Maksatbek",
            "last_name": "Bolushov",
            "email": "testadmin@test.com"
        },
        {
            "id": 4,
            "first_name": "admin",
            "last_name": "admin",
            "email": "admin@test.com"
        },
        {
            "id": 5,
            "first_name": "Maksatbek",
            "last_name": "Bolushov",
            "email": "testadmin@test.com"
        },
        {
            "id": 6,
            "first_name": "admin",
            "last_name": "admin",
            "email": "admin@test.com"
        },
        {
            "id": 7,
            "first_name": "Maksatbek",
            "last_name": "Bolushov",
            "email": "testadmin@test.com"
        },
        {
            "id": 8,
            "first_name": "admin",
            "last_name": "admin",
            "email": "admin@test.com"
        },
    ]);
    const {value: firstName, setValue: setFirstName, bind: bindFirstName, reset: resetFirstName} = useInput('');
    const {value: lastName, setValue: setLastName, bind: bindLastName, reset: resetLastName} = useInput('');
    const {value: email, setValue: setEmail, bind: bindEmail, reset: resetEmail} = useInput('');

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const data = {
            first_name: firstName,
            last_name: lastName,
            email: email
        };
        resetFirstName();
        resetLastName();
        resetEmail();
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = (row) => {
        setOpen(true);
        setFirstName(row.first_name);
        setLastName(row.last_name);
        setEmail(row.email);
    };

    const removeCustomer = () => {
        const newData = data.filter(e => {
            return e.first_name !== 'Maksatbek'
        });
        setData(newData);
    };

    const addCustomer = (row) => {
        alert(row.first_name);
    };


    const body = (
        <div style={modalStyle} className={classes.paper}>
            <form className='form' noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    classes={{root: classes.mgTop}}
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
                <div className='mgTop-30 flexCenter'>
                    <Button className='button' onClick={handleClose} style={{marginRight: '10px'}}>Cancel</Button>
                    <Button className='button' variant="contained" color="primary" type='submit'>
                        Update
                    </Button>
                </div>
            </form>
        </div>
    );

    return (
        <div style={{height: '80vh', width: '100%'}}>
            <Button variant={"contained"} color={"primary"} onClick={addCustomer}>Add Customer</Button>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={100}
                hideFooterPagination
                checkboxSelection={false}/>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}