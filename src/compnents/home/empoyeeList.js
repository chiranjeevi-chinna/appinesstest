import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import usersJson from '../users.json';
import './employeeList.css'

export default function BasicTable() {
    const [users, setUsers] = React.useState(usersJson.user)
    return (
        <div className="user-table">
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>S No</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Age</TableCell>
                            <TableCell align="center">Gender</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Phone</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.email}>
                                <TableCell component="th" scope="row">
                                    {user.id}
                                </TableCell>
                                <TableCell align="center">{user.name}</TableCell>
                                <TableCell align="center">{user.age}</TableCell>
                                <TableCell align="center">{user.gender}</TableCell>
                                <TableCell align="center">{user.email}</TableCell>
                                <TableCell align="center">{user.phoneNo}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
