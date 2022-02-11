import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getUsers } from "../Service/api";
const useStyles = makeStyles({
    table: {
        width: '50%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 12
        }
    }
})


    const GetUser = () => {
        const [users, setUsers] = useState([]);
        const classes = useStyles();
    
        useEffect(() => {
           getAllUsers ();
        }, []);
        const getAllUsers = async () => {
            let response = await getUsers();
            console.log(response.data)
            setUsers(response.data);
        }
    return(
        <div>
             <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    {/* <TableCell>startTime</TableCell> */}
                    <TableCell>duration</TableCell>
                    {/* <TableCell>StartUrl</TableCell>
                    <TableCell>joinUrl</TableCell> */}
                    <TableCell>Alocatedtime</TableCell>
                    <TableCell>livesessiondetails</TableCell>
                    <TableCell>stardatetime</TableCell>
                    <TableCell>enddatetime</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TableRow className={classes.row} key={user._id}>
                        {/* <TableCell>{user._id}</TableCell> */}
                        <TableCell>{user.duration}</TableCell>
                        <TableCell>{Object.values(user.allocatedTime)}</TableCell>
                        {/* <TableCell>{user.liveSessionDetails.startUrl}</TableCell> */}
                        {/* <TableCell>{Object.values(user.liveSessionDetails)}</TableCell> */}
                        <TableCell>{user.liveSessionDetails.startUrl}{user.liveSessionDetails.joinUrl}</TableCell>
                        <TableCell>{user.startDateTime}</TableCell>
                        <TableCell>{user.endDateTime}</TableCell>
                        {/* <TableCell>{user.liveSessionDetails.getOwnPropertyNames()}</TableCell> */}

                    
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </div>
    )
}

export default GetUser;