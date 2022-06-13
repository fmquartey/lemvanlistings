import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import google from ".././img/googlelogo.png";
import apple from ".././img/applelogo.png";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      p={3}
      sx={{
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#FBFDFB",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                justifyContent: "start",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "600",
                  fontSize: "20px",
                  color: "#35BF43",
                  lineHeight: "25px",
                }}
              >
                Our Services
              </Typography>
              <Stack space={2}>
                <Link
                  to="#"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#263238",
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "14px",
                        lg: "14px",
                      },
                      fontWeight: "400",
                    }}
                  >
                    How to rent
                  </Typography>
                </Link>
                <Link
                  to="#"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#263238",
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "14px",
                        lg: "14px",
                      },
                      fontWeight: "400",
                    }}
                  >
                    List your property
                  </Typography>
                </Link>
                <Link
                  to="#"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#263238",
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "14px",
                        lg: "14px",
                      },
                      fontWeight: "400",
                    }}
                  >
                    Refer and earn
                  </Typography>
                </Link>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                justifyContent: "start",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "600",
                  fontSize: "20px",
                  color: "#35BF43",
                }}
              >
                Company
              </Typography>
              <Stack space={2}>
                <Link
                  to="#"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#263238",
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "14px",
                        lg: "14px",
                      },
                      fontWeight: "400",
                    }}
                  >
                    About
                  </Typography>
                </Link>
                <Link
                  to="#"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#263238",
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "14px",
                        lg: "14px",
                      },
                      fontWeight: "400",
                    }}
                  >
                    Careers
                  </Typography>
                </Link>
                <Link
                  to="#"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#263238",
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "14px",
                        lg: "14px",
                      },
                      fontWeight: "400",
                    }}
                  >
                    Blog
                  </Typography>
                </Link>
                <Link
                  to="#"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#263238",
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "14px",
                        lg: "14px",
                      },
                      fontWeight: "400",
                    }}
                  >
                    Contact us
                  </Typography>
                </Link>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                justifyContent: "start",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "600",
                  fontSize: "20px",
                  color: "#35BF43",
                  lineHeight: "25px",
                }}
              >
                Learn
              </Typography>
              <Stack space={2}>
                <Link
                  to="#"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#263238",
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "14px",
                        lg: "14px",
                      },
                      fontWeight: "400",
                    }}
                  >
                    FAQs
                  </Typography>
                </Link>
                <Link
                  to="#"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#263238",
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "14px",
                        lg: "14px",
                      },
                      fontWeight: "400",
                    }}
                  >
                    Tenancy Terms
                  </Typography>
                </Link>
                <Link
                  to="#"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#263238",
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "14px",
                        lg: "14px",
                      },
                      fontWeight: "400",
                    }}
                  >
                    Privacy Policy
                  </Typography>
                </Link>
                <Link
                  to="#"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#263238",
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "14px",
                        lg: "14px",
                      },
                      fontWeight: "400",
                    }}
                  >
                    Terms of use
                  </Typography>
                </Link>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                justifyContent: "start",
                flexDirection: "column",
              }}
            >
              <Link
                to="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",

                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    height: "50px",
                    width: {
                      xs: "110px",
                      sm: "110px",
                      md: "140px",
                      lg: "150px",
                    },
                  }}
                >
                  <img
                    src={google}
                    alt="google"
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </Box>
              </Link>
              <Link
                to="#"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <Box
                  sx={{
                    marginLeft: "5px",
                    height: "50px",
                    width: {
                      xs: "100px",
                      sm: "100px",
                      md: "140px",
                      lg: "140px",
                    },
                  }}
                >
                  <img
                    src={apple}
                    alt="apple"
                    style={{
                      height: "45px",
                      width: "100%",
                    }}
                  />
                </Box>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        mt={2}
        sx={{
          width: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Divider
            sx={{
              backgroundColor: "#263238",
              height: "1px",
            }}
          />
          <Box
            mt={1}
            sx={{
              width: "100%",
           
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "300",
                    color: "#263238",
                  }}
                >
                  Lemvan Technologies, © 2022 | Accra Gh | Apartments for Rent.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: {
                      xs: "space-evenly",
                      sm: "flex-end",
                      md: "flex-end",
                      lg: "flex-end",
                    },
                  }}
                >
                  <Link
                    to="#"
                    style={{
                      textDecoration: "none",
                      color: "#000000",
                      marginRight: "50px",
                    }}
                  >
                    <Facebook fontSize="large" />
                  </Link>
                  <Link
                    to="#"
                    style={{
                      textDecoration: "none",
                      color: "#000000",
                      marginRight: "50px",
                    }}
                  >
                    <Twitter fontSize="large" />
                  </Link>
                  <Link
                    to="#"
                    style={{
                      textDecoration: "none",
                      color: "#000000",
                    }}
                  >
                    <Instagram fontSize="large" />
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
