import { Search } from "@mui/icons-material";
import {
    Box, InputBase, Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from "../../context/UserContext";
import { apilink } from "../../Helper";

const Rents = () => {
    const {
        setTitle,
        allCol,
        token,
        setAllCol,
        publishedCol,
        setPublishedCol,
        hiddendCol,
        setHiddenCol,
        draftCol,
        setDraftCol,
        movedListing,
        setMovedListing,
    } = useContext(UserContext);

    const [rents, setRents] = useState([]);
    const [search, setSearch] = useState("");
    const [listingId, setListingId] = useState("")
    const [openDialog, setOpenDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [statusMsg, setStatusMsg] = useState("");

    const authAxios = axios.create({
        baseURL: apilink,
        headers: {
            Authorization: "Bearer " + token,
            "content-type": 'multipart/form-data'
        },
    });

    const getRents = () => {
        setLoading(true);
        authAxios.get(`/api/rentals`)
            .then((res) => {
                setLoading(false);
                setRents(res.data.data);
                console.log(res.data.data)
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        getRents();
    }, [])


    return (
        <Box sx={{
            width: "100%",
            height: "auto",
            marginTop: "10px",
        }}>
            <Box
                sx={{
                    width: {
                        xs: "100%",
                        sm: "300px",
                        md: "300px",
                        lg: "300px",
                    },
                    padding: "0px 10px",
                    border: "1px solid #ACACAC",
                    marginBottom: "10px",
                    borderRadius: "8px",
                }}>
                <InputBase
                    placeholder='Search'
                    fullWidth={true}
                    onChange={(e) => setSearch(e.target.value)}
                    endAdornment={<Search sx={{
                        color: "#ACACAC",
                    }} />}
                />
            </Box>
            {
                loading ? (
                    <Box
                        sx={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Skeleton variant="rectangular"
                            sx={{
                                width: "100%",
                                height: "40px"
                            }} />

                        <Skeleton variant="rectangular"
                            sx={{
                                marginTop: "10px",
                                width: "100%",
                                height: "50px"
                            }} />
                    </Box>) : (
                    rents.length === 0 ? (
                        <Box sx={{
                            width: "100%",
                            height: "auto",
                            marginTop: "10px",
                            display: "flex",
                            justifyContent: "center",

                        }}>
                            <Typography align="center" variant="body1" sx={{
                                fontSize: "14px",
                            }}>
                                Nothing here for now
                            </Typography>
                        </Box>
                    ) : (
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Property type</TableCell>
                                        {/* <TableCell align="center">Location</TableCell> */}
                                        <TableCell align="center">Price</TableCell>
                                        <TableCell align="center">Duration</TableCell>
                                        <TableCell align="center">Landlord</TableCell>
                                        <TableCell align="center">Phone</TableCell>
                                        <TableCell align="center">Lease Start</TableCell>
                                        <TableCell align="center">Lease End</TableCell>
                                        {/* <TableCell align="center">Status</TableCell> */}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        rents.filter((row, index) => {
                                            return search.toLocaleLowerCase() === "" ? row : row.listing.property_type.type.toLocaleLowerCase().includes(search) || row.listing.landlord.firstname.toLocaleLowerCase().includes(search) || row.listing.landlord.lastname.toLocaleLowerCase().includes(search) || row.listing.amount.toLocaleLowerCase().includes(search) || row.start_date.toLocaleLowerCase().includes(search) || row.start_date.toLocaleLowerCase().includes(search) || row.end_date.toLocaleLowerCase().includes(search)
                                        }).map((row, index) => (
                                            <TableRow
                                                key={index}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="center">
                                                    {row.listing.property_type.type}
                                                </TableCell>
                                                {/* <TableCell align="center">{row.listing.location}</TableCell> */}
                                                <TableCell align="center">{row.listing.amount}</TableCell>
                                                <TableCell align="center">{row.duration}</TableCell>
                                                <TableCell align="center">{row.listing.landlord.firstname + " " + row.listing.landlord.lastname}</TableCell>
                                                <TableCell align="center">{row.listing.landlord.phone}</TableCell>
                                                <TableCell align="center">{row.start_date}</TableCell>
                                                <TableCell align="center">{row.end_date}</TableCell>
                                                {/* <TableCell align="center">
                                                            {row.status === 2 ? "Draft" : row.status === 1 ? "Published" : "Hidden"}
                                                        </TableCell> */}
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    ))
            }


        </Box >
    )
}

export default Rents
