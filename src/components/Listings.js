import { Box, Card, CardContent, CircularProgress, Grid, IconButton, Paper, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Axios from "axios";

import ListingCard from './ListingCard';
import ReactPaginate from 'react-paginate';
import hse1 from "../img/hse1.jpg";
import hse2 from "../img/hse2.jpg";
import hse3 from "../img/hse3.jpg";
import hse4 from "../img/hse4.jpg";
import hse5 from "../img/hse5.jpg";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const Listings = () => {
    const [showTag, setShowTag] = useState(true);
    const [listings, setListings] = useState([]);

    const [loading, setLoading] = useState(false);

    const paginateRef = useRef(null);
    const backendurl = process.env.REACT_APP_BACKEND_URL;


    const getListings = () => {
        setLoading(true);
        Axios.get(`${backendurl}/api/listings`)
            .then((res) => {
                setLoading(false);
                setListings(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getListings();
    }, []);


    const handlePageClick = (e) => {
        console.log(e.selected);
    }

    return (

        <>
            {
                loading ? (
                    <Box
                        sx={{
                            width: "100%",
                            height: "50px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <CircularProgress
                            size={25}
                            sx={{
                                color: "#35BF43",
                            }}
                        />
                    </Box>
                ) : (
                    <>
                        <Box
                            mt={2}
                            sx={{
                                width: "100%",
                                height: "auto",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                            <Grid container columnSpacing={1} rowSpacing={1}>
                                {listings.map((listing) => (
                                    <Grid item xs={6} sm={4} md={3} lg={3}>
                                        <ListingCard
                                            key={listing.id}
                                            image={listing.image}
                                            image1={listing.image}
                                            image2={listing.image}
                                            image3={listing.image}
                                            image4={listing.image}
                                            id={listing.id}
                                            showTag={showTag}
                                            amount={listing.amount}
                                            property_type={listing.property_type.type}
                                            number_of_bathrooms={listing.number_of_bathrooms}
                                            number_of_bedrooms={listing.number_of_bedrooms}
                                            location={listing.location}
                                            region={listing.region}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                        <Box sx={{
                            padding: {
                                xs: '1rem 0',
                                sm: '1rem 0',
                                md: '1rem',
                                lg: '1rem',
                            },
                            width: "100%",
                            display: "flex",
                            justifyContent: {
                                xs: "center",
                                sm: "center",
                                md: "flex-end",
                                lg: "flex-end",
                            },
                            alignItems: "center",
                        }}>
                            <Paper
                                elevation={0}
                                disableGutters={true}
                                sx={{
                                    width: {
                                        xs: "100%",
                                        sm: "100%",
                                        md: "auto",
                                        lg: "auto",
                                    },
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: " 0 1rem",
                                }}>
                                <ReactPaginate
                                    previousLabel={"Prev"}
                                    nextLabel={"Next"}
                                    breakLabel={"..."}
                                    pageCount={50}
                                    marginPagesDisplayed={1}
                                    onPageChange={handlePageClick}
                                    containerClassName={"pagination"}
                                    activeLinkClassName={"active"}
                                    previousLinkClassName={"prevlink"}
                                    previousClassName={"prev"}
                                    pageClassName={"page-num"}
                                    pageLinkClassName={"page-num"}
                                    nextLinkClassName={"page-num"}
                                    nextClassName={"next"}
                                    renderOnZeroPageCount={false}
                                    pageRangeDisplayed={1}
                                />
                            </Paper>
                        </Box>
                    </>
                )
            }

        </>
    );
}

export default Listings;
