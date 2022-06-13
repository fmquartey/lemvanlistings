import { Box, Container, Stack, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";

const PwdResetSuccess = () => {
  const { successmessage } = useParams();
  const navigate = useNavigate();

  // const redirect = () => { 
  //   setTimeout(() => {
  //     navigate("/login");
  //   }, 5000);
  // }

  // useEffect(() => {
  //   redirect();
  // }, []);

  return (
    <Box
      sx={{
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={1}
          sx={{
            alignItems: "center",
          }}
        >
          <Typography variant="body1">{successmessage}</Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default PwdResetSuccess
