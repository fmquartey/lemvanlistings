import { Alarm, ListAlt, PeopleAlt } from '@mui/icons-material';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import HomeCard from '../../components/landlord/HomeCard';
import { UserContext } from '../../context/UserContext';

const Home = () => {
    const { openSidebar } = useContext(UserContext);

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
                                count={"50"}
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
                                count={"50"}
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
                                count={"50"}
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
                                    <PeopleAlt
                                        sx={{
                                            fontSize: "40px",
                                        }}
                                    />}
                                title={"Other"}
                                count={"50"}
                            />
                        </Link>
                    </Grid>

                </Grid>
            </Box>


        </Box>
    );
}

export default Home;
