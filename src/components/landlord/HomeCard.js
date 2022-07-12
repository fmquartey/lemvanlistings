import { PeopleAlt } from '@mui/icons-material';
import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

const HomeCard = (props) => {
    return (
        <Paper
            elevation={2}
            sx={{
                width: "200px",
                height: "100px",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#35BF43",
                borderRadius: "14px 14px 8px 8px",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    padding: {
                        xs: "1rem 0.8rem",
                        sm: "1rem 0.8rem",
                        md: "1rem 2rem",
                        lg: "1rem 2rem",
                    },
                    alignItems: "center",
                    justifyContent:"center",
                    borderRadius: "8px",
                    backgroundColor: "#FFF",
                    marginTop: "5px",
                }}>

                <Box
                    sx={{
                        width: "50%",
                        display: "flex",
                       
                    }}>
                   {props.icon}
                </Box>

                <Box
                    sx={{
                        width:"100%",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        
                    }}
                >
                    <Typography variant="body1"
                        sx={{
                            fontSize: "14px",
                            fontWeight:"500",
                        }}>
                        {props.title}
                    </Typography>
                    <Typography variant="body1"
                        sx={{
                            fontSize: "18px",
                            fontWeight: "600",
                        }}>
                        {props.count}
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
}

export default HomeCard;
