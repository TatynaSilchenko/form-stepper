import React, {useState} from 'react';
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Step1 from "./Step1";
import Step2 from "./Step2";
import {FormProvider, useForm} from "react-hook-form";
import Button from "@mui/material/Button";
import Success from "./Success";
import styles from './UserForm.module.css';
import {pink, purple} from "@mui/material/colors";
const styleBTn = {  color: pink[800],
    '& .MuiSvgIcon-root': { fontSize: 35 },
    '&.MuiButtonBase-root': {
        background: 'linear-gradient(60.76deg,#e50093 .56%,#f73400 73.83%,#ed8000 92.51%)',
        color: '#ffffff',
        padding: '0.938rem 2.938rem',
        borderRadius: '1.875rem',
        '&:hover': {
            background: 'linear-gradient(0deg,rgba(255,255,255,.2),rgba(255,255,255,.2)),linear-gradient(60.76deg,#e50093 .56%,#f73400 73.83%,#ed8000 92.51%)',
            outline: 'none',
        }
    },
}

const UserForm = () => {
    const [activeStep, setActiveStep] = useState(0);

    const methods = useForm({
        defaultValues: {
            step1:[],
            radioButtonsGroup: "female",
        },
    });

    const questionArray = ['Choose the correct answer?','Choose the correct answer?']

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
                return <Step1  register={methods.register} error={methods.formState.errors} title={questionArray[step]}/>
            }
            case 1 : {
                return <Step2 title={questionArray[step]}/>
            }
        }
    }

    const handleNext = (data) => {
        console.log(data)
        setActiveStep(activeStep + 1)
        if (activeStep === steps.length - 1) {
            console.log('finish')
        }
    }


    return (
        <>
            <Stepper activeStep={activeStep}
                     alternativeLabel
                     className={styles.stepperWrapper}
                     sx={{'& .MuiStepLabel-root .Mui-completed': {
                             color: '#e50093', // circle color (COMPLETED)
                         },
                         '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                             {
                                 color: 'rgba(255,255,255,.85)', // Just text label (COMPLETED)
                             },
                         '& .MuiStepLabel-label':
                             {
                                 color: 'rgba(255,255,255,.85)', // Just text label (COMPLETED)
                             },
                         '& .MuiStepLabel-root .Mui-active': {
                             color: '#ed8000', // circle color (ACTIVE)
                         },
                         '& .MuiStepLabel-root' : {
                             color: '#ed8000', // circle color (COMPLETED)
                         },

                         '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                             {
                                 color: 'common.white', // Just text label (ACTIVE)
                             },
                         '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                             fill: 'rgba(255,255,255,.65)', // circle's number (ACTIVE)
                         },
                     }}
            >
                {steps.map((label, index) => (

                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            {activeStep === steps.length
                ? <Success/>
                : <FormProvider {...methods}>

                    <form onSubmit={methods.handleSubmit(handleNext)} className={styles.formWrapper}>
                        {getStepContent(activeStep)}
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            sx={styleBTn}
                        >
                            {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                    </form>
                </FormProvider>
            }
                </>

                );
                };

export default UserForm;