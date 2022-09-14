import { Alarm, ListAlt, PeopleAlt } from '@mui/icons-material';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeCard from '../../components/landlord/HomeCard';
import { UserContext } from '../../context/UserContext';
import Axios from "axios";
import { apilink } from '../../Helper';

const Home = () => {
    const { openSidebar, token } = useContext(UserContext);
    const [count, setCount] = useState([])


    const authAxios = Axios.create({
        baseURL: apilink,
        headers: {
            Authorization: "Bearer " + token,
            "content-type": 'multipart/form-data'
        },
    });


    const dashboard = () => {
        // setLoading(true);
        authAxios.get("api/landlord/dashboard")
            .then((res) => {
                // setLoading(false);
                setCount(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
                // setLoading(false);
            });
    };

    useEffect(() => {
        dashboard();
    }, [])

    return (
        <Box sx={{
            width: "100%",
            height: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
        }}>

            <Box
                sx={{
                    width: {
                        xs: "100%",
                        sm: "100%",
                        md: !openSidebar ? "85%" : "100%",
                        lg: !openSidebar ? "85%" : "100%",
                    },
                    margin: {
                        md: "auto",
                        lg: "auto"
                    },
                    padding: "10px 25px",
                }}>
                <Grid
                    container
                    columnSpacing={2}
                    rowSpacing={4}
                >
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        md={3}
                        lg={3}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Link
                            to="/app/landlord/listings"
                            style={{
                                textDecoration: "none",
                            }}
                        >
                            <HomeCard
                                icon={
                                    <ListAlt
                                        sx={{
                                            fontSize: "40px",
                                        }}
                                    />}
                                title={"Listings"}
                                count={count.listingsCount}
                            />
                        </Link>

                    </Grid>
                    <Grid item xs={12} sm={4} md={3} lg={3}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Link
                            to="/app/landlord/tenants"
                            style={{
                                textDecoration: "none",
                            }}
                        >
                            <HomeCard
                                icon={
                                    <PeopleAlt
                                        sx={{
                                            fontSize: "40px",
                                        }}
                                    />}
                                title={"Tenants"}
                                count={count.currentTenantCount}
                            />
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} lg={3}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Link
                            to="/app/landlord/appointments"
                            style={{
                                textDecoration: "none",
                            }}
                        >
                            <HomeCard
                                icon={
                                    <Alarm
                                        sx={{
                                            fontSize: "40px",
                                        }}
                                    />}
                                title={"Appointments"}
                                count={count.appointmentCount}
                            />
                        </Link>
                    </Grid>
                    

                </Grid>
            </Box>


        </Box>
    );
}

export default Home;
