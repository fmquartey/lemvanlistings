import { Search } from '@mui/icons-material'
import { Box, Button, InputBase, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const AllListings = () => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
            }}>
            <Box
                sx={{
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                }}>
                <Button
                    onClick={() => { navigate("/app/landlord/listings/create") }}
                    color="success"
                    variant="outlined"
                    sx={{
                        borderRadius: "8px",
                        textTransform: "none",
                        backgroundColor: "#FFF",
                        height: "40px",
                        "&:hover": {
                            backgroundColor: "#FFF",
                        }
                    }}>
                    <Typography variant="body1"
                        sx={{
                            fontSize: "14px",
                            fontWeight: "600",
                            color: "#35BF43",
                        }}>Create new listing</Typography>
                </Button>
                <Box
                    sx={{
                        padding: "0px 10px",
                        borderBottom: "1px solid #35BF43",
                        marginLeft: "10px",
                    }}>
                    <InputBase
                        placeholder='Search'
                        fullWidth={true}
                        endAdornment={<Search sx={{
                            color: "#35BF43",
                        }} />}
                    />
                </Box>
            </Box>
            <Box

                sx={{
                    width: "100%",
                    marginTop: "20px",
                }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Property_title</TableCell>
                                <TableCell align="center">Property_type</TableCell>
                                <TableCell align="center">Amount </TableCell>
                                <TableCell align="center">Period </TableCell>
                                <TableCell align="center">Location</TableCell>
                                <TableCell align="center">Verified</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    "Estate house"
                                </TableCell>
                                <TableCell align="center">Apartment</TableCell>
                                <TableCell align="center">GHS 300</TableCell>
                                <TableCell align="center">Month</TableCell>
                                <TableCell align="center">Location</TableCell>
                                <TableCell align="center">Pending</TableCell>
                                <TableCell align="center">
                                    <Button
                                        variant="text"
                                        sx={{
                                            textTransform: "none",

                                            fontSize: "14px",
                                            fontWeight: "600",
                                            color: "#35BF43",
                                        }}>Options</Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

        </Box>
    )
}

export default AllListings
