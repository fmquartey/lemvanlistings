
import { Box, Button, Paper, Stack, Step, StepButton, Stepper } from '@mui/material';
import React, { useState } from 'react';

const EditLis = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [steps, setSteps] = useState([
        { completed: false },
        { completed: false },
        { completed: false },
    ])

    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep(activeStep => activeStep + 1)
        } else {
            const stepLength = findUnfinished()
            setActiveStep(stepLength)
        }
    }

    const checkDisabled = () => {
        if (activeStep < steps.length - 1) return false
        const index = findUnfinished()
        if (index !== -1) return false
        return true
    }

    const findUnfinished = () => {
        steps.findIndex(step => !step.completed)
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
                <Box
                    sx={{
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

                        <Stepper
                            alternativeLabel
                            nonLinear
                            activeStep={activeStep}
                            sx={{
                                mb: 3
                            }}
                        >
                            {
                                steps.map((step, index) => (
                                    <Step key={step.label} completed={step.completed}>
                                        <StepButton onClick={() => setActiveStep(index)}>
                                            {step.label}
                                        </StepButton>
                                    </Step>
                                ))
                            }
                        </Stepper>
                        <Stack direction="row" sx={{
                            justifyContent: "space-around"
                        }}>
                            <Button color="inherit"
                                disabled={!activeStep}
                                onClick={() => setActiveStep(activeStep => activeStep - 1)}

                            >
                                Back
                            </Button>
                            <Button color="inherit"
                                disabled={checkDisabled()}
                                onClick={handleNext}
                            >
                                Next
                            </Button>
                        </Stack>
                    </Box>

                </Box>
            </Paper>
        </Box>
    );
}

export default EditLis;
