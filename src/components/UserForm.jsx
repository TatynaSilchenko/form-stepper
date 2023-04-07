import React, {useState} from 'react';
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Step1 from "./Step1";
import Step2 from "./Step2";
import {FormProvider, useForm} from "react-hook-form";
import Button from "@mui/material/Button";
import makeStyles from "@mui/material/styles/makeStyles";
import Success from "./Success";

// const useStyles = makeStyles((theme) => ({
//     button: {
//         marginRight: theme.spacing(1),
//     },
// }));

const UserForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    // const classes = useStyles();
    const methods = useForm({
        defaultValues: {
            answer1: false,
            answer2: false,
            answer3: false,
            answer4: false,
            answer5: false,
            radioButtonsGroup: "female",
        },
    });

    const getSteps = () => {
        return [
            'Step 1',
            'Step 2'
        ]
    }
    const steps = getSteps();

    const getStepContent = (step) => {
        switch (step) {
            case 0 : {
                return <Step1/>
            }
            case 1 : {
                return <Step2/>
            }
        }
    }

    const handleNext = (data) => {
        console.log(data)
        if (activeStep !== steps.length - 1) {
            setActiveStep(activeStep + 1)
        } else {
            setActiveStep(activeStep + 1)
            console.log('finish')
        }
    }


    return (
        <div>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (

                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            {activeStep === steps.length
                ? <Success/>
                : <FormProvider {...methods}>

                    <form onSubmit={methods.handleSubmit(handleNext)}>
                        {getStepContent(activeStep)}
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                    </form>
                </FormProvider>
            }
                </div>

                );
                };

                export default UserForm;