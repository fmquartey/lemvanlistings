import { Box, Container, Stack, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from '../context/UserContext';

const PwdResetSuccess = () => {
  const { successmessage } = useParams();
  const navigate = useNavigate();

const { setShowNav } = useContext(UserContext);

  const redirect = () => { 
    setTimeout(() => {
      navigate("/login");
    }, 5000);
  }

  useEffect(() => {
  setShowNav(false);
    redirect();
  }, []);

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
          <Typography variant="body1">
            Redirecting you to the login page in 5 seconds
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default PwdResetSuccess
