import { ArrowBack} from '@mui/icons-material';
import { Box, Button, Dialog, DialogActions, DialogTitle, Divider, Grid, IconButton, Typography } from '@mui/material';


const ListingsView = ({ openView, closeView, front, rear, bedroom, bathroom,kitchen, toilet}) => {
    // const [front, setFront] = useState([]);
    // https://github.com/heroku/heroku-buildpack-nodejs
    return (
        <Dialog
            fullScreen
            open={openView}
        //   onClose={handleClose}
        //   TransitionComponent={Transition}
        >

            <DialogTitle
                sx={{
                    padding: "10px"
                }}
                id="alert-dialog-title">
                <IconButton onClick={closeView}>
                    <ArrowBack />
                </IconButton>
            </DialogTitle>
            <Divider />
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    padding: "10px 16px",
                    overflowY: "scroll"
                }}>
                {/* property title */}
                <Box
                    mt={1}
                    sx={{
                        width: "100%",
                        height: "auto"
                    }}>
                    <Typography variant="body1"
                        sx={{
                            fontSize: "18px",
                            fontWeight: "550"
                        }}>
                        Title
                    </Typography>
                    <Typography variant="body1"
                        sx={{
                            fontSize: "16px",
                            color: "#9D9899"
                        }}>
                        House for rent
                    </Typography>
                    <Divider sx={{ marginTop: "6px" }} />
                </Box>

                {/* property type */}
                <Box
                    mt={2}
                    sx={{
                        width: "100%",
                        height: "auto"
                    }}>
                    <Typography variant="body1"
                        sx={{
                            fontSize: "18px",
                            fontWeight: "550"
                        }}>
                        Type
                    </Typography>
                    <Typography variant="body1"
                        sx={{
                            fontSize: "16px",
                            color: "#9D9899"
                        }}>
                        Apartment
                    </Typography>
                    <Divider sx={{ marginTop: "6px" }} />
                </Box>

                {/* price */}
                <Box
                    mt={2}
                    sx={{
                        width: "100%",
                        height: "auto"
                    }}>
                    <Typography variant="body1"
                        sx={{
                            fontSize: "18px",
                            fontWeight: "550"
                        }}>
                        Price
                    </Typography>
                    <Typography variant="body1"
                        sx={{
                            fontSize: "16px",
                            color: "#9D9899"
                        }}>
                        GHS 200/month
                    </Typography>
                    <Divider sx={{ marginTop: "6px" }} />
                </Box>

                {/* location */}
                <Box
                    mt={2}
                    sx={{
                        width: "100%",
                        height: "auto"
                    }}>
                    <Typography variant="body1"
                        sx={{
                            fontSize: "18px",
                            fontWeight: "550"
                        }}>
                        Location
                    </Typography>
                    <Typography variant="body1"
                        sx={{
                            fontSize: "16px",
                            color: "#9D9899"
                        }}>
                        Kasoa
                    </Typography>
                    <Divider sx={{ marginTop: "6px" }} />
                </Box>

                {/* inclusion */}
                <Box
                    mt={2}
                    sx={{
                        width: "100%",
                        height: "auto"
                    }}>
                    <Typography variant="body1"
                        sx={{
                            fontSize: "18px",
                            fontWeight: "550"
                        }}>
                        Inclusion
                    </Typography>
                    <Box
                        sx={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            alignItems: "center"
                        }}>
                        <Typography variant="body1"
                            sx={{
                                fontSize: "16px",
                                color: "#9D9899"
                            }}>
                            Bed: 0
                        </Typography> &nbsp; &nbsp;
                        <Typography variant="body1"
                            sx={{
                                fontSize: "16px",
                                color: "#9D9899"
                            }}>
                            Bath: 1
                        </Typography>&nbsp; &nbsp;
                        <Typography variant="body1"
                            sx={{
                                fontSize: "16px",
                                color: "#9D9899"
                            }}>
                            Toilet: 1
                        </Typography>&nbsp; &nbsp;
                        <Typography variant="body1"
                            sx={{
                                fontSize: "16px",
                                color: "#9D9899"
                            }}>
                            Kitchen: 1
                        </Typography>
                    </Box>
                    <Divider sx={{ marginTop: "6px" }} />
                </Box>

                {/* furnished with */}
                <Box
                    mt={2}
                    sx={{
                        width: "100%",
                        height: "auto"
                    }}>
                    <Typography variant="body1"
                        sx={{
                            fontSize: "18px",
                            fontWeight: "550"
                        }}>
                        Furnished with
                    </Typography>
                    <Typography variant="body1"
                        sx={{
                            fontSize: "16px",
                            color: "#9D9899"
                        }}>
                        TV, Bed
                    </Typography>
                    <Divider sx={{ marginTop: "6px" }} />
                </Box>

                {/*  Utilities included */}
                <Box
                    mt={2}
                    sx={{
                        width: "100%",
                        height: "auto"
                    }}>
                    <Typography variant="body1"
                        sx={{
                            fontSize: "18px",
                            fontWeight: "550"
                        }}>
                        Utilities included
                    </Typography>
                    <Box
                        sx={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            alignItems: "center"
                        }}>
                        <Typography variant="body1"
                            sx={{
                                fontSize: "16px",
                                color: "#9D9899"
                            }}>
                            Water: Yes
                        </Typography> &nbsp; &nbsp;
                        <Typography variant="body1"
                            sx={{
                                fontSize: "16px",
                                color: "#9D9899"
                            }}>
                            Electricity: Yes
                        </Typography>
                    </Box>
                    <Divider sx={{ marginTop: "6px" }} />
                </Box>

                {/* description */}
                <Box
                    mt={2}
                    sx={{
                        width: "100%",
                        height: "auto"
                    }}>
                    <Typography variant="body1"
                        sx={{
                            fontSize: "18px",
                            fontWeight: "550"
                        }}>
                        Description
                    </Typography>
                    <Typography variant="body1"
                        sx={{
                            fontSize: "16px",
                            color: "#9D9899"
                        }}>
                        Newly built house for rent at kasoa
                    </Typography>
                    <Divider sx={{ marginTop: "6px" }} />
                </Box>

                {/* images */}
                <Box
                    mt={2}
                    sx={{
                        width: "100%",
                        height: "auto"
                    }}>
                    <Typography variant="body1"
                        sx={{
                            fontSize: "18px",
                            fontWeight: "550"
                        }}>
                        Images
                    </Typography>


                    <Typography variant="body1"
                        sx={{
                            fontSize: "16px",
                            color: "#9D9899"
                        }}>
                        Front view
                    </Typography>
                    <Box
                        sx={{
                            width: "100%",
                            height: "auto",
                        }}>
                        <Grid
                            container
                            columnSpacing={2}
                            rowSpacing={4}
                        >
                            <Grid item xs={12} sm={6} md={6} lg={6}>
                                <Box sx={{
                                    width: "100%",
                                    height: "auto",
                                }}>
                                    <img alt=""
                                        style={{
                                            width: "100%",
                                            height: "auto"
                                        }} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider sx={{ marginTop: "6px" }} />
                </Box>
            </Box>
            <DialogActions
                sx={{
                    justifyContent: "center"
                }}>
                <Button sx={{
                    textTransform: "none",
                    fontSize: "16px",
                    color: "#35BF43",
                }}>Move</Button>
                <Button sx={{
                    textTransform: "none",
                    fontSize: "16px",
                    color: "#35BF43",
                }}>Edit</Button>
                <Button sx={{
                    textTransform: "none",
                    fontSize: "16px",
                    color: "#35BF43",
                }}>Delete</Button>
            </DialogActions>
        </Dialog>
    );
}

export default ListingsView;
