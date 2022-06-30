import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import React, { useContext, useRef, useState } from 'react'
import Slider from 'react-slick';
import { UserContext } from '../context/UserContext';
import hse4 from "../img/hse4.jpg";


const DetailsImg = (props) => {
    // const [selectedImg, setSelectedImg] = useState(props.selectedImg);
    const { selectedImg, setSelectedImg } = useContext(UserContext);


    const imgslider = useRef(null);

    var imgsettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    initialSlide: 4,
                    infinite: true,
                },
            },
            {
                breakpoint: 912,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3,
                    infinite: false,
                },
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3,
                    infinite: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    infinite: false,
                },
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    infinite: false,
                },
            },
        ],
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
            }}
        >

            {/* <DetailsImg
              selectedImg={selectedImg}
              image1={hse4}
              image2={hse3}
              image3={hse2}
              image4={hse1}
              image5={hse5}
              image6={hse4}
              image7={hse3}
              image8={hse2}
              image9={hse1}
              image10={hse5}
            /> */}
            
            {/* main image */}
            <Box
                sx={{
                    width: "100%",
                    height: "auto",
                    margin: "0 auto",
                    borderRadius: "10px",
                }}>
                <img src={setSelectedImg} alt=""
                    style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                    }} />
            </Box>

            {/* Other images */}
            <Box
                mt={1}
                sx={{
                    width: "100%",
                    display: "flex",
                    height: {
                        xs: "80px",
                        sm: "110px",
                        md: "130px",
                        lg: "130px",
                    },
                    justifyContent: "center",
                    alignItems: "center",
                }}>

                {/* Prev slider button */}

                <IconButton
                    size="small"
                    disableRipple={true}
                    aria-label="previous"
                    onClick={() => imgslider.current.slickPrev()}
                    edge="start"
                >
                    <ChevronLeft
                        sx={{
                            fontSize: {
                                xs: "2rem",
                                sm: "2rem",
                                md: "2.5rem",
                                lg: "2.5rem",
                            },
                            color: "#000",
                        }}
                    />
                </IconButton>


                <Box
                    sx={{
                        width: "100%",
                        height: "auto",
                        overflow: "hidden",
                    }}>

                    <Slider ref={imgslider} {...imgsettings}>
                        
                        {
                            props.image1 ? (
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: {
                                            xs: "80px",
                                            sm: "110px",
                                            md: "130px",
                                            lg: "130px",
                                        },
                                        padding: "5px 10px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                    onClick={() => {
                                        setSelectedImg(props.image1)
                                        console.log(selectedImg)
                                    }}
                                >
                                    <img src={props.image1} alt=""
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "10px",
                                        }}
                                    />
                                </Box>
                            ):null
                        }
                       
                        {
                            props.image2 ? (
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: {
                                            xs: "80px",
                                            sm: "110px",
                                            md: "130px",
                                            lg: "130px",
                                        },
                                        padding: "5px 10px",

                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                    onClick={() => {
                                        setSelectedImg(props.image2)
                                        console.log(selectedImg)
                                    
                                     }}
                                >
                                    <img src={props.image2} alt=""
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "10px",
                                        }} />
                                </Box>
                            ):null
                       }
                        
                        {
                            props.image3 ? (<Box
                                sx={{
                                    width: "100%",
                                    height: {
                                        xs: "80px",
                                        sm: "110px",
                                        md: "130px",
                                        lg: "130px",
                                    },
                                    padding: "5px 10px",

                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                                onClick={() => {
                                    setSelectedImg(props.image3)
                                    console.log(selectedImg)
                                }}
                            >
                                <img src={props.image3} alt=""
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "10px",
                                    }} />
                            </Box>
                            ) : null
                        }
                        {
                            props.image4 ? (
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: {
                                            xs: "80px",
                                            sm: "110px",
                                            md: "130px",
                                            lg: "130px",
                                        },
                                        padding: "5px 10px",

                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                    onClick={() => {
                                        setSelectedImg(props.image4)
                                        console.log(selectedImg)
                                    
                                     }}
                                >
                                    <img src={props.image4} alt=""
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "10px",
                                        }} />
                                </Box>
                            ):null
                        }
                        {
                            props.image5 ? (
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: {
                                            xs: "80px",
                                            sm: "110px",
                                            md: "130px",
                                            lg: "130px",
                                        },
                                        padding: "5px 10px",

                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                    onClick={() => {
                                        setSelectedImg(props.image5)
                                        console.log(selectedImg)
                                    }}
                                >
                                    <img src={props.image5} alt=""
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "10px",
                                        }} />
                                </Box>
                            ):null
                       }
                        {
                            props.image6 ? (
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: {
                                            xs: "80px",
                                            sm: "110px",
                                            md: "130px",
                                            lg: "130px",
                                        },
                                        padding: "5px 10px",

                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                    onClick={() => {
                                        setSelectedImg(props.image6)
                                        console.log(selectedImg)
                                    
                                     }}
                                >
                                    <img src={props.image6} alt=""
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "10px",
                                        }} />
                                </Box>
                            ):null
                       }
                        {
                            props.image7 ? (
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: {
                                            xs: "80px",
                                            sm: "110px",
                                            md: "130px",
                                            lg: "130px",
                                        },
                                        padding: "5px 10px",

                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                    onClick={() => {
                                        setSelectedImg(props.image7)
                                        console.log(selectedImg)
                                    
                                     }}
                                >
                                    <img src={props.image7} alt=""
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "10px",
                                        }} />
                                </Box>
                            ):null
                       }
                        {
                            props.image8 ? (
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: {
                                            xs: "80px",
                                            sm: "110px",
                                            md: "130px",
                                            lg: "130px",
                                        },
                                        padding: "5px 10px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                    onClick={() => {
                                        setSelectedImg(props.image8)
                                        console.log(selectedImg)
                                    
                                     }}
                                >
                                    <img src={props.image8} alt=""
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "10px",
                                        }} />
                                </Box>
                            ):null
                        }
                        {
                            props.image9 ? (
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: {
                                            xs: "80px",
                                            sm: "110px",
                                            md: "130px",
                                            lg: "130px",
                                        },
                                        padding: "5px 10px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                    onClick={() => {
                                        setSelectedImg(props.image9)
                                        console.log(selectedImg)
                                    
                                     }}
                                >
                                    <img src={props.image9} alt=""
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "10px",
                                        }} />
                                </Box>
                            ):null
                        }
                        {
                            props.image10 ? (
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: {
                                            xs: "80px",
                                            sm: "110px",
                                            md: "130px",
                                            lg: "130px",
                                        },
                                        padding: "5px 10px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                    onClick={() => {
                                        setSelectedImg(props.image10)
                                        console.log(selectedImg)
                                     }}
                                >
                                    <img src={props.image10} alt=""
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "10px",
                                        }} />
                                </Box>
                            ):null
                        }
                    </Slider>
                </Box>
                {/* Prev slider button */}
                <IconButton
                    size="small"
                    disableRipple={true}
                    aria-label="next"
                    onClick={() => imgslider.current.slickNext()}
                    edge="end"
                >
                    <ChevronRight
                        sx={{
                            fontSize: {
                                xs: "2rem",
                                sm: "2rem",
                                md: "2.5rem",
                                lg: "2.5rem",
                            },
                            color: "#000",
                        }}
                    />
                </IconButton>
            </Box>
        </Box>
    )
}

export default DetailsImg
