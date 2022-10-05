import { CloudUpload, HelpOutlineOutlined } from "@mui/icons-material";
import { Box, Button, Divider, FormControl, FormControlLabel, FormLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Stack, TextField, Tooltip, Typography } from "@mui/material"
import React, { useContext, useEffect, useState } from "react";
import { apilink } from "../../Helper";
import Axios from "axios";
import AlertDialog from "../AlertDialog";
import MsgBox from "../Alert";
import { UserContext } from "../../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import hse1 from "../../img/hse1.jpg";

const UpdateListing = () => {
    const { id } = useParams();
    const { token } = useContext(UserContext);
    const [propertyType, setPropertyType] = useState("");
    const [openAlert, setOpenAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const [openMsgBox, setOpenMsgBox] = useState(false);
    const [msgBoxTitle, setMsgBoxTitle] = useState("");
    const [msgBoxMessage, setMsgBoxMessage] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");
    const [property_type_id, setPropertyType_id] = useState([]);
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
    const [rearU, setRearU] = useState([]);
    const [rear, setRear] = useState([]);
    const [frontU, setFrontU] = useState([]);
    const [front, setFront] = useState([]);
    const [kitchenU, setKitchenU] = useState([]);
    const [kitchen, setKitchen] = useState([]);
    const [bird_eye_viewU, setBird_eye_viewU] = useState([]);
    const [bird_eye_view, setBird_eye_view] = useState([]);
    const [bathroomU, setBathroomU] = useState([]);
    const [bathroom, setBathroom] = useState([]);
    const [toilet, setToilet] = useState([]);
    const [toiletU, setToiletU] = useState([]);
    const [bedroom, setBedroom] = useState([]);
    const [bedroomU, setBedroomU] = useState([]);
    const [other_images, setOther_images] = useState([]);
    const [other_imagesU, setOther_imagesU] = useState([]);
    const [status, setStatus] = useState(0);

    const navigate = useNavigate();
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
                navigate("/app/landlord/listings")
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

    const listingStatus = (e) => {
        setStatus(e.target.value)
        if (status === 1) {
            setStatus(2);
        } else {
            setStatus(1);
        }
    }

    const getListing = () => {
        setLoading(true);
        authAxios.get(`/api/landlord/listings/${id}`)
            .then((res) => {
                setLoading(false);
                console.log(res.data.data);
                setPropertyType(res.data.data.property_type.type);
                setPropertyTitle(res.data.data.property_title);
                setNumber_of_bedrooms(res.data.data.number_of_bedrooms);
                setNumber_of_bathrooms(res.data.data.number_of_bathrooms);
                setNumber_of_toilets(res.data.data.number_of_toilets);
                setHas_kitchen(res.data.data.has_kitchen);
                setNumber_of_kitchens(res.data.data.number_of_kitchens);
                setHas_water(res.data.data.has_water);
                setHas_electricity(res.data.data.has_electricity);
                setIs_furnished(res.data.data.is_furnished);
                setFurnished_with(res.data.data.furnished_with);
                setLocation(res.data.data.location);
                setRegion(res.data.data.region);
                setFull_property_description(res.data.data.full_property_description);
                setAmount(res.data.data.amount);
                setFront(res.data.data.front);
                setRear(res.data.data.rear);
                setBird_eye_view(res.data.data.bird_eye_view);
                setKitchen(res.data.data.kitchen);
                setBathroom(res.data.data.bathroom);
                setToilet(res.data.data.toilet);
                setBedroom(res.data.data.bedroom);
                setOther_images(res.data.data.other_images);
                setIs_verified(res.data.data.is_verified);
                setStatus(res.data.data.status);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    const formSubmit = () => {




        setOpenAlert(true);
        setLoading(true);
        const formData = new FormData();
        formData.append("property_type_id", propertyType);
        formData.append("property_title", propertyTitle);
        formData.append("amount", amount);
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


        // rear images
        if (rearU.length > 0) {
            for (let r = 0; r < rearU.length; r++) {
                formData.append("rear[]", rearU[r]);
            }
        } else {
            for (let r = 0; r < rear.length; r++) {
                formData.append("rear[]", rear[r]);
            }
        }

        // formData.append("front", front);
        if (frontU.length > 0) {
            for (let f = 0; f < frontU.length; f++) {
                formData.append("front[]", frontU[f]);
            }
        } else {
            for (let f = 0; f < front.length; f++) {
                formData.append("front[]", front[f]);
            }
        }


        // formData.append("bird_eye_view", bird_eye_view);
        if (bird_eye_viewU.length > 0) {
            for (let b = 0; b < bird_eye_viewU.length; b++) {
                formData.append("bird_eye_view[]", bird_eye_viewU[b]);
            }
        } else {
            for (let b = 0; b < bird_eye_view.length; b++) {
                formData.append("bird_eye_view[]", bird_eye_view[b]);
            }
        }


        // formData.append("kitchen", kitchen);
        if (kitchenU.length > 0) {
            for (let k = 0; k < kitchenU.length; k++) {
                formData.append("kitchen[]", kitchenU[k]);
            }
        } else {
            for (let k = 0; k < kitchen.length; k++) {
                formData.append("kitchen[]", kitchen[k]);
            }
        }

        // formData.append("toilet", toilet);
        if (toiletU.length > 0) {
            for (let t = 0; t < toiletU.length; t++) {
                formData.append("toilet[]", toiletU[t]);
            }
        } else {
            for (let t = 0; t < toilet.length; t++) {
                formData.append("toilet[]", toilet[t]);
            }
        }

        // formData.append("bathroom", bathroom);
        if (bathroomU.length > 0) {
            for (let b = 0; b < bathroomU.length; b++) {
                formData.append("bathroom[]", bathroomU[b]);
            }
        } else {
            for (let c = 0; c < bathroom.length; c++) {
                formData.append("bathroom[]", bathroom[c]);
            }
        }

        // formData.append("bedroom", bedroom);
        if (bedroomU.length > 0) {
            for (let b = 0; b < bedroomU.length; b++) {
                formData.append("bedroom[]", bedroomU[b]);
            }
        } else {
            for (let d = 0; d < bedroom.length; d++) {
                formData.append("bedroom[]", bedroom[d]);
            }
        }

        // formData.append("other_images", other_images);
        if (other_imagesU.length > 0) {
            for (let o = 0; o < other_imagesU.length; o++) {
                formData.append("other_images[]", other_imagesU[o]);
            }
        } else {
            for (let o = 0; o < other_images.length; o++) {
                formData.append("other_images[]", other_images[o]);
            }
        }


        formData.append("status", status);
        formData.append("_method", "PUT");
        authAxios.post(`/api/landlord/listings/${id}`, formData).then(res => {
            console.log(res);
            setAlertType("success");
            setAlertMessage(res.data.data.message)
            setTimeout(() => {
                setLoading(false)
                closeAlert()
            }, 2000);

            setPropertyTitle("")
            setAmount("")
            setPeriod("")
            setNumber_of_bedrooms("")
            setNumber_of_bathrooms("")
            setNumber_of_toilets("")
            setHas_kitchen(0)
            setNumber_of_kitchens("")
            setHas_water(0)
            setHas_electricity(0)
            setIs_furnished(0)
            setFurnished_with("")
            setLocation("")
            setRegion("")
            setFull_property_description("")
            setIs_verified(0)
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
            setLoading(false);
            closeAlert()
        })
    }



    const getPropertyType = () => {
        Axios.get(`${apilink}/api/property/types`).then((res) => {
            setPropertyType_id(res.data.data);
            console.log(res.data.data)
            // console.log(property_type_id);
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getListing();
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
                                value={propertyType}
                                onChange={handleChange}
                                label="Property Type"
                                sx={{
                                    marginTop: "3px"
                                }}
                            >
                                {
                                    property_type_id.map((item, index) => (
                                        <MenuItem key={index} value={item.type}>{item.type}</MenuItem>
                                    ))
                                }

                                {/* <MenuItem value="1">Apartment</MenuItem>
                                <MenuItem value="2">Single Room</MenuItem> */}
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
                                    focused={false}>Is funished?</FormLabel>
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
                                <MenuItem value="Accra">Greater Accra</MenuItem>
                                <MenuItem value="Eastern">Eastern Region</MenuItem>
                                <MenuItem value="Central">House</MenuItem>
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
                                label="Amount(GHC)/Period"
                            />

                            {/* <TextField
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
                            </TextField> */}
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
                                    }}>Images
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

                            {/* image */}
                            <Stack mt={1} spacing={1}>
                                {/* front images */}
                                <Box sx={{
                                    width: "100%",
                                    height: "auto",
                                }}>
                                    <Box>
                                        <Typography variant="body1" sx={{
                                            fontSize: "16px",
                                        }}>
                                            Front Image(s)
                                        </Typography>
                                        <Box sx={{
                                            width: "100%",
                                            height: "auto"
                                        }}>
                                            {
                                                front.length === 0 ? (
                                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                                        No Front Image(s) found
                                                    </Typography>
                                                ) : (
                                                    <Grid
                                                        container
                                                        columnSpacing={2}
                                                        rowSpacing={4}>
                                                        {
                                                            front.map((image, index) => (
                                                                <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                                                                    <Box sx={{
                                                                        width: "100%",
                                                                        height: "auto",
                                                                    }}>
                                                                        <img src={image} alt=""
                                                                            style={{
                                                                                width: "100%",
                                                                                height: "auto"
                                                                            }} />
                                                                    </Box>
                                                                </Grid>
                                                            ))
                                                        }
                                                    </Grid>
                                                )
                                            }

                                        </Box>
                                    </Box>
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
                                                onChange={(e) => setFrontU(e.target.files)}
                                            />
                                        </IconButton>
                                        <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                            {
                                                frontU.length === 0 ? "Front" : "Front: " + frontU.length + " files selected"
                                            }
                                        </Typography>
                                    </Stack>
                                </Box>

                                {/* rear images */}
                                <Box sx={{
                                    width: "100%",
                                    height: "auto",
                                }}>
                                    <Box>
                                        <Typography variant="body1" sx={{ fontSize: "16px" }}>
                                            Rear Image(s)
                                        </Typography>
                                        <Box sx={{
                                            width: "100%",
                                            height: "auto"
                                        }}>
                                            {
                                                rear.length === 0 ? (
                                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                                        No Rear Images(s) found
                                                    </Typography>
                                                ) : (
                                                    <Grid
                                                        container
                                                        columnSpacing={2}
                                                        rowSpacing={4}>
                                                        {
                                                            rear.map((rear, index) => (
                                                                <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                                                                    <Box sx={{
                                                                        width: "100%",
                                                                        height: "auto",
                                                                    }}>
                                                                        <img src={rear} alt=""
                                                                            style={{
                                                                                width: "100%",
                                                                                height: "auto"
                                                                            }} />
                                                                    </Box>
                                                                </Grid>
                                                            ))
                                                        }
                                                    </Grid>
                                                )
                                            }

                                        </Box>
                                    </Box>
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
                                                onChange={(e) => setRearU(e.target.files)}
                                            />
                                        </IconButton>
                                        <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                            {
                                                rearU.length === 0 ? "Rear" : "Rear: " + rearU.length + " files selected"
                                            }
                                        </Typography>
                                    </Stack>
                                </Box>

                                {/* Bird_eye_view */}
                                <Box sx={{
                                    width: "100%",
                                    height: "auto",
                                }}>
                                    <Box>
                                        <Typography variant="body1" sx={{ fontSize: "16px" }}>
                                            Bed Eye View Image(s)
                                        </Typography>
                                        <Box sx={{
                                            width: "100%",
                                            height: "auto"
                                        }}>
                                            {
                                                bird_eye_view.length === 0 ? (
                                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                                        No Bird Eye View Image(s) found
                                                    </Typography>
                                                ) : (
                                                    <Grid
                                                        container
                                                        columnSpacing={2}
                                                        rowSpacing={4}>
                                                        {
                                                            bird_eye_view.map((bedeye, index) => (
                                                                <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                                                                    <Box sx={{
                                                                        width: "100%",
                                                                        height: "auto",
                                                                    }}>
                                                                        <img src={bedeye} alt=""
                                                                            style={{
                                                                                width: "100%",
                                                                                height: "auto"
                                                                            }} />
                                                                    </Box>
                                                                </Grid>
                                                            ))
                                                        }
                                                    </Grid>
                                                )
                                            }

                                        </Box>
                                    </Box>
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
                                                onChange={(e) => setBird_eye_viewU(e.target.files)}
                                            />
                                        </IconButton>
                                        <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                            {
                                                bird_eye_viewU.length === 0 ? "Bed Eye View" : "Bed Eye View: " + bird_eye_viewU.length + " files selected"
                                            }
                                        </Typography>
                                    </Stack>
                                </Box>

                                {/* Kitchen */}
                                <Box sx={{
                                    width: "100%",
                                    height: "auto",
                                }}>
                                    <Box>
                                        <Typography variant="body1" sx={{ fontSize: "16px" }}>
                                            Kitchen Image(s)
                                        </Typography>
                                        <Box sx={{
                                            width: "100%",
                                            height: "auto"
                                        }}>
                                            {
                                                kitchen.length === 0 ? (
                                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                                        No kitchen image(s) found
                                                    </Typography>
                                                ) : (
                                                    <Grid
                                                        container
                                                        columnSpacing={2}
                                                        rowSpacing={4}>
                                                        {
                                                            kitchen.map((kitchenimg, index) => (
                                                                <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                                                                    <Box sx={{
                                                                        width: "100%",
                                                                        height: "auto",
                                                                    }}>
                                                                        <img src={kitchenimg} alt=""
                                                                            style={{
                                                                                width: "100%",
                                                                                height: "auto"
                                                                            }} />
                                                                    </Box>
                                                                </Grid>
                                                            ))
                                                        }
                                                    </Grid>
                                                )
                                            }

                                        </Box>
                                    </Box>
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
                                                onChange={(e) => setKitchenU(e.target.files)}
                                            />
                                        </IconButton>
                                        <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                            {
                                                kitchenU.length === 0 ? "Kitchen" : "Kitchen: " + kitchenU.length + " files selected"
                                            }
                                        </Typography>
                                    </Stack>
                                </Box>

                                {/* Bedroom */}
                                <Box sx={{
                                    width: "100%",
                                    height: "auto",
                                }}>
                                    <Box>
                                        <Typography variant="body1" sx={{ fontSize: "16px" }}>
                                            Bedroom Image(s)
                                        </Typography>
                                        <Box sx={{
                                            width: "100%",
                                            height: "auto"
                                        }}>
                                            {
                                                bedroom.length === 0 ? (
                                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                                        No Bedroom Image(s) found
                                                    </Typography>
                                                ) : (
                                                    <Grid
                                                        container
                                                        columnSpacing={2}
                                                        rowSpacing={4}>
                                                        {
                                                            bedroom.map((bedroomimg, index) => (
                                                                <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                                                                    <Box sx={{
                                                                        width: "100%",
                                                                        height: "auto",
                                                                    }}>
                                                                        <img src={bedroomimg} alt=""
                                                                            style={{
                                                                                width: "100%",
                                                                                height: "auto"
                                                                            }} />
                                                                    </Box>
                                                                </Grid>
                                                            ))
                                                        }
                                                    </Grid>
                                                )
                                            }

                                        </Box>
                                    </Box>
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
                                                onChange={(e) => setBedroomU(e.target.files)}
                                            />
                                        </IconButton>
                                        <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                            {
                                                bedroomU.length === 0 ? "Bedroom" : "Bedroom: " + bedroomU.length + " files selected"
                                            }
                                        </Typography>
                                    </Stack>
                                </Box>

                                {/* Bathroom */}
                                <Box sx={{
                                    width: "100%",
                                    height: "auto",
                                }}>
                                    <Box>
                                        <Typography variant="body1" sx={{ fontSize: "16px" }}>
                                            Bathroom Image(s)
                                        </Typography>
                                        <Box sx={{
                                            width: "100%",
                                            height: "auto"
                                        }}>
                                            {
                                                bathroom.length === 0 ? (
                                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                                        No Bathroom Image(s) found
                                                    </Typography>
                                                ) : (
                                                    <Grid
                                                        container
                                                        columnSpacing={2}
                                                        rowSpacing={4}>
                                                        {
                                                            bathroom.map((bathroomimg, index) => (
                                                                <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                                                                    <Box sx={{
                                                                        width: "100%",
                                                                        height: "auto",
                                                                    }}>
                                                                        <img src={bathroomimg} alt=""
                                                                            style={{
                                                                                width: "100%",
                                                                                height: "auto"
                                                                            }} />
                                                                    </Box>
                                                                </Grid>
                                                            ))
                                                        }
                                                    </Grid>
                                                )
                                            }

                                        </Box>
                                    </Box>
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
                                                onChange={(e) => setBathroomU(e.target.files)}
                                            />
                                        </IconButton>
                                        <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                            {
                                                bathroomU.length === 0 ? "Bathroom" : "Bathroom: " + bathroomU.length + " files selected"
                                            }
                                        </Typography>
                                    </Stack>
                                </Box>

                                {/* toilet */}
                                <Box sx={{
                                    width: "100%",
                                    height: "auto",
                                }}>
                                    <Box>
                                        <Typography variant="body1" sx={{ fontSize: "16px" }}>
                                            Toilet Image(s)
                                        </Typography>
                                        <Box sx={{
                                            width: "100%",
                                            height: "auto"
                                        }}>
                                            {
                                                toilet.length === 0 ? (
                                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                                        No Toilet Image(s) found
                                                    </Typography>
                                                ) : (
                                                    <Grid
                                                        container
                                                        columnSpacing={2}
                                                        rowSpacing={4}>
                                                        {
                                                            toilet.map((toiletimg, index) => (
                                                                <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                                                                    <Box sx={{
                                                                        width: "100%",
                                                                        height: "auto",
                                                                    }}>
                                                                        <img src={toiletimg} alt=""
                                                                            style={{
                                                                                width: "100%",
                                                                                height: "auto"
                                                                            }} />
                                                                    </Box>
                                                                </Grid>
                                                            ))
                                                        }
                                                    </Grid>
                                                )
                                            }

                                        </Box>
                                    </Box>
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
                                                onChange={(e) => setToiletU(e.target.files)}
                                            />
                                        </IconButton>
                                        <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                            {
                                                toiletU.length === 0 ? "Toilet" : "Toilet: " + toiletU.length + " files selected"
                                            }
                                        </Typography>
                                    </Stack>
                                </Box>

                                {/* other images */}
                                <Box sx={{
                                    width: "100%",
                                    height: "auto",
                                }}>
                                    <Box>
                                        <Typography variant="body1" sx={{ fontSize: "16px" }}>
                                            Other Image(s)
                                        </Typography>
                                        <Box sx={{
                                            width: "100%",
                                            height: "auto"
                                        }}>
                                            {
                                                other_images !== null ? (

                                                    <Grid
                                                        container
                                                        columnSpacing={2}
                                                        rowSpacing={4}>
                                                        {
                                                            other_images.map((otherimg, index) => (
                                                                <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                                                                    <Box sx={{
                                                                        width: "100%",
                                                                        height: "auto",
                                                                    }}>
                                                                        <img src={otherimg} alt=""
                                                                            style={{
                                                                                width: "100%",
                                                                                height: "auto"
                                                                            }} />
                                                                    </Box>
                                                                </Grid>
                                                            ))
                                                        }
                                                    </Grid>

                                                ) : (
                                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                                        No Other Image(s) found
                                                    </Typography>
                                                )
                                            }

                                        </Box>
                                    </Box>
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
                                            <input
                                                hidden
                                                accept="image/*"
                                                type="file"
                                                multiple
                                                onChange={(e) => setOther_imagesU(e.target.files)}
                                            />
                                        </IconButton>
                                        <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                            {
                                                other_imagesU.length === 0 ? "Other images" : "Other Images: " + other_imagesU.length + " files selected"
                                            }
                                        </Typography>
                                    </Stack>
                                </Box>

                            </Stack>
                            <Divider sx={{
                                margin: "20px 0",
                            }} />

                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                    marginTop: "20px",
                                }}>

                                {/* <FormControl>
                                    <FormLabel
                                        id="status_label"
                                        focused={false} >Save as</FormLabel>
                                    <RadioGroup
                                        row
                                        name="status"
                                        aria-labelledby="status_label"
                                        value={status}
                                        onChange={listingStatus}>
                                        <FormControlLabel
                                            value={2}
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
                                            label="Draft" />
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
                                            label="Publish" />
                                    </RadioGroup>
                                </FormControl> */}
                                <Button
                                    size="small"
                                    variant="contained"
                                    onClick={formSubmit}
                                    disabled={false}
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
