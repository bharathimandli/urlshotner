import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography,TextField } from '@material-ui/core';
import { addUser } from '../Service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    startDateTime: '',
    duration: '',
    startUrl: '',
    joinUrl: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { startDateTime, duration, startUrl, joinUrl } = user;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        console.log(user)
        history.push('./all');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input"></InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='startDateTime' type="datetime-local" value={startDateTime} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Duration</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='duration' tpye="number" value={duration} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">startUrl</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='startUrl' type="url"value={startUrl} id="my-input"/>
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="my-input">joinUrl</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='joinUrl' value={joinUrl} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser;