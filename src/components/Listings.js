import { Box, Card, CardContent, CircularProgress, Grid, IconButton, Paper, Typography } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Axios from "axios";

import ListingCard from './ListingCard';
import ReactPaginate from 'react-paginate';
import hse1 from "../img/hse1.jpg";
import hse2 from "../img/hse2.jpg";
import hse3 from "../img/hse3.jpg";
import hse4 from "../img/hse4.jpg";
import hse5 from "../img/hse5.jpg";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { UserContext } from '../context/UserContext';
import { apilink } from '../Helper';

const Listings = (props) => {
    const [showTag, setShowTag] = useState(true);
    const [listings, setListings] = useState([]);

    const { searchParam } = useContext(UserContext);


    const [loading, setLoading] = useState(false);
    const backendurl = apilink;

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

    const searchListings = () => {
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
                                    {listings.map((data) => (
                                    <Grid item xs={6} sm={4} md={3} lg={3}>
                                        <ListingCard
                                            key={data.id}
                                            id={data.id}
                                            image={data.image}
                                            image1={data.image}
                                            image2={data.image}
                                            image3={data.image}
                                            image4={data.image}
                                            showTag={showTag}
                                            amount={data.amount}
                                            property_type={data.property_type.type}
                                            number_of_bathrooms={data.number_of_bathrooms}
                                            number_of_bedrooms={data.number_of_bedrooms}
                                            location={data.location}
                                            region={data.region}
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
