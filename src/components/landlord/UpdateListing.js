import { CloudUpload, HelpOutlineOutlined } from "@mui/icons-material";
import { Box, Button, Divider, FormControl, FormControlLabel, FormLabel, IconButton, MenuItem, Paper, Radio, RadioGroup, Stack, TextField, Tooltip, Typography } from "@mui/material"
import React, { useContext, useEffect, useState } from "react";
import { apilink } from "../../Helper";
import Axios from "axios";
import AlertDialog from "../AlertDialog";
import MsgBox from "../Alert";
import { UserContext } from "../../context/UserContext";


const UpdateListing = () => {
    const { token } = useContext(UserContext);
    const [propertyType, setPropertyType] = useState([]);
    const [openAlert, setOpenAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const [openMsgBox, setOpenMsgBox] = useState(false);
    const [msgBoxTitle, setMsgBoxTitle] = useState("");
    const [msgBoxMessage, setMsgBoxMessage] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");
    const [property_type_id, setPropertyType_id] = useState("");
    const [propertyTitle, setPropertyTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [period, setPeriod] = useState("month");
    const [number_of_bedrooms, setNumber_of_bedrooms] = useState("");
    const [number_of_bathrooms, setNumber_of_bathrooms] = useState("");
    const [number_of_toilets, setNumber_of_toilets] = useState("");
    const [has_kitchen, setHas_kitchen] = useState(0);
    const [number_of_kitchens, setNumber_of_kitchens] = useState("");
    const [has_water, setHas_water] = useState(0);
    const [has_electricity, setHas_electricity] = useState(0);
    const [is_furnished, setIs_furnished] = useState(0);
    const [furnished_with, setFurnished_with] = useState("");
    const [location, setLocation] = useState("");
    const [region, setRegion] = useState("");
    const [full_property_description, setFull_property_description] = useState("");
    const [is_verified, setIs_verified] = useState(0);
    const [rear, setRear] = useState([]);
    const [front, setFront] = useState([]);
    const [bird_eye_view, setBird_eye_view] = useState([]);
    const [kitchen, setKitchen] = useState([]);
    const [bathroom, setBathroom] = useState([]);
    const [toilet, setToilet] = useState([]);
    const [bedroom, setBedroom] = useState([]);
    const [other_images, setOther_images] = useState([]);

    const toolTipTitle = "Please upload images of the property such as Front, Rear, Kitchen, Bathroom, Bedrooom, Toilet, Bed eye view. NB: Only 4 images are allowed for each upload"
    const openMsg = () => {
        setOpenMsgBox(true)
        setMsgBoxTitle("Help");
        setMsgBoxMessage(toolTipTitle);
    }

    const closeMsgBox = () => {
        setOpenMsgBox(false)
        setMsgBoxTitle("");
        setMsgBoxMessage("");
    }

    const closeAlert = () => {
        setTimeout(() => {
            if (loading) {
                setOpenAlert(true);
            } else {
                setOpenAlert(false);
            }
        }, 3000);
    }

    const handleChange = (e) => {
        setPropertyType(e.target.value);
    }

    const hasKitchen = (e) => {
        setHas_kitchen(e.target.value)
        if (has_kitchen === 1) {
            setHas_kitchen(0);
        } else {
            setHas_kitchen(1);
        }
    }

    const isFurnished = (e) => {
        setIs_furnished(e.target.value)
        if (is_furnished === 1) {
            setIs_furnished(0);
        } else {
            setIs_furnished(1);
        }
    }

    const authAxios = Axios.create({
        baseURL: apilink,
        headers: {
            Authorization: "Bearer " + token,
        },
    });

    const formSubmit = () => {


        // setOpenAlert(true);
        // setLoading(true);
        // setTimeout(() => {
        //     setLoading(false)
        //     closeAlert()
        // }, 2000);
        if (
            property_type_id === "" &&
            propertyTitle === "" &&
            amount === "" &&
            period === "" &&
            number_of_bedrooms === "" &&
            number_of_bathrooms === "" &&
            number_of_toilets === "" &&
            number_of_kitchens === "" &&
            location === "" &&
            region === "" &&
            full_property_description === ""
        ) {
            setOpenMsgBox(true);
            setMsgBoxTitle("Error");
            setMsgBoxMessage("Please provide property tittle, number of bedrooms, no of bathrooms,number of toilets, price of property, duration, region, location");
        } else {
            if (property_type_id === "") {
                setOpenMsgBox(true);
                setMsgBoxTitle("Error");
                setMsgBoxMessage("Please select the Type of Property")
            } else if (propertyTitle === "") {
                setOpenMsgBox(true);
                setMsgBoxTitle("Error");
                setMsgBoxMessage("Property title is required")
            } else if (amount === "") {
                setOpenMsgBox(true);
                setMsgBoxMessage("Price of property is required")
                setMsgBoxTitle("Error");
            } else if (period === "") {
                setOpenMsgBox(true);
                setMsgBoxMessage("Please provide period for the rent")
                setMsgBoxTitle("Error");
            } else if (number_of_bedrooms === "") {
                setOpenMsgBox(true);
                setMsgBoxMessage("Please provide number of bedrooms")
                setMsgBoxTitle("Error");
            } else if (number_of_bathrooms === "") {
                setOpenMsgBox(true);
                setMsgBoxMessage("Please provide number of bathrooms")
                setMsgBoxTitle("Error");
            } else if (number_of_toilets === "") {
                setOpenMsgBox(true);
                setMsgBoxMessage("Please provide number of toilets in the property")
                setMsgBoxTitle("Error");
            } else if (location === "") {
                setOpenMsgBox(true);
                setMsgBoxMessage("Please location of property is required")
                setMsgBoxTitle("Error");
            } else if (region === "") {
                setOpenMsgBox(true);
                setMsgBoxMessage("Please region is required")
                setMsgBoxTitle("Error");
            } else if (full_property_description === "") {
                setOpenMsgBox(true);
                setMsgBoxMessage("Property description is required")
                setMsgBoxTitle("Error");
            } else {
                if (front.length > 3 || rear.length > 3 || bird_eye_view.length > 3 || kitchen.length > 3 || bathroom.length > 3 || toilet.length > 3 || bedroom.length > 3 || other_images.length > 3) {
                    setOpenMsgBox(true);
                    setMsgBoxMessage("Please images cannot be more than 3")
                    setMsgBoxTitle("Error");
                } else {
                    setOpenAlert(true);
                    setLoading(true);
                    const price = amount + " / " + period;
                    const formData = new FormData();
                    formData.append("property_type_id", property_type_id);
                    formData.append("property_title", propertyTitle);
                    formData.append("amount", price);
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
                    authAxios.post("/api/listings", formData).then(res => {
                        setAlertType("success");
                        setAlertMessage(res.data.data.message)
                        setTimeout(() => {
                            setLoading(false)
                            closeAlert()
                        }, 2000);
                        setPropertyType("")
                        setPropertyTitle("")
                        setAmount("")
                        setPeriod("")
                        setNumber_of_bedrooms("")
                        setNumber_of_bathrooms("")
                        setNumber_of_toilets("")
                        has_kitchen(0)
                        setNumber_of_kitchens("")
                        setHas_water(0)
                        setHas_electricity(0)
                        setIs_furnished(0)
                        setFurnished_with("")
                        setLocation("")
                        setRegion("")
                        setFull_property_description("")
                        is_verified(0)
                        setRear([])
                        setFront([])
                        setBird_eye_view([])
                        setKitchen([])
                        setBathroom([])
                        setToilet([])
                        setBedroom([])
                        setOther_images([])
                    }).catch(err => {
                        console.log(err);
                    })
                }
            }
        }
    }

    const getPropertyType = () => {
        Axios.get(`${apilink}/api/property/types`).then((res) => {
            setPropertyType(res.data.data);
            console.log(propertyType);
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getPropertyType();
    }, []);

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
            <Paper elevation={2}
                sx={{
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
                                value={setPropertyType_id}
                                onChange={handleChange}
                                label="Property Type"
                                sx={{
                                    marginTop: "3px"
                                }}
                            >
                                {
                                    propertyType.map((data, i) => (
                                        <MenuItem key={1} value={data.id}>{data.type}</MenuItem>
                                    ))}
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
                                        value={0}
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
                                        value={1}

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
                                has_kitchen === 1 ?
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
                                        value={0}
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
                                        value={1}
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
                                        value={0}
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
                                        value={1}
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
                                        value={0}
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
                                        value={1}
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
                                is_furnished === 1 ?
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
                                select
                            >
                                <MenuItem value="Greater Accra Region">Greater Accra</MenuItem>
                                <MenuItem value="Eastern Region">Eastern Region</MenuItem>
                                <MenuItem value="Central Region">House</MenuItem>
                            </TextField>

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
                                <MenuItem value="week">Week</MenuItem>
                                <MenuItem value="month">Month</MenuItem>
                                <MenuItem value="year">Year</MenuItem>
                            </TextField>
                        </Stack>

                        <Box mt={3}>
                            <Divider />
                            <Stack mt={2} spacing={2} direction="row"
                                sx={{
                                    alignItems: "center",
                                }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: "16px",
                                    }}>Upload Images
                                </Typography>

                                <Tooltip title={toolTipTitle}>
                                    <IconButton
                                        size="small"
                                        disableFocusRipple={true}
                                        onClick={openMsg}>
                                        <HelpOutlineOutlined sx={{
                                            fontSize: "18px",
                                        }} />
                                    </IconButton>
                                </Tooltip>
                            </Stack>
                            <Stack mt={2} spacing={1}>
                                <Stack spacing={1} direction="row" sx={{
                                    alignItems: "center",
                                }}>
                                    <IconButton
                                        component="label"
                                        sx={{
                                            fontSize: "14px",
                                            color: "#000",
                                        }}
                                    >
                                        <CloudUpload />
                                        <input hidden accept="image/*" type="file" multiple
                                            onChange={(e) => setFront(e.target.files)}
                                        />
                                    </IconButton>
                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                        {
                                            front.length === 0 ? "Front" : "Front: " + front.length + " files selected"
                                        }
                                    </Typography>
                                </Stack>
                                <Stack spacing={1} direction="row" sx={{
                                    alignItems: "center",
                                }}>
                                    <IconButton
                                        component="label"
                                        sx={{
                                            fontSize: "14px",
                                            color: "#000",
                                        }}
                                    >
                                        <CloudUpload />
                                        <input hidden accept="image/*" type="file" multiple
                                            onChange={(e) => setRear(e.target.files)}
                                        />
                                    </IconButton>
                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                        {
                                            rear.length === 0 ? "Rear" : "Rear: " + rear.length + " files selected"
                                        }
                                    </Typography>
                                </Stack>
                                <Stack spacing={1} direction="row" sx={{
                                    alignItems: "center",
                                }}>
                                    <IconButton
                                        component="label"
                                        sx={{
                                            fontSize: "14px",
                                            color: "#000",
                                        }}
                                    >
                                        <CloudUpload />
                                        <input hidden accept="image/*" type="file" multiple
                                            onChange={(e) => setBird_eye_view(e.target.files)}
                                        />
                                    </IconButton>
                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                        {
                                            bird_eye_view.length === 0 ? "Bed eye view" : "Bed eye view: " + bird_eye_view.length + " files selected"
                                        }
                                    </Typography>
                                </Stack>
                                <Stack spacing={1} direction="row" sx={{
                                    alignItems: "center",
                                }}>
                                    <IconButton
                                        component="label"
                                        sx={{
                                            fontSize: "14px",
                                            color: "#000",
                                        }}
                                    >
                                        <CloudUpload />
                                        <input hidden accept="image/*" type="file" multiple
                                            onChange={(e) => setKitchen(e.target.files)}
                                        />
                                    </IconButton>
                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                        {
                                            kitchen.length === 0 ? "Kitchen" : "Kitchen: " + kitchen.length + " files selected"
                                        }
                                    </Typography>
                                </Stack>
                                <Stack spacing={1} direction="row" sx={{
                                    alignItems: "center",
                                }}>
                                    <IconButton
                                        component="label"
                                        sx={{
                                            fontSize: "14px",
                                            color: "#000",
                                        }}
                                    >
                                        <CloudUpload />
                                        <input hidden accept="image/*" type="file" multiple
                                            onChange={(e) => setBedroom(e.target.files)}
                                        />
                                    </IconButton>
                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                        {
                                            bedroom.length === 0 ? "Bedroom" : "Bedroom: " + bedroom.length + " files selected"
                                        }
                                    </Typography>
                                </Stack>
                                <Stack spacing={1} direction="row" sx={{
                                    alignItems: "center",
                                }}>
                                    <IconButton
                                        component="label"
                                        sx={{
                                            fontSize: "14px",
                                            color: "#000",
                                        }}
                                    >
                                        <CloudUpload />
                                        <input hidden accept="image/*" type="file" multiple
                                            onChange={(e) => setBathroom(e.target.files)}
                                        />
                                    </IconButton>
                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                        {
                                            bathroom.length === 0 ? "Bathroom" : "Bathroom: " + bathroom.length + " files selected"
                                        }
                                    </Typography>
                                </Stack>
                                <Stack spacing={1} direction="row" sx={{
                                    alignItems: "center",
                                }}>
                                    <IconButton
                                        component="label"
                                        sx={{
                                            fontSize: "14px",
                                            color: "#000",
                                        }}
                                    >
                                        <CloudUpload />
                                        <input hidden accept="image/*" type="file" multiple
                                            onChange={(e) => setToilet(e.target.files)}
                                        />
                                    </IconButton>
                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                        {
                                            toilet.length === 0 ? "Toilet" : "Toilet: " + toilet.length + " files selected"
                                        }
                                    </Typography>
                                </Stack>
                                <Stack spacing={1} direction="row" sx={{
                                    alignItems: "center",
                                }}>
                                    <IconButton
                                        component="label"
                                        sx={{
                                            textTransform: "none",
                                            fontSize: "14px",
                                            color: "#000",
                                        }}
                                    >
                                        <CloudUpload />
                                        <input
                                            hidden
                                            accept="image/*"
                                            type="file"
                                            multiple
                                            onChange={(e) => setOther_images(e.target.files)}
                                        />
                                    </IconButton>
                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                        {
                                            other_images.length === 0 ? "Other images" : "Other Images: " + other_images.length + " files selected"
                                        }

                                    </Typography>
                                </Stack>
                            </Stack>
                            <Divider sx={{
                                margin: "20px 0",
                            }} />

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
                                        width: "150px",
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
                    </Box >
                </Box >
            </Paper >
            <MsgBox openMsgBox={openMsgBox} closeMsgBox={closeMsgBox} msgBoxMessage={msgBoxMessage} msgBoxTitle={msgBoxTitle} />
            <AlertDialog openAlert={openAlert} alertMessage={alertMessage} loading={loading} alertType={alertType} />
        </Box >
    );
}

export default UpdateListing
