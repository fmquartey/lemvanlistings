import { CloudUpload, PhotoCamera } from "@mui/icons-material";
import { Box, Button, Divider, FormControl, FormControlLabel, FormLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material"
import React, { useState } from "react";
import { apilink } from "../../Helper";
import Axios from "axios";






const ListingForms = () => {
    const [propertyType, setPropertyType] = useState("Apartment");
    const [propertyTitle, setPropertyTitle] = useState("");
    const [amount, setAmount] = useState();
    const [period, setPeriod] = useState("Month");
    const [number_of_bedrooms, setNumber_of_bedrooms] = useState();
    const [number_of_bathrooms, setNumber_of_bathrooms] = useState();
    const [number_of_toilets, setNumber_of_toilets] = useState();
    const [has_kitchen, setHas_kitchen] = useState(false);
    const [number_of_kitchens, setNumber_of_kitchens] = useState();
    const [has_water, setHas_water] = useState(false);
    const [has_electricity, setHas_electricity] = useState(false);
    const [is_furnished, setIs_furnished] = useState(false);
    const [furnished_with, setFurnished_with] = useState("");
    const [location, setLocation] = useState("");
    const [region, setRegion] = useState("");
    const [full_property_description, setFull_property_description] = useState("");
    const [is_verified, setIs_verified] = useState(false);
    const [rear, setRear] = useState("");
    const [front, setFront] = useState("");
    const [bird_eye_view, setBird_eye_view] = useState("");
    const [kitchen, setKitchen] = useState("");
    const [bathroom, setBathroom] = useState("");
    const [toilet, setToilet] = useState("");
    const [bedroom, setBedroom] = useState("");
    const [other_images, setOther_images] = useState("");

    const handleChange = (e) => {
        setPropertyType(e.target.value);
    }

    const hasKitchen = (e) => {
        setHas_kitchen(e.target.value)
        if (has_kitchen) {
            setHas_kitchen(false);
        } else {
            setHas_kitchen(true);
        }
    }

    const isFurnished = (e) => {
        setIs_furnished(e.target.value)
        if (is_furnished) {
            setIs_furnished(false);
        } else {
            setIs_furnished(true);
        }
    }

    const formSubmit = () => {
        const formData = new FormData();
        formData.append("property_type", propertyType);
        formData.append("property_title", propertyTitle);
        formData.append("amount", amount);
        formData.append("period", period);
        formData.append("number_of_bedrooms", number_of_bedrooms);
        formData.append("number_of_bathrooms", number_of_bathrooms);
        formData.append("number_of_toilets", number_of_toilets);
        formData.append("has_kitchen", has_kitchen);
        formData.append("number_of_kitchens", number_of_kitchens);
        formData.append("has_water", has_water);
        formData.append("has_electricity", has_electricity);
        formData.append("is_furnished", is_furnished);
        formData.append("furnished_with", furnished_with);
        formData.append("location", location);
        formData.append("region", region);
        formData.append("full_property_description", full_property_description);
        formData.append("is_verified", is_verified);
        formData.append("rear", rear);
        formData.append("front", front);
        formData.append("bird_eye_view", bird_eye_view);
        formData.append("kitchen", kitchen);
        formData.append("bathroom", bathroom);
        formData.append("toilet", toilet);
        formData.append("bedroom", bedroom);
        formData.append("other_images", other_images);

        Axios.post(`${apilink}/api/listings`, formData).then(res => {

        }).catch(err => {
            console.log(err);
        })
        console.log(propertyType, propertyTitle, amount, period, number_of_bedrooms, number_of_bathrooms, number_of_toilets, has_kitchen, number_of_kitchens, has_water, has_electricity, is_furnished, furnished_with, location, region, full_property_description, is_verified, rear, front, bird_eye_view, kitchen, bathroom, toilet, bedroom, "Other images", other_images);
    }


    return (
        <Box
            sx={{
                width: {
                    xs: "100%",
                    sm: "100%",
                    md: "80%",
                    lg: "80%",
                    backgroundColor: "#fff",

                },
                height: "auto",
                margin: "auto",
            }}>
            <Paper elevation={2} sx={{
                width: "100%",
                height: "100%",
                padding: {
                    xs: "25px 0",
                    sm: "25px 0",
                    md: "30px",
                    lg: "30px",
                },
            }}>
                <Box sx={{
                    width: {
                        xs: "90%",
                        sm: "90%",
                        md: "80%",
                        lg: "80%",
                    },
                    margin: "auto",
                }}>

                    <Box
                        sx={{
                            width: {
                                xs: "100%",
                                sm: "100%",
                                md: "60%",
                                lg: "60%",
                            },
                            height: "auto",
                            margin: "auto",
                        }}>
                        <Stack spacing={2}>
                            <TextField
                                color="success"
                                select
                                fullWidth={true}
                                size="small"
                                value={propertyType}
                                onChange={handleChange}
                                label="Property Type"
                                sx={{
                                    marginTop: "3px"
                                }}
                            >
                                <MenuItem value="Apartment">Apartment</MenuItem>
                                <MenuItem value="Single Room">Single Room</MenuItem>
                                <MenuItem value="House">House</MenuItem>
                            </TextField>


                            <TextField
                                color="success"
                                fullWidth={true}
                                size="small"
                                value={propertyTitle}
                                onChange={(e) => setPropertyTitle(e.target.value)}
                                label="Property Title"
                            />



                            <TextField
                                color="success"
                                fullWidth={true}
                                size="small"
                                type="number"
                                value={number_of_bedrooms}
                                onChange={(e) => setNumber_of_bedrooms(e.target.value)}
                                label="No. of Bedrooms"
                            />
                            <TextField
                                color="success"
                                fullWidth={true}
                                size="small"
                                type="number"
                                value={number_of_bathrooms}
                                onChange={(e) => setNumber_of_bathrooms(e.target.value)}
                                label="No. of Bathrooms"
                            />
                            <TextField
                                color="success"
                                fullWidth={true}
                                size="small"
                                type="number"
                                value={number_of_toilets}
                                onChange={(e) => setNumber_of_toilets(e.target.value)}
                                label="No. of Toilets"
                            />

                            <FormControl>
                                <FormLabel
                                    id="has_kitchen_label"
                                    focused={false}
                                >Has kitchen?</FormLabel>
                                <RadioGroup
                                    row
                                    name="has_kitchen"
                                    aria-labelledby="has_kitchen_label"
                                    value={has_kitchen}
                                    onChange={hasKitchen}>
                                    <FormControlLabel
                                        value={false}
                                        control={<Radio
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 18,
                                                },
                                                '&.Mui-checked': {
                                                    color: "#35BF43",
                                                },
                                            }
                                            }
                                        />}
                                        label="No" />
                                    <FormControlLabel
                                        value={true}

                                        control={<Radio
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 18,
                                                },
                                                '&.Mui-checked': {
                                                    color: "#35BF43",
                                                },
                                            }
                                            }
                                        />}
                                        label="Yes" />
                                </RadioGroup>
                            </FormControl>


                            {
                                has_kitchen ?
                                    (
                                        <TextField

                                            color="success"
                                            fullWidth={true}
                                            size="small"
                                            type="number"
                                            value={number_of_kitchens}
                                            onChange={(e) => setNumber_of_kitchens(e.target.value)}
                                            label="No. of Kitchens"
                                        />
                                    ) : null
                            }

                            <FormControl>
                                <FormLabel
                                    id="has_water_label"
                                    focused={false} >Has water?</FormLabel>
                                <RadioGroup
                                    row
                                    name="has_water"
                                    aria-labelledby="has_water_label"
                                    value={has_water}
                                    onChange={(e) => setHas_water(e.target.value)}>
                                    <FormControlLabel
                                        value={false}
                                        control={<Radio
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 18,
                                                },
                                                '&.Mui-checked': {
                                                    color: "#35BF43",
                                                },
                                            }
                                            }
                                        />}
                                        label="No" />
                                    <FormControlLabel
                                        value={true}
                                        control={<Radio
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 18,
                                                },
                                                '&.Mui-checked': {
                                                    color: "#35BF43",
                                                },
                                            }
                                            }
                                        />}
                                        label="Yes" />
                                </RadioGroup>
                            </FormControl>

                            <FormControl>
                                <FormLabel
                                    id="has_electricity_label"
                                    focused={false} >Has electricity?</FormLabel>
                                <RadioGroup
                                    row
                                    name="has_electricity"
                                    aria-labelledby="has_electricity_label"
                                    value={has_electricity}
                                    onChange={(e) => setHas_electricity(e.target.value)}>
                                    <FormControlLabel
                                        value={false}
                                        control={<Radio
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 18,
                                                },
                                                '&.Mui-checked': {
                                                    color: "#35BF43",
                                                },
                                            }
                                            }
                                        />}
                                        label="No" />
                                    <FormControlLabel
                                        value={true}
                                        control={<Radio
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 18,
                                                },
                                                '&.Mui-checked': {
                                                    color: "#35BF43",
                                                },
                                            }
                                            }
                                        />}
                                        label="Yes" />
                                </RadioGroup>
                            </FormControl>

                            <FormControl>
                                <FormLabel
                                    id="has_funished_label"
                                    focused={false} >Is funished?</FormLabel>
                                <RadioGroup
                                    row
                                    name="has_funished"
                                    aria-labelledby="has_funished_label"
                                    value={is_furnished}
                                    onChange={isFurnished}>
                                    <FormControlLabel
                                        value={false}
                                        control={<Radio
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 18,
                                                },
                                                '&.Mui-checked': {
                                                    color: "#35BF43",
                                                },
                                            }
                                            }
                                        />}
                                        label="No" />
                                    <FormControlLabel
                                        value={true}
                                        control={<Radio
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 18,
                                                },
                                                '&.Mui-checked': {
                                                    color: "#35BF43",
                                                },
                                            }
                                            }
                                        />}
                                        label="Yes" />
                                </RadioGroup>
                            </FormControl>

                            {
                                is_furnished ?
                                    (
                                        <TextField
                                            color="success"
                                            fullWidth={true}
                                            size="small"
                                            value={furnished_with}
                                            onChange={(e) => setFurnished_with(e.target.value)}
                                            label="Funished with"
                                            multiline={true}
                                            rows={3} />
                                    ) : null
                            }

                            <TextField
                                color="success"
                                fullWidth={true}
                                size="small"
                                value={full_property_description}
                                onChange={(e) => setFull_property_description(e.target.value)}
                                label="Full property description"
                                multiline={true}
                                rows={8}
                            />


                            <TextField
                                color="success"
                                fullWidth={true}
                                size="small"
                                value={region}
                                onChange={(e) => setRegion(e.target.value)}
                                label="Region"
                            />

                            <TextField
                                color="success"
                                fullWidth={true}
                                size="small"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                label="Location"
                            />

                            <TextField
                                color="success"
                                fullWidth={true}
                                size="small"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                label="Amount(GHC)"
                            />

                            <TextField
                                color="success"
                                select
                                fullWidth={true}
                                size="small"
                                value={period}
                                onChange={(e) => setPeriod(e.target.value)}
                                label="Period"
                            >
                                <MenuItem value="Week">Week</MenuItem>
                                <MenuItem value="Month">Month</MenuItem>
                                <MenuItem value="Year">Year</MenuItem>
                            </TextField>
                        </Stack>

                        <Box mt={3}>
                            <Divider />
                            <Typography mt={1}
                                variant="body1"
                                sx={{
                                    fontSize: "16px",
                                }}>Upload Images
                            </Typography>
                            <Stack mt={2} spacing={1}>
                                <Stack spacing={1} direction="row" sx={{
                                    alignItems: "center",
                                }}>
                                    <Button
                                        variant="outlined"
                                        component="label"
                                        fullWidth={false}
                                        sx={{
                                            textTransform: "none",
                                            fontSize: "14px",
                                            color: "#000",
                                        }}
                                    >
                                        Front
                                        <input hidden accept="image/*" type="file"
                                            onChange={(e) => setFront(e.target.files[0])}
                                        />
                                    </Button>
                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                        {
                                            front === "" ? "No file selected" : front.name
                                        }
                                    </Typography>
                                </Stack>
                                <Stack spacing={1} direction="row" sx={{
                                    alignItems: "center",
                                }}>
                                    <Button
                                        variant="outlined"
                                        component="label"

                                        sx={{
                                            textTransform: "none",
                                            fontSize: "14px",
                                            color: "#000",
                                        }}
                                    >
                                        Rear
                                        <input hidden accept="image/*" type="file"
                                            onChange={(e) => setRear(e.target.files[0])}
                                        />
                                    </Button>
                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                        {
                                            rear === "" ? "No file selected" : rear.name
                                        }
                                    </Typography>
                                </Stack>
                                <Stack spacing={1} direction="row" sx={{
                                    alignItems: "center",
                                }}>
                                    <Button
                                        variant="outlined"
                                        component="label"

                                        sx={{
                                            textTransform: "none",
                                            fontSize: "14px",
                                            color: "#000",
                                        }}
                                    >
                                        Bird eye view
                                        <input hidden accept="image/*" type="file"
                                            onChange={(e) => setBird_eye_view(e.target.files[0])}
                                        />
                                    </Button>
                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                        {
                                            bird_eye_view === "" ? "No file selected" : bird_eye_view.name
                                        }
                                    </Typography>
                                </Stack>
                                <Stack spacing={1} direction="row" sx={{
                                    alignItems: "center",
                                }}>
                                    <Button
                                        variant="outlined"
                                        component="label"

                                        sx={{
                                            textTransform: "none",
                                            fontSize: "14px",
                                            color: "#000",
                                        }}
                                    >
                                        Kitchen
                                        <input hidden accept="image/*" type="file"
                                            onChange={(e) => setKitchen(e.target.files[0])}
                                        />
                                    </Button>
                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                        {
                                            kitchen === "" ? "No file selected" : kitchen.name
                                        }
                                    </Typography>
                                </Stack>
                                <Stack spacing={1} direction="row" sx={{
                                    alignItems: "center",
                                }}>
                                    <Button
                                        variant="outlined"
                                        component="label"

                                        sx={{
                                            textTransform: "none",
                                            fontSize: "14px",
                                            color: "#000",
                                        }}
                                    >
                                        Bedroom
                                        <input hidden accept="image/*" type="file"
                                            onChange={(e) => setBedroom(e.target.files[0])}
                                        />
                                    </Button>
                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                        {
                                            bedroom === "" ? "No file selected" : bedroom.name
                                        }
                                    </Typography>
                                </Stack>
                                <Stack spacing={1} direction="row" sx={{
                                    alignItems: "center",
                                }}>
                                    <Button
                                        variant="outlined"
                                        component="label"
                                        sx={{
                                            textTransform: "none",
                                            fontSize: "14px",
                                            color: "#000",
                                        }}
                                    >
                                        Bathroom
                                        <input hidden accept="image/*" type="file"
                                            onChange={(e) => setBathroom(e.target.files[0])}
                                        />
                                    </Button>
                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                        {
                                            bathroom === "" ? "No file selected" : bathroom.name
                                        }
                                    </Typography>
                                </Stack>
                                <Stack spacing={1} direction="row" sx={{
                                    alignItems: "center",
                                }}>
                                    <Button
                                        variant="outlined"
                                        component="label"

                                        sx={{
                                            textTransform: "none",
                                            fontSize: "14px",
                                            color: "#000",
                                        }}
                                    >
                                        Toilet
                                        <input hidden accept="image/*" type="file"
                                            onChange={(e) => setToilet(e.target.files[0])}
                                        />
                                    </Button>
                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                        {
                                            toilet === "" ? "No file selected" : toilet.name
                                        }
                                    </Typography>
                                </Stack>
                                <Stack spacing={1} direction="row" sx={{
                                    alignItems: "center",
                                }}>
                                    <Button
                                        variant="outlined"
                                        component="label"

                                        sx={{
                                            textTransform: "none",
                                            fontSize: "14px",
                                            color: "#000",
                                        }}
                                    >
                                        Other
                                        <input hidden accept="image/*" type="file"
                                            onChange={(e) => setOther_images(e.target.files[0])}
                                        />
                                    </Button>
                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                        {
                                            other_images === "" ? "No file selected" : other_images.name
                                        }
                                    </Typography>
                                </Stack>
                            </Stack>

                            <Divider />
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    marginTop: "20px",
                                }}>
                                <Button
                                    size="small"
                                    variant="contained"
                                    onClick={formSubmit}
                                    sx={{
                                        textTransform: "none",
                                        fontSize: "14px",
                                        backgroundColor: "#35BF43",
                                        color: "#fff",
                                        "&:hover": {
                                            backgroundColor: "#35BF43",
                                        }
                                    }}
                                >
                                    Submit
                                </Button>
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Paper>
        </Box>
    );
}

export default ListingForms;