import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
const navigate = useNavigate();

  // Rigister Tenant
const TenantAccount = () => {
  navigate("/register/accounttype/0");
};

  // Register Landlord
const LandlordAccount = () => {
  navigate("/register/accounttype/1");
};

  return (
    <Box
      sx={{
        height: {
          xs: "auto",
          sm: "auto",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            padding: "2rem",
          }}
        >
          <Stack spacing={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* header */}
              <Typography
                variant="h2"
                sx={{
                  textAlign: "center",
                  fontWeight: "700",
                  fontSize: {
                    xs: "35px",
                    sm: "35px",
                    md: "85px",
                    lg: "85px",
                  },
                  wordSpacing: {
                    xs: "0.2",
                    sm: "0.2",
                    md: "0.1rem",
                    lg: "0.1rem",
                  },
                  color: "#35BF43",
                  lineHeight: {
                    xs: "1.1",
                    sm: "1.3",
                    md: "100px",
                    lg: "100px",
                  },
                }}
              >
                The key to your comfort <br />
                is a click away
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* subtitle */}
              <Typography
                variant="subtitle1"
                align="center"
                sx={{
                  fontSize: {
                    xs: "20px",
                    sm: "20px",
                    md: "45px",
                    lg: "45px",
                  },
                  lineHeight: {
                    xs: "1.3",
                    sm: "1.3",
                    md: "65px",
                    lg: "65px",
                  },
                  fontWeight: "500",
                }}
              >
                Let us help you get started.
                <br /> Register now as a
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",

                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Stack spacing={5} direction="row">
                  <Button
                    variant="outlined"
                    color="inherit"
                    size="large"
                    onClick={TenantAccount}
                    sx={{
                      textTransform: "none",
                      width: {
                        xs: "120px",
                        sm: "130px",
                        md: "250px",
                        lg: "250px",
                      },
                      borderRadius: "20px",
                      border: "1px solid #000000",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: {
                          xs: "18px",
                          sm: "18px",
                          md: "25px",
                          lg: "25px",
                        },
                        fontWeight: "700",
                      }}
                    >
                      Tenant
                    </Typography>
                  </Button>

                  <Button
                    variant="outlined"
                    color="inherit"
                    size="large"
                    onClick={LandlordAccount}
                    sx={{
                      textTransform: "none",
                      width: {
                        xs: "120px",
                        sm: "130px",
                        md: "250px",
                        lg: "250px",
                      },
                      borderRadius: "20px",
                      border: "1px solid #000000",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: {
                          xs: "18px",
                          sm: "18px",
                          md: "25px",
                          lg: "25px",
                        },
                        fontWeight: "700",
                      }}
                    >
                      Landlord
                    </Typography>
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
